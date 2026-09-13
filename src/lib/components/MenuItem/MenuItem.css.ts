import * as React from "react";

export const MenuItemBaseStyles: React.CSSProperties = {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  gap: 8
}

const MenuItemHoverStyles: React.CSSProperties = {
  backgroundColor: "rgba(0,0,0,0.06)"
};

export const useMenuItemStyles = (): React.CSSProperties => ({
  ...MenuItemBaseStyles
});

export const useMenuItemHoverStyles = (): React.CSSProperties => ({ ...MenuItemHoverStyles });

export const useMenuItemUnderlineStyles = (): React.CSSProperties => ({
  display: "block",
  height: 4,
  width: "100%",
  backgroundColor: "transparent",
  transition: "background-color 200ms ease"
});