type Variant = "mobile" | "tablet" | "desktop";

export function DeviceFrame({
  variant,
  url = "atlas.dev",
  children,
  scale = 1,
}: {
  variant: Variant;
  url?: string;
  children: React.ReactNode;
  scale?: number;
}) {
  const style = scale !== 1 ? { transform: `scale(${scale})`, transformOrigin: "top center" } : undefined;

  if (variant === "mobile") {
    return (
      <div className="atlas-device-mobile" style={style}>
        <div className="atlas-device-mobile-safe-top">
          <div className="atlas-device-mobile-notch" />
        </div>
        <div className="atlas-device-mobile-inner">{children}</div>
        <div className="atlas-device-mobile-safe-bottom">
          <div className="atlas-device-mobile-indicator" />
        </div>
      </div>
    );
  }

  if (variant === "tablet") {
    return (
      <div className="atlas-device-tablet" style={style}>
        <div className="atlas-device-tablet-inner">{children}</div>
      </div>
    );
  }

  return (
    <div className="atlas-device-desktop" style={style}>
      <div className="atlas-device-desktop-chrome">
        <div className="atlas-device-desktop-chrome-left">
          <span className="atlas-device-desktop-dot is-close" />
          <span className="atlas-device-desktop-dot is-min" />
          <span className="atlas-device-desktop-dot is-max" />
        </div>
        <span className="atlas-device-desktop-url">{url}</span>
        <div className="atlas-device-desktop-chrome-right">
          <button className="atlas-device-desktop-btn" aria-label="Share">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>
          <button className="atlas-device-desktop-btn" aria-label="New tab">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="atlas-device-desktop-inner">{children}</div>
    </div>
  );
}
