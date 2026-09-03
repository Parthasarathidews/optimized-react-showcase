import { Link } from "@tanstack/react-router";

import { API_BASE_URL, API_ENDPOINTS, DEFAULT_PAGE_SIZE } from "@/constants/api";
import { ROUTES } from "@/constants/routes";

/** Values come from constants files, so nothing is hardcoded twice. */
const ConstantsExample = () => (
  <div className="space-y-4 text-sm">
    <div className="rounded-md border border-border p-3">
      <p className="font-medium text-foreground">From constants/api.js</p>
      <p className="font-mono text-xs text-muted-foreground">API_BASE_URL = {API_BASE_URL}</p>
      <p className="font-mono text-xs text-muted-foreground">
        users endpoint = {API_BASE_URL}
        {API_ENDPOINTS.users}?_limit={DEFAULT_PAGE_SIZE}
      </p>
    </div>

    <div className="rounded-md border border-border p-3">
      <p className="font-medium text-foreground">From constants/routes.js</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <Link to={ROUTES.performance.useMemo} className="text-primary underline">
          useMemo example
        </Link>
        <Link to={ROUTES.seo.structuredData} className="text-primary underline">
          Structured data example
        </Link>
      </div>
    </div>
  </div>
);

export default ConstantsExample;
