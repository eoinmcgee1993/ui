import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function StepperPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Dot (12px) · label · 1px connector. is-active = blue. is-done = filled."
          tokens={["--accent-highlight", "--border-default"]}
          dos={["Number 3–6 steps max", "Make each step reversible if state allows"]}
          donts={["Don't use for branching flows — use a tab-based wizard"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-stepper"
        title="Stepper"
        meta={[".atlas-stepper", ".atlas-stepper-step", ".atlas-stepper-dot", ".atlas-stepper-label", ".is-active", ".is-done"]}
        subtitle="Horizontal multi-step progress. Blue active dot, filled done, connectors between."
      />
      <Section title="Default">
        <Example
          html={`<ol class="atlas-stepper" style="list-style:none;padding:0;margin:0;display:flex;align-items:center;gap:8px">
  <li class="atlas-stepper-step is-done" style="display:flex;align-items:center;gap:6px"><span class="atlas-stepper-dot"></span><span class="atlas-stepper-label">Account</span></li>
  <li class="atlas-stepper-sep" style="width:32px;height:1px;background:var(--border-default)"></li>
  <li class="atlas-stepper-step is-active" style="display:flex;align-items:center;gap:6px"><span class="atlas-stepper-dot"></span><span class="atlas-stepper-label">Plan</span></li>
  <li class="atlas-stepper-sep" style="width:32px;height:1px;background:var(--border-default)"></li>
  <li class="atlas-stepper-step" style="display:flex;align-items:center;gap:6px"><span class="atlas-stepper-dot"></span><span class="atlas-stepper-label">Payment</span></li>
  <li class="atlas-stepper-sep" style="width:32px;height:1px;background:var(--border-default)"></li>
  <li class="atlas-stepper-step" style="display:flex;align-items:center;gap:6px"><span class="atlas-stepper-dot"></span><span class="atlas-stepper-label">Confirm</span></li>
</ol>`}
        />
      </Section>
    </PageBody>
  );
}
