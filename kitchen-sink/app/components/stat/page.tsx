import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function StatPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="10px uppercase label · 28px mono value · 11px delta (green up, red down)."
          tokens={["--font-mono", "--text-2xl", "--status-success", "--status-error"]}
          dos={["Use mono for numbers", "Include delta for trending data"]}
          donts={["Don't wrap a stat in a decorative border — put it inside a card"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-stat"
        title="Stat"
        meta={[".atlas-stat", ".atlas-stat-label", ".atlas-stat-value", ".atlas-stat-delta"]}
        subtitle="Single metric block. Uppercase label, large mono value, optional delta."
      />
      <Section title="Default">
        <Example
          html={`<div class="atlas-stat">
  <div class="atlas-stat-label">REVENUE</div>
  <div class="atlas-stat-value">$12,847</div>
  <div class="atlas-stat-delta is-up">+12.4%</div>
</div>`}
        />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "Up", html: `<div class="atlas-stat"><div class="atlas-stat-label">USERS</div><div class="atlas-stat-value">8,129</div><div class="atlas-stat-delta is-up">+4.2%</div></div>` },
            { label: "Down", html: `<div class="atlas-stat"><div class="atlas-stat-label">ERRORS</div><div class="atlas-stat-value">42</div><div class="atlas-stat-delta is-down">-8.1%</div></div>` },
            { label: "No delta", html: `<div class="atlas-stat"><div class="atlas-stat-label">UPTIME</div><div class="atlas-stat-value">99.98%</div></div>` },
            { label: "In card", html: `<div class="atlas-card" style="width:220px"><div class="atlas-card-header"><span class="atlas-panel-title">Latency</span></div><div class="atlas-card-body"><div class="atlas-stat"><div class="atlas-stat-value">187ms</div><div class="atlas-stat-delta is-down">-12ms</div></div></div></div>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
