import * as React from "react";

export const FooterBaseStyles: React.CSSProperties = {
  textAlign: "center",
  color: "inherit",
  padding: 30,
  background: "transparent"
}

export const useFooterStyles = (): React.CSSProperties => ({ ...FooterBaseStyles });
