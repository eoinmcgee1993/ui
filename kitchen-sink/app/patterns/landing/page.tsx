import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { DeviceFrame } from "@/components/showcase/device-frame";
import { Marquee } from "@/components/showcase/marquee";

function LandingContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: 700 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", borderBottom: "1px solid var(--border-default)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 14 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: "linear-gradient(135deg,var(--accent-primary),var(--accent-highlight))" }} />
          Atlas
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 13, color: "var(--text-secondary)" }}>
          <a className="atlas-link" href="#">Docs</a>
          <a className="atlas-link" href="#">Components</a>
          <a className="atlas-link" href="#">Pricing</a>
          <button className="atlas-btn-pill atlas-btn-pill-primary atlas-btn-pill-sm">Sign in</button>
        </nav>
      </div>

      <div style={{ padding: "80px 32px 56px", textAlign: "center", borderBottom: "1px dashed var(--border-default)" }}>
        <p className="atlas-eyebrow" style={{ marginBottom: 16 }}>Design System · v0.2</p>
        <h1 className="atlas-display-lg" style={{ maxWidth: 900, margin: "0 auto 16px" }}>
          The shadcn for<br />agent UI.
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.55, maxWidth: 560, margin: "0 auto 24px" }}>
          Framework-agnostic tokens and 50+ component classes. Dense agent dashboards, mobile native-style views, and pill-button landing pages — one system, every surface.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          <button className="atlas-btn-pill atlas-btn-pill-primary">Get started</button>
          <button className="atlas-btn-pill atlas-btn-pill-ghost">Browse components →</button>
        </div>
      </div>

      <div style={{ padding: "24px 0", borderBottom: "1px dashed var(--border-default)" }}>
        <Marquee
          duration={80}
          items={[
            <span key="a" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>AMOLED BLACK</span>,
            <span key="b" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="c" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>40+ COMPONENTS</span>,
            <span key="d" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="e" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>MULTI-SURFACE</span>,
            <span key="f" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="g" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>DARK + LIGHT</span>,
            <span key="h" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="i" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>FRAMEWORK-AGNOSTIC</span>,
            <span key="j" style={{ color: "var(--text-ghost)" }}>◆</span>,
          ]}
        />
      </div>

      <div style={{ padding: "56px 32px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, borderBottom: "1px dashed var(--border-default)" }}>
        {[
          { label: "Dense by default", desc: "28px buttons, 13px base, 4px grid. Built for tool-heavy interfaces." },
          { label: "Alive, not cold", desc: "Pill buttons, glass effects, subtle motion. Agent UIs that don't feel sterile." },
          { label: "Multi-surface", desc: "Desktop app shells, mobile native-style views, web landing pages — one system." },
        ].map((f) => (
          <div key={f.label}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "var(--text-primary)" }}>{f.label}</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "56px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.02em" }}>Start building</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
          Drop the CSS into any project. Tailwind, React, Vue, plain HTML — all work.
        </p>
        <div style={{ display: "inline-flex", gap: 8 }}>
          <button className="atlas-btn-pill atlas-btn-pill-primary">Install plugin</button>
          <button className="atlas-btn-pill atlas-btn-pill-secondary">Read docs</button>
        </div>
      </div>
    </div>
  );
}

export default function LandingPatternPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Display hero · dashed dividers between sections · marquee brand band · pill CTAs throughout."
          tokens={[".atlas-display-lg", ".atlas-eyebrow", ".atlas-btn-pill", ".atlas-divider-dashed", ".atlas-marquee"]}
          dos={["Keep hero to one sentence + subtitle", "One marquee per page — more feels busy", "Dashed dividers between logical sections only"]}
          donts={["Don't stack more than one display heading per page", "Don't let the marquee run faster than 60s — hard to read"]}
        />
      }
    >
      <PageHeader
        eyebrow="Patterns"
        title="Landing page"
        subtitle="The alive, outward-facing surface. Display hero, dashed section dividers, marquee, pill CTAs. Rendered inside a desktop device frame so you see it as a site, not docs."
      />
      <Section title="Live preview">
        <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
          <DeviceFrame variant="desktop" url="ui.pacifio.dev">
            <LandingContent />
          </DeviceFrame>
        </div>
      </Section>
    </PageBody>
  );
}
