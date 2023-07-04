import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchQuery?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  resetGameQuery: () => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchQuery: (searchQuery: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  resetGameQuery: () => set(() => ({ gameQuery: {} })),
  setGenreId: (genreId: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId: number) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: platformId },
    })),
  setSortOrder: (sortOrder: string) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder: sortOrder },
    })),
  setSearchQuery: (searchQuery: string) =>
    set({ gameQuery: { searchQuery: searchQuery } }),
}));

export default useGameQueryStore;
