import { ImageResponse } from "next/og";

export const alt = "Atlas — The shadcn for agent UI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse 900px 600px at 15% 10%, rgba(0, 112, 243, 0.22), transparent 60%), radial-gradient(ellipse 800px 500px at 85% 90%, rgba(237, 237, 237, 0.08), transparent 60%), #000",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: 64,
          position: "relative",
        }}
      >
        {/* Top band — brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 0 0 2px rgba(255,255,255,0.1)",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>Atlas</div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#777",
                fontWeight: 600,
                padding: "4px 10px",
                border: "1px solid #1e1e1e",
                borderRadius: 4,
                display: "flex",
              }}
            >
              v0.2 · MIT
            </div>
          </div>
        </div>

        {/* Main — headline + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", marginTop: 24 }}>
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#0070f3",
              fontWeight: 700,
              marginBottom: 24,
              display: "flex",
            }}
          >
            Design system · agent UI
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 0.98,
              color: "#fff",
              marginBottom: 32,
              maxWidth: 900,
              display: "flex",
            }}
          >
            The shadcn for agent UI.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "#aaa",
              maxWidth: 820,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              display: "flex",
            }}
          >
            Framework-agnostic design language. 50+ components. AMOLED-black, multi-surface, dark + light.
          </div>
        </div>

        {/* Footer — mock UI chips + repo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              background: "#ededed",
              color: "#000",
              borderRadius: 9999,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "-0.005em",
            }}
          >
            Get started
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              background: "transparent",
              color: "#aaa",
              border: "1px solid #1e1e1e",
              borderRadius: 9999,
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Browse components
          </div>
          <div style={{ flex: 1 }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              background: "#0f0f0f",
              border: "1px solid #1e1e1e",
              borderRadius: 8,
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              fontSize: 16,
              color: "#aaa",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#50e3c2",
              }}
            />
            github.com/pacifio/ui
          </div>
        </div>

        {/* Decorative dots in corner */}
        <div style={{ position: "absolute", top: 64, right: 64, display: "flex", gap: 8 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#50e3c2" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#CD9731" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F44747" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
