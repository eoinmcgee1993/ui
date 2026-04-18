import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { RadiusGrid } from "@/components/showcase/scale-row";

const radii = [
  { token: "--radius-sm", value: "3px", radius: 3 },
  { token: "--radius-md", value: "4px", radius: 4 },
  { token: "--radius-lg", value: "6px", radius: 6 },
  { token: "--radius-full", value: "9999px", radius: 9999 },
];

export default function RadiusPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Three subtle radii + pill. No hero radii. Inputs at 4px, cards at 6px, pills at 9999px."
          dos={["Use --radius-md for buttons and inputs", "Use --radius-lg for cards and panels", "Use --radius-full only for pills and avatars"]}
          donts={["Don't invent radii like 12px or 16px", "Don't mix radii inside a single component"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Radius"
        subtitle="Atlas uses three radii (3 / 4 / 6) plus a pill. Subtle on everything except tokens-style pills and avatars. No hero radii."
      />
      <Section title="Scale">
        <RadiusGrid items={radii} />
      </Section>
    </PageBody>
  );
}
