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
  }, [currentSectionId, navigationEntries]);

  React.useEffect(() => {
    const rootMargin = `-${props.offsetY || 0}px 0px 0px 0px`;
    const observer = new IntersectionObserver((entries) => {
      if (!entries || entries.length === 0) return;
      // choose the entry with the largest intersectionRatio
      let best = entries[0];
      for (let i = 1; i < entries.length; i++) {
        if (entries[i].intersectionRatio > best.intersectionRatio) best = entries[i];
      }
      const id = best.target.id;
      if (best.isIntersecting && best.intersectionRatio > 0.2) {
        setCurrentSectionIdInView(id);
      }
    }, { threshold: [0, 0.25, 0.45, 0.6, 0.8], rootMargin });

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

  const navigate = React.useCallback((newSectionId: string) => setCurrentSectionId(newSectionId), []);

  return { navigate, currentSectionIdInView };
}