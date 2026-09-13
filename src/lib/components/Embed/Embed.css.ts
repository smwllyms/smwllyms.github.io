import * as React from "react";

export const EmbedContainerStyles: React.CSSProperties = {
  width: "100%",
  maxWidth: 900,
  boxSizing: "border-box"
}

export const EmbedIframeStyles: React.CSSProperties = {
  borderRadius: 12,
  width: "100%",
  border: "none"
}

export const useEmbedStyles = () => ({ 
  container: EmbedContainerStyles, 
  iframe: EmbedIframeStyles 
});
