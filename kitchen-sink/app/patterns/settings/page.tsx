import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

const settingsHtml = `<div style="display:grid;grid-template-columns:200px 1fr;gap:16px;padding:16px;border:1px solid var(--border-default);border-radius:6px;background:var(--bg-base)">
  <aside>
    <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-tertiary);font-weight:600;margin-bottom:8px;padding:0 8px">Settings</div>
    <ul class="atlas-list" style="list-style:none;padding:0;margin:0;font-size:13px">
      <li class="atlas-list-item is-selected">General</li>
      <li class="atlas-list-item">Environment variables</li>
      <li class="atlas-list-item">Domains</li>
      <li class="atlas-list-item">Team</li>
      <li class="atlas-list-item">Billing</li>
      <li class="atlas-list-item">Danger zone</li>
    </ul>
  </aside>
  <main>
    <div style="display:flex;flex-direction:column;gap:16px">
      <div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 4px">General</h3>
        <p style="font-size:13px;color:var(--text-secondary);margin:0">Project metadata and deployment defaults.</p>
      </div>
      <div class="atlas-card">
        <div class="atlas-card-header"><span class="atlas-panel-title">Project name</span></div>
        <div class="atlas-card-body" style="display:flex;gap:8px;align-items:center">
          <input class="atlas-input" value="atlas-edge" style="flex:1" />
          <button class="atlas-btn atlas-btn-primary">Save</button>
        </div>
      </div>
      <div class="atlas-card">
        <div class="atlas-card-header"><span class="atlas-panel-title">Default branch</span></div>
        <div class="atlas-card-body">
          <div class="atlas-segmented">
            <button class="atlas-segmented-item is-active">main</button>
            <button class="atlas-segmented-item">master</button>
            <button class="atlas-segmented-item">develop</button>
          </div>
        </div>
      </div>
      <div class="atlas-card">
        <div class="atlas-card-header"><span class="atlas-panel-title">Notifications</span></div>
        <div class="atlas-card-body" style="display:flex;flex-direction:column;gap:8px">
          <label style="display:flex;align-items:center;justify-content:space-between;font-size:13px"><span>Deploy succeeded</span><button class="atlas-switch is-on"></button></label>
          <label style="display:flex;align-items:center;justify-content:space-between;font-size:13px"><span>Deploy failed</span><button class="atlas-switch is-on"></button></label>
          <label style="display:flex;align-items:center;justify-content:space-between;font-size:13px"><span>Weekly digest</span><button class="atlas-switch"></button></label>
        </div>
      </div>
      <div class="atlas-alert atlas-alert-error" style="margin-top:8px">
        <div class="atlas-alert-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg></div>
        <div class="atlas-alert-title">Danger zone</div>
        <div class="atlas-alert-desc">Deleting a project is permanent. All deployments and logs will be removed.</div>
      </div>
    </div>
  </main>
</div>`;

export default function SettingsPatternPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Side nav + content column. Each section is a card with a panel header. Destructive actions go in a red alert."
          dos={["Group related settings in one card", "Put the danger zone last, behind a red alert"]}
          donts={["Don't use tabs for settings sections — a side nav scales better"]}
        />
      }
    >
      <PageHeader
        eyebrow="Patterns"
        title="Settings"
        subtitle="Side-navigated preferences. Cards per section, controls inline. Destructive actions isolated."
      />
      <Section title="Live preview">
        <Example block html={settingsHtml} />
      </Section>
    </PageBody>
  );
}
