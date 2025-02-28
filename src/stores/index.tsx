import { createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';

interface IMicodeProps {
  dark: boolean;
  locale: string;
}

interface IMicodeStore extends IMicodeProps {
  setDark: (updater: (prev: boolean) => boolean) => void;
  setLanguage: (language: IMicodeProps['locale']) => void;
}

export const micodeStore = createStore<IMicodeStore>()(
  persist(
    set => ({
      dark: false,
      locale: 'pt',
      setDark: updater => set(state => ({ dark: updater(state.dark) })),
      setLanguage: locale => set(() => ({ locale }))
    }),
    {
      name: 'micode-store'
    }
  )
);

export const useMicodeStore = () => useStore(micodeStore);
