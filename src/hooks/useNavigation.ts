import { useCallback, useEffect } from "react";
import { useNavigationStore } from "../store/navigationStore";

export const useNavigation = () => {
  const {
    activeLink,
    isMenuOpen,
    scrollY,
    setActiveLink,
    setIsMenuOpen,
    setScrollY,
    toggleMenu,
  } = useNavigationStore();

  const handleNavLinkClick = useCallback(
    (link: string) => {
      setActiveLink(link);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    },
    [setActiveLink, isMenuOpen, setIsMenuOpen]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  return {
    activeLink,
    isMenuOpen,
    scrollY,
    setActiveLink,
    setIsMenuOpen,
    toggleMenu,
    handleNavLinkClick,
  };
};
