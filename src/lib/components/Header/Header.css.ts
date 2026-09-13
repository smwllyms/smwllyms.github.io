import * as React from "react";

export const HeaderBaseStyles: React.CSSProperties = {
  height: "80px",
  width: "100%",
  fontSize: "30px",
  lineHeight: "80px",
  letterSpacing: "1px",
  color: "inherit",
  paddingLeft: 20,
  background: "transparent",
  boxShadow: "0px 0px 2px rgb(6, 6, 7)",
  overflowX: "hidden",
  boxSizing: "border-box",
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  overflowY: "hidden",
  zIndex: 20,
  flexDirection: "row"
}

interface UseHeaderStylesProps {
  height?: string | number;
}
export const useHeaderStyles = ({ height }: UseHeaderStylesProps): React.CSSProperties => {
  return { ...HeaderBaseStyles, height };
}

export const useNavListStyles = (): React.CSSProperties => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 18,
  marginLeft: "auto",
  paddingRight: 20,
})

export const useNavItemStyles = (): React.CSSProperties => ({
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
  paddingBottom: 6,
  borderBottom: "3px solid transparent",
  transition: "border-color 200ms ease"
});