import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Titlebar } from "@/components/shell/titlebar";
import { Sidebar } from "@/components/shell/sidebar";
import { SidebarBackdrop } from "@/components/shell/sidebar-backdrop";
import { CommandPalette } from "@/components/command-palette";

const SITE_URL = "https://ui.pacifio.dev";
const SITE_NAME = "Atlas";
const SITE_TITLE = "Atlas — The shadcn for agent UI";
const SITE_DESCRIPTION =
  "Framework-agnostic design language for agent interfaces. 50+ components, AMOLED-black + light themes, multi-surface (web + mobile). Drop the reference CSS into plain HTML, or translate the rules for shadcn / Tailwind / React / Vue / Svelte.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Atlas",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "pacifio", url: "https://github.com/pacifio" }],
  creator: "pacifio",
  publisher: "pacifio",
  generator: "Next.js",
  keywords: [
    "design system",
    "agent ui",
    "ai ui",
    "shadcn alternative",
    "component library",
    "css framework",
    "tailwind",
    "react",
    "vue",
    "amoled",
    "dark theme",
    "developer tools",
    "admin ui",
    "dashboard",
    "claude code skill",
    "coding agent",
  ],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Atlas — The shadcn for agent UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@pacifio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={`/atlas.css?v=${Date.now()}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
  var t = localStorage.getItem('atlas-theme') || 'system';
  var eff = t === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : t;
  document.documentElement.setAttribute('data-theme', eff);
  var s = localStorage.getItem('atlas-sidebar');
  var mobile = window.matchMedia('(max-width: 768px)').matches;
  var sidebar = s || (mobile ? 'collapsed' : 'expanded');
  document.documentElement.setAttribute('data-sidebar', sidebar);
} catch (e) {}`,
          }}
        />
      </head>
      <body>
        <div className="ks-shell">
          <div className="ks-shell-titlebar">
            <Titlebar />
          </div>
          <aside className="ks-shell-sidebar">
            <Sidebar />
          </aside>
          <main className="ks-shell-main">{children}</main>
        </div>
        <SidebarBackdrop />
        <CommandPalette />
      </body>
    </html>
  );
}
