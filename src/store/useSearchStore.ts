import { create } from "zustand";

type SearchState = {
  searchHistory: string[];
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  searchHistory: [],

  setSearchQuery: (query) =>
    set((set) => ({
      searchHistory: query
        ? [query, ...set.searchHistory.filter((item) => item !== query)]
        : set.searchHistory,
    })),

  clearSearch: () => set(() => ({ searchHistory: [] })),
}));


