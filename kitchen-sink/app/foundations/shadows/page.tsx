import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { ShadowGrid } from "@/components/showcase/scale-row";

const shadows = [
  { token: "--shadow-sm", value: "0 1px 2px rgba(0,0,0,0.6)" },
  { token: "--shadow-md", value: "0 4px 12px rgba(0,0,0,0.8)" },
  { token: "--shadow-lg", value: "0 8px 24px rgba(0,0,0,0.9)" },
  { token: "--shadow-overlay", value: "0 16px 48px rgba(0,0,0,0.95)" },
];

export default function ShadowsPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Shadows are for overlays only. Cards and panels are border-defined."
          dos={["Use --shadow-md for popovers and dropdowns", "Use --shadow-lg for dialogs", "Use --shadow-overlay for full-screen modals"]}
          donts={["Don't shadow cards or panels — use borders", "Don't combine shadow + border on the same element"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Shadows"
        subtitle="Atlas is border-defined. Shadows are reserved for floating overlays — popovers, dialogs, toasts, tooltips — to separate them visually from the canvas."
      />
      <Section title="Scale">
        <ShadowGrid items={shadows} />
      </Section>
    </PageBody>
  );
}
