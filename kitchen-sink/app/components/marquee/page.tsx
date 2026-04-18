import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { CodeBlock } from "@/components/showcase/code-block";
import { Marquee } from "@/components/showcase/marquee";

const snippet = `<div class="atlas-marquee">
  <div class="atlas-marquee-track">
    <span>40+ components</span>
    <span>·</span>
    <span>AMOLED black</span>
    <span>·</span>
    <span>Multi-surface</span>
    <span>·</span>
    <!-- Duplicate content for seamless loop -->
    <span>40+ components</span>
    <span>·</span>
    <span>AMOLED black</span>
    <span>·</span>
    <span>Multi-surface</span>
    <span>·</span>
  </div>
</div>`;

export default function MarqueePage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Infinite horizontal scroll · 60s default duration · pause on hover · soft edge mask."
          dos={["Duplicate the track content so the loop is seamless", "Pair with display type on landing pages", "Keep per-item text short — marquees don't render long phrases well"]}
          donts={["Don't use on dense app UIs — it's a landing-surface flourish", "Don't speed up below 30s — becomes disorienting"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-marquee"
        title="Marquee"
        subtitle="Infinite scrolling text strip. For landing pages, brand bands, and persistent status ribbons."
        meta={[".atlas-marquee", ".atlas-marquee-track"]}
      />

      <Section title="Live preview">
        <div className="ks-preview ks-preview-block">
          <Marquee
            items={[
              <span key="1" style={{ fontSize: 20, fontWeight: 600 }}>40+ components</span>,
              <span key="2" style={{ color: "var(--text-tertiary)" }}>·</span>,
              <span key="3" style={{ fontSize: 20, fontWeight: 600 }}>AMOLED black</span>,
              <span key="4" style={{ color: "var(--text-tertiary)" }}>·</span>,
              <span key="5" style={{ fontSize: 20, fontWeight: 600 }}>Multi-surface</span>,
              <span key="6" style={{ color: "var(--text-tertiary)" }}>·</span>,
              <span key="7" style={{ fontSize: 20, fontWeight: 600 }}>Framework-agnostic</span>,
              <span key="8" style={{ color: "var(--text-tertiary)" }}>·</span>,
            ]}
          />
        </div>
      </Section>

      <Section title="Slower brand band (120s)">
        <div className="ks-preview ks-preview-block">
          <Marquee
            duration={120}
            items={[
              <span key="a" className="atlas-badge atlas-badge-success">OK</span>,
              <span key="b" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>atlas-core</span>,
              <span key="c" className="atlas-badge atlas-badge-warning">SLOW</span>,
              <span key="d" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>atlas-edge</span>,
              <span key="e" className="atlas-badge atlas-badge-success">OK</span>,
              <span key="f" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>atlas-api</span>,
              <span key="g" className="atlas-badge atlas-badge-error">FAIL</span>,
              <span key="h" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>atlas-docs</span>,
            ]}
          />
        </div>
      </Section>

      <Section title="HTML">
        <CodeBlock code={snippet} />
      </Section>
    </PageBody>
  );
}
