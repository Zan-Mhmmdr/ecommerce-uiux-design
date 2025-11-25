import { create } from "zustand";

type SearchState = {
  searchHistory: string[];
  addSearchHistory: (query: string) => void;
  removeSearchHistory: (query: string) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  searchHistory: [],

  addSearchHistory: (query) =>
    set((state) => {
      if (!query.trim()) return state;

      const updated = [
        query,
        ...state.searchHistory.filter((item) => item !== query),
      ].slice(0, 5);

      return { searchHistory: updated };
    }),

  removeSearchHistory: (query) =>
    set((state) => ({
      searchHistory: state.searchHistory.filter((item) => item !== query),
    })),
}));
