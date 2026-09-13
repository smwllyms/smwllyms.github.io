import * as React from "react";

export interface NavigationEntry {
  sectionId: string;
}

interface UseNavigationProps {
  initialSectionId?: string;
  offsetY?: number;
  navigationEntries: Array<NavigationEntry>;
}
interface UseNavigationResult {
  navigate: (sectionId: string) => void;
  currentSectionIdInView?: string;
}

export const useNavigation = (props: UseNavigationProps): UseNavigationResult => {

  const navigationEntries = React.useMemo(() => props.navigationEntries, [props.navigationEntries]);
  const [currentSectionId, setCurrentSectionId] = React.useState<string>(props.initialSectionId || navigationEntries[0].sectionId);
  const [currentSectionIdInView, setCurrentSectionIdInView] = React.useState<string | undefined>(undefined);
  const [key, setKey] = React.useState(0); // Forces re-render when clicked section is same but user has scrolled away

  React.useEffect(() => {

    const sectionEntry = navigationEntries.find(entry => entry.sectionId === currentSectionId);
    if (!sectionEntry) return;
    const sectionElement = document.getElementById(currentSectionId);
    if (!sectionElement) return;
    const rect = sectionElement.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    let top: number = absoluteTop;
    if (props.offsetY) {
      top -= props.offsetY;
    }
    window.scroll({
      behavior: "smooth",
      top
    });
  }, [currentSectionId, navigationEntries, key]);

  React.useEffect(() => {
    const rootMargin = `-${props.offsetY || 0}px 0px -100% 0px`;
    const observer = new IntersectionObserver((entries) => {
      let best = null;
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          if (!best || entries[i].target.getBoundingClientRect().top > best.target.getBoundingClientRect().top) {
            best = entries[i];
          }
        }
      }
      if (best) {
        setCurrentSectionIdInView(best.target.id);
      }
    }, { threshold: 0, rootMargin });

    const observed: Element[] = [];
    navigationEntries.forEach(entry => {
      const element = document.getElementById(entry.sectionId);
      if (element) {
        observer.observe(element);
        observed.push(element);
      }
    });

    return () => {
      observed.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [navigationEntries, props.offsetY]);

  const navigate = React.useCallback((newSectionId: string) => {
    setCurrentSectionId(newSectionId);
    setKey(prev => prev + 1);
  }, []);

  return { navigate, currentSectionIdInView };
}