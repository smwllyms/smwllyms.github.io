import * as React from "react";

export const TextBaseStyles: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.5,
  padding: "20px 0"
};

export const useTextStyles = (): React.CSSProperties => {
  return { ...TextBaseStyles };
}