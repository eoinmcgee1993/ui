#!/usr/bin/env node
/**
 * Generates local cafe leads in Chiang Mai using Apify Google Maps Scraper.
 *
 * Usage:
 *   APIFY_API_TOKEN=your_token node scripts/generate-local-leads.js
 *
 * Optional env vars:
 *   SEARCH_QUERY   - what to search (default: "cafe")
 *   LOCATION       - where to search (default: "Chiang Mai, Thailand")
 *   MAX_RESULTS    - max leads to collect (default: 100)
 *   OUTPUT_FILE    - output path (default: leads.json)
 */

const https = require("https");
const fs = require("fs");

const APIFY_API_TOKEN = process.env.APIFY_API_TOKEN;
const SEARCH_QUERY = process.env.SEARCH_QUERY || "cafe";
const LOCATION = process.env.LOCATION || "Chiang Mai, Thailand";
const MAX_RESULTS = parseInt(process.env.MAX_RESULTS || "100", 10);
const OUTPUT_FILE = process.env.OUTPUT_FILE || "leads.json";

if (!APIFY_API_TOKEN) {
  console.error("Error: APIFY_API_TOKEN environment variable is required.");
  console.error(
    "Get a free token at https://console.apify.com/account/integrations"
  );
  process.exit(1);
}

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function startActor() {
  console.log(`Searching for "${SEARCH_QUERY}" in ${LOCATION}...`);

  const input = {
    searchStringsArray: [`${SEARCH_QUERY} ${LOCATION}`],
    maxCrawledPlacesPerSearch: MAX_RESULTS,
    language: "en",
    exportPlaceUrls: false,
    includeWebResults: false,
    scrapeDirectories: false,
    scrapeTableReservation: false,
    scrapePeopleAlsoSearch: false,
    includeHistogram: false,
    includePeopleAlsoSearch: false,
    additionalInfo: false,
    maxAutomaticZoomOut: null,
    allPlacesNoSearchAction: "",
  };

  const res = await request(
    {
      hostname: "api.apify.com",
      path: `/v2/acts/compass~google-maps-scraper/runs?token=${APIFY_API_TOKEN}`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
    input
  );

  if (res.status !== 201) {
    throw new Error(
      `Failed to start actor: ${res.status} - ${JSON.stringify(res.body)}`
    );
  }

  return res.body.data.id;
}

async function waitForRun(runId) {
  console.log(`Run started (id: ${runId}). Waiting for completion...`);
  const pollInterval = 5000;

  while (true) {
    await new Promise((r) => setTimeout(r, pollInterval));

    const res = await request({
      hostname: "api.apify.com",
      path: `/v2/actor-runs/${runId}?token=${APIFY_API_TOKEN}`,
      method: "GET",
    });

    const status = res.body?.data?.status;
    process.stdout.write(`  Status: ${status}\r`);

    if (status === "SUCCEEDED") {
      console.log("\nRun completed successfully.");
      return res.body.data.defaultDatasetId;
    }

    if (["FAILED", "ABORTED", "TIMED-OUT"].includes(status)) {
      throw new Error(`Run ${status.toLowerCase()}: ${runId}`);
    }
  }
}

async function fetchResults(datasetId) {
  console.log("Fetching results...");

  const res = await request({
    hostname: "api.apify.com",
    path: `/v2/datasets/${datasetId}/items?token=${APIFY_API_TOKEN}&limit=${MAX_RESULTS}&fields=title,address,city,state,countryCode,postalCode,website,phone,categoryName,totalScore,reviewsCount,latitude,longitude,url`,
    method: "GET",
  });

  if (res.status !== 200) {
    throw new Error(`Failed to fetch results: ${res.status}`);
  }

  return Array.isArray(res.body) ? res.body : [];
}

function formatLeads(items) {
  return items.map((item) => ({
    name: item.title || "",
    category: item.categoryName || "",
    address: item.address || "",
    city: item.city || "",
    phone: item.phone || "",
    website: item.website || "",
    rating: item.totalScore ?? null,
    reviews: item.reviewsCount ?? null,
    latitude: item.latitude ?? null,
    longitude: item.longitude ?? null,
    google_maps_url: item.url || "",
  }));
}

async function main() {
  const runId = await startActor();
  const datasetId = await waitForRun(runId);
  const raw = await fetchResults(datasetId);
  const leads = formatLeads(raw);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(leads, null, 2));

  console.log(`\nDone! ${leads.length} leads saved to ${OUTPUT_FILE}`);
  console.log("\nSample (first 3):");
  leads.slice(0, 3).forEach((l, i) => {
    console.log(`  ${i + 1}. ${l.name} — ${l.address} — ${l.phone || "no phone"}`);
  });
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
