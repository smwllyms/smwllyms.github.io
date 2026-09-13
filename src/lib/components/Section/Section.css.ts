import * as React from "react";

export const SectionBaseStyles: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "40px",
  minHeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

export const useSectionStyles = (): React.CSSProperties => ({ ...SectionBaseStyles });

export default useSectionStyles;

export const useSectionTitleStyles = (): React.CSSProperties => ({
  fontFamily: "Raleway, Arial",
  fontWeight: "bolder",
  letterSpacing: "3px",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: 36,
});

export const useSectionTextStyles = (): React.CSSProperties => ({
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: 20,
  color: "inherit"
});