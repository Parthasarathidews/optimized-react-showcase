import { Link } from "@tanstack/react-router";

import { NAV_SECTIONS } from "@/constants/navigation";

/** Sidebar navigation rendered from NAV_SECTIONS (no duplicated JSX per link). */
const Sidebar = ({ onNavigate }) => (
  <nav
    aria-label="Examples navigation"
    className="flex h-full w-72 shrink-0 flex-col gap-6 overflow-y-auto bg-sidebar px-4 py-6 text-sidebar-foreground"
  >
    <Link to="/" onClick={onNavigate} className="px-2 font-mono text-sm tracking-widest text-sidebar-primary">
      REACT&nbsp;OPTIMIZATION&nbsp;LAB
    </Link>

    {NAV_SECTIONS.map((section) => (
      <div key={section.id} className="space-y-1">
        <p className="px-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60">
          {section.title}
        </p>
        <ul className="space-y-0.5">
          {section.links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={onNavigate}
                className="block rounded-md px-2 py-1.5 text-sm text-sidebar-foreground/85 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                activeProps={{
                  className:
                    "block rounded-md px-2 py-1.5 text-sm bg-sidebar-primary text-sidebar-primary-foreground font-medium",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </nav>
);

export default Sidebar;
