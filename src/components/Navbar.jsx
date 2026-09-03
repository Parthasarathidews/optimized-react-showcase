import { Menu } from "lucide-react";

/** Top header bar. Receives a toggle callback for the mobile sidebar drawer. */
const Navbar = ({ onToggleSidebar }) => (
  <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-card/90 px-4 backdrop-blur">
    <button
      type="button"
      onClick={onToggleSidebar}
      aria-label="Toggle navigation"
      className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
    >
      <Menu className="h-5 w-5" />
    </button>
    <h2 className="font-mono text-sm font-medium tracking-tight text-foreground">
      React Performance · Code · SEO Optimization Lab
    </h2>
    <span className="ml-auto hidden rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground sm:block">
      20 working examples
    </span>
  </header>
);

export default Navbar;
