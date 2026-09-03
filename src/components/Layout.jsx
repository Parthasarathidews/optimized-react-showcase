import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

/** App shell: sidebar on the left, navbar on top, routed content in main. */
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>
      </aside>

      {/* Mobile drawer */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsSidebarOpen(false)}
            className="flex-1 bg-foreground/40"
          />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar onToggleSidebar={() => setIsSidebarOpen((open) => !open)} />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">{children}</main>
        <footer className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
          Learning project · open the browser console to observe re-renders
        </footer>
      </div>
    </div>
  );
};

export default Layout;
