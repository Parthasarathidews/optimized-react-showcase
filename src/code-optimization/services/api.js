import { API_BASE_URL, API_ENDPOINTS, DEFAULT_PAGE_SIZE } from "@/constants/api";

// Service layer: every network call lives here, so UI components never
// contain fetch/try-catch logic. One place to change base URL, headers, etc.
const request = async (endpoint, params = {}) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    return await response.json();
  } catch (error) {
    // Re-throw a clean, UI-friendly error message.
    throw new Error(error.message || "Network error");
  }
};

export const getUsers = (limit = DEFAULT_PAGE_SIZE) => request(API_ENDPOINTS.users, { _limit: limit });

export const getPosts = (limit = DEFAULT_PAGE_SIZE) => request(API_ENDPOINTS.posts, { _limit: limit });
