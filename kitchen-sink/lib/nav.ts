export type NavItem = { title: string; href: string; klass?: string };
export type NavGroup = { label: string; items: NavItem[] };

export const NAV: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Get started", href: "/get-started" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Radius", href: "/foundations/radius" },
      { title: "Shadows", href: "/foundations/shadows" },
      { title: "Motion", href: "/foundations/motion" },
      { title: "Icons", href: "/foundations/icons" },
    ],
  },
  {
    label: "Primitives",
    items: [
      { title: "Button", href: "/components/button", klass: ".atlas-btn" },
      { title: "Button pill", href: "/components/button-pill", klass: ".atlas-btn-pill" },
      { title: "Input", href: "/components/input", klass: ".atlas-input" },
      { title: "Checkbox", href: "/components/checkbox", klass: ".atlas-checkbox" },
      { title: "Radio", href: "/components/radio", klass: ".atlas-radio" },
      { title: "Switch", href: "/components/switch", klass: ".atlas-switch" },
      { title: "Kbd", href: "/components/kbd", klass: ".atlas-kbd" },
      { title: "Link", href: "/components/link", klass: ".atlas-link" },
      { title: "Marquee", href: "/components/marquee", klass: ".atlas-marquee" },
    ],
  },
  {
    label: "Surfaces",
    items: [
      { title: "Card", href: "/components/card", klass: ".atlas-card" },
      { title: "Panel header", href: "/components/panel-header", klass: ".atlas-panel-header" },
      { title: "Stat", href: "/components/stat", klass: ".atlas-stat" },
      { title: "Empty", href: "/components/empty", klass: ".atlas-empty" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { title: "Tabs", href: "/components/tabbar", klass: ".atlas-tabbar" },
      { title: "Bottom tab bar", href: "/components/tabbar-bottom", klass: ".atlas-tabbar-bottom" },
      { title: "Segmented", href: "/components/segmented", klass: ".atlas-segmented" },
      { title: "Toggle", href: "/components/toggle", klass: ".atlas-toggle" },
      { title: "Breadcrumb", href: "/components/breadcrumb", klass: ".atlas-breadcrumb" },
      { title: "Pagination", href: "/components/pagination", klass: ".atlas-pagination" },
      { title: "Stepper", href: "/components/stepper", klass: ".atlas-stepper" },
    ],
  },
  {
    label: "Overlays",
    items: [
      { title: "Popover", href: "/components/popover", klass: ".atlas-popover" },
      { title: "Dialog", href: "/components/dialog", klass: ".atlas-dialog" },
      { title: "Command", href: "/components/command", klass: ".atlas-command" },
      { title: "Tooltip", href: "/components/tooltip", klass: ".atlas-tooltip" },
      { title: "Toast", href: "/components/toast", klass: ".atlas-toast" },
      { title: "Alert", href: "/components/alert", klass: ".atlas-alert" },
    ],
  },
  {
    label: "Data",
    items: [
      { title: "Table", href: "/components/table", klass: ".atlas-table" },
      { title: "List", href: "/components/list", klass: ".atlas-list" },
      { title: "Badge", href: "/components/badge", klass: ".atlas-badge" },
      { title: "Pill", href: "/components/pill", klass: ".atlas-pill" },
      { title: "Accordion", href: "/components/accordion", klass: ".atlas-accordion" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { title: "Progress", href: "/components/progress", klass: ".atlas-progress" },
      { title: "Slider", href: "/components/slider", klass: ".atlas-slider" },
      { title: "Skeleton", href: "/components/skeleton", klass: ".atlas-skeleton" },
      { title: "Dot", href: "/components/dot", klass: ".atlas-dot" },
    ],
  },
  {
    label: "Identity",
    items: [
      { title: "Avatar", href: "/components/avatar", klass: ".atlas-avatar" },
      { title: "Divider", href: "/components/divider", klass: ".atlas-divider" },
      { title: "Divider dashed", href: "/components/divider-dashed", klass: ".atlas-divider-dashed" },
    ],
  },
  {
    label: "Layout",
    items: [
      { title: "Titlebar", href: "/components/titlebar", klass: ".atlas-titlebar" },
      { title: "Statusbar", href: "/components/statusbar", klass: ".atlas-statusbar" },
    ],
  },
  {
    label: "Patterns",
    items: [
      { title: "Landing", href: "/patterns/landing" },
      { title: "Agent chat", href: "/patterns/agent-chat" },
      { title: "Mobile app", href: "/patterns/mobile-app" },
      { title: "3-pane shell", href: "/patterns/three-pane-shell" },
      { title: "Dashboard", href: "/patterns/dashboard" },
      { title: "Settings", href: "/patterns/settings" },
    ],
  },
  {
    label: "Full mockups",
    items: [
      { title: "Email", href: "/mockups/email" },
      { title: "E-commerce", href: "/mockups/ecommerce" },
      { title: "Multi-agent", href: "/mockups/multi-agent" },
      { title: "News & polls", href: "/mockups/news" },
    ],
  },
];

export function allItems(): NavItem[] {
  return NAV.flatMap((g) => g.items);
}

export function componentCount(): number {
  return NAV.filter((g) => ["Primitives", "Surfaces", "Navigation", "Overlays", "Data", "Feedback", "Identity", "Layout"].includes(g.label)).reduce((n, g) => n + g.items.length, 0);
}
