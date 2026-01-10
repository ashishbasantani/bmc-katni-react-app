import { create } from "zustand";

interface NavigationState {
  activeLink: string;
  isMenuOpen: boolean;
  scrollY: number;

  setActiveLink: (link: string) => void;
  setIsMenuOpen: (open: boolean) => void;
  setScrollY: (y: number) => void;
  toggleMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set: any) => ({
  activeLink: "/",
  isMenuOpen: false,
  scrollY: 0,

  setActiveLink: (activeLink) => set({ activeLink }),
  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  setScrollY: (scrollY) => set({ scrollY }),
  toggleMenu: () =>
    set((state: NavigationState) => ({
      isMenuOpen: !state.isMenuOpen,
    })),
}));
