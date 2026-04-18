import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

const dashboardHtml = `<div style="display:flex;flex-direction:column;gap:16px;padding:16px;border:1px solid var(--border-default);border-radius:6px;background:var(--bg-base)">
  <div style="display:flex;justify-content:space-between;align-items:center">
    <div>
      <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-tertiary);font-weight:600;margin-bottom:4px">Production · main</div>
      <div style="font-size:20px;font-weight:600">atlas-edge</div>
    </div>
    <div style="display:flex;gap:8px">
      <div class="atlas-segmented">
        <button class="atlas-segmented-item">1h</button>
        <button class="atlas-segmented-item is-active">24h</button>
        <button class="atlas-segmented-item">7d</button>
      </div>
      <button class="atlas-btn atlas-btn-primary">Deploy</button>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
    <div class="atlas-card"><div class="atlas-card-body"><div class="atlas-stat"><div class="atlas-stat-label">REQUESTS</div><div class="atlas-stat-value">12,847</div><div class="atlas-stat-delta is-up">+4.2%</div></div></div></div>
    <div class="atlas-card"><div class="atlas-card-body"><div class="atlas-stat"><div class="atlas-stat-label">P95 LATENCY</div><div class="atlas-stat-value">187ms</div><div class="atlas-stat-delta is-down">-12ms</div></div></div></div>
    <div class="atlas-card"><div class="atlas-card-body"><div class="atlas-stat"><div class="atlas-stat-label">ERRORS</div><div class="atlas-stat-value">42</div><div class="atlas-stat-delta is-down">-8.1%</div></div></div></div>
    <div class="atlas-card"><div class="atlas-card-body"><div class="atlas-stat"><div class="atlas-stat-label">UPTIME</div><div class="atlas-stat-value">99.98%</div></div></div></div>
  </div>
  <div class="atlas-card">
    <div class="atlas-card-header" style="display:flex;justify-content:space-between">
      <span style="display:flex;align-items:center;gap:6px"><span class="atlas-dot atlas-dot-success"></span><span class="atlas-panel-title">Recent deployments</span></span>
      <a href="#" class="atlas-link" style="font-size:11px">View all</a>
    </div>
    <div class="atlas-card-body" style="padding:0">
      <table class="atlas-table" style="width:100%;border:0">
        <thead><tr><th>Build</th><th>Branch</th><th>Env</th><th class="num">Duration</th><th class="num">Status</th></tr></thead>
        <tbody>
          <tr><td style="font-family:var(--font-mono);font-size:11px">a9f3b1</td><td>main</td><td>prod</td><td class="num">1m 24s</td><td class="num"><span class="atlas-badge atlas-badge-success">OK</span></td></tr>
          <tr><td style="font-family:var(--font-mono);font-size:11px">cc02ae</td><td>main</td><td>prod</td><td class="num">1m 18s</td><td class="num"><span class="atlas-badge atlas-badge-success">OK</span></td></tr>
          <tr><td style="font-family:var(--font-mono);font-size:11px">7d21ee</td><td>feat/cache</td><td>preview</td><td class="num">2m 02s</td><td class="num"><span class="atlas-badge atlas-badge-warning">SLOW</span></td></tr>
          <tr><td style="font-family:var(--font-mono);font-size:11px">4b11cd</td><td>fix/regex</td><td>preview</td><td class="num">—</td><td class="num"><span class="atlas-badge atlas-badge-error">FAIL</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`;

export default function DashboardPatternPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Header with segmented control and primary action · 4-col stat grid · detail table in a card."
          dos={["Lead with 4 key metrics max — any more dilutes attention", "Put the primary action top-right"]}
          donts={["Don't use pie charts — Atlas prefers stats + tables for data density"]}
        />
      }
    >
      <PageHeader
        eyebrow="Patterns"
        title="Dashboard"
        subtitle="A production overview: environment header, stat grid, and a deployments table. Composed entirely from Atlas primitives."
      />
      <Section title="Live preview">
        <Example block html={dashboardHtml} />
      </Section>
    </PageBody>
  );
}
