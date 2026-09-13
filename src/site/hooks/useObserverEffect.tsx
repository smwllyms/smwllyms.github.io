import * as React from "react";

interface UseObserverEffectProps {
  elementId: string;
  callback: (element?: HTMLElement) =>  void | (() => void);
  dependencyArray: React.DependencyList;
}
export const useObserverEffect = ({
  elementId,
  callback,
  dependencyArray
}: UseObserverEffectProps): void => {

  const [key, setKey] = React.useState(0);
  const [element, setElement] = React.useState<HTMLElement>();

  // Find element
  React.useEffect(() => {
    const foundElement = document.getElementById(elementId);
    setElement(foundElement || undefined);

    const observer = new MutationObserver(() => {
      const newFoundElement = document.getElementById(elementId) || undefined;
      setElement((prev) => (prev === newFoundElement ? prev : newFoundElement));
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();

  }, [elementId]);

  // Watch attribute mutations
  React.useEffect(() => {
    if (!element) return;

    const mutationObserver = new MutationObserver(() => {
      setKey(prev => prev + 1);
    });

    mutationObserver.observe(element, {
      attributes: true,
      attributeFilter: undefined
    });

    const resizeObserver = new ResizeObserver(() => setKey(prev => prev + 1));
    resizeObserver.observe(element);

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [element]);

  // Run user effect
  React.useEffect(() => {
    const cleanupFunction = callback(element);
    return () => {
      if (typeof cleanupFunction === "function") {
        cleanupFunction();
      }
    };
  }, [element, key, ...dependencyArray]);
}