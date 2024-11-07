import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Guitar } from '@/global';
import { GuitarService } from '@/services';

interface GuitarState {
  guitars: Guitar[];
  getAll: () => void;
}

const storeAPI: StateCreator<GuitarState> = (set) => ({
  guitars: [],
  getAll: async () => {
    try {
      const guitars = await GuitarService.getAll();
      set({ guitars });
    } catch (err) {
      set({ guitars: [] });
      throw err;
    }
  }
});

export const useGuitarStore = create<GuitarState>()((
  devtools(
    persist(
      storeAPI,
      { name: 'guitar-store' }
    )
  )
));