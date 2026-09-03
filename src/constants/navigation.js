// Single source of truth for the sidebar + home page cards.
// Keeping navigation data in one constants file avoids duplicated,
// hardcoded link lists across Sidebar, Navbar and Home.
export const NAV_SECTIONS = [
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Render less, compute less and load less: memoization, lazy loading and virtualization.",
    links: [
      { label: "React.memo", to: "/performance/react-memo" },
      { label: "useMemo", to: "/performance/use-memo" },
      { label: "useCallback", to: "/performance/use-callback" },
      { label: "Lazy Loading", to: "/performance/lazy-loading" },
      { label: "Debouncing", to: "/performance/debouncing" },
      { label: "Throttling", to: "/performance/throttling" },
      { label: "Image Lazy Loading", to: "/performance/image-lazy-loading" },
      { label: "Virtualization", to: "/performance/virtualization" },
    ],
  },
  {
    id: "code",
    title: "Code Optimization",
    description: "Reusable components, custom hooks, service layers and clean state management.",
    links: [
      { label: "Reusable Components", to: "/code/reusable-components" },
      { label: "Custom Hooks", to: "/code/custom-hooks" },
      { label: "API Service", to: "/code/api-service" },
      { label: "Component Separation", to: "/code/component-separation" },
      { label: "State Management", to: "/code/state-management" },
      { label: "Constants", to: "/code/constants" },
    ],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Metadata, semantic markup, structured data and crawlable, descriptive links.",
    links: [
      { label: "Meta Tags", to: "/seo/meta-tags" },
      { label: "Semantic HTML", to: "/seo/semantic-html" },
      { label: "Image Optimization", to: "/seo/image-optimization" },
      { label: "Page Metadata (Helmet)", to: "/seo/helmet" },
      { label: "Structured Data", to: "/seo/structured-data" },
      { label: "SEO Friendly Links", to: "/seo/friendly-links" },
    ],
  },
];
