import * as React from "react";

export const BaseElementBaseStyles: React.CSSProperties = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: 16,
  color: "inherit",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
}

export const useBaseElementStyles = (): React.CSSProperties => ({
  ...BaseElementBaseStyles
});