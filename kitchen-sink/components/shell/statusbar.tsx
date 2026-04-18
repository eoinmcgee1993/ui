import { componentCount } from "@/lib/nav";

export function Statusbar() {
  return (
    <footer className="atlas-statusbar">
      <div className="ks-statusbar-slot">
        <span className="atlas-dot atlas-dot-success" />
        <span>Ready</span>
      </div>
      <div className="ks-statusbar-slot">{componentCount()} components</div>
      <div className="ks-statusbar-slot">Atlas 0.1.0</div>
      <div style={{ flex: 1 }} />
      <div className="ks-statusbar-slot">
        <kbd className="atlas-kbd">⌘K</kbd>
        <span>palette</span>
      </div>
    </footer>
  );
}
