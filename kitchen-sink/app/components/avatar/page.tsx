import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function AvatarPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px circle · 11px bold initials · pill radius · border on stacked group members."
          tokens={["--radius-full", "--text-xs", "--bg-raised"]}
          dos={["Use initials for text avatars", "Cap avatar groups at 3–4 with +N overflow"]}
          donts={["Don't pad to > 32px — Atlas stays compact"]}
        />
      }
    >
      <PageHeader
        eyebrow=".atlas-avatar"
        title="Avatar"
        meta={[".atlas-avatar", ".atlas-avatar-group"]}
        subtitle="Compact 24px circular avatar with initials. Stack into groups for collaborators."
      />
      <Section title="Variants">
        <Variants
          items={[
            { label: "Initials", html: `<div class="atlas-avatar">AB</div>` },
            { label: "Group", html: `<div class="atlas-avatar-group" style="display:inline-flex"><div class="atlas-avatar" style="border:1px solid var(--bg-base);margin-right:-6px">AB</div><div class="atlas-avatar" style="border:1px solid var(--bg-base);margin-right:-6px">CD</div><div class="atlas-avatar" style="border:1px solid var(--bg-base);margin-right:-6px">EF</div><div class="atlas-avatar" style="border:1px solid var(--bg-base)">+3</div></div>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
