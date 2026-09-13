import * as React from "react";

export const IconBaseStyles: React.CSSProperties = {
  width: "32px",
  height: "32px",
  objectFit: "contain",
  borderRadius: "12px",
  backgroundColor: "black",
  padding: "12px"
}
  interface UseIconStylesProps {
    usePointer?: boolean;
}
export const useIconStyles = ({ usePointer }: UseIconStylesProps): React.CSSProperties => {
  return { ...IconBaseStyles, cursor: usePointer ? "pointer" : "default" };
}