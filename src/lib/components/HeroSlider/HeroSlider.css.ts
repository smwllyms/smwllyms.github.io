import * as React from "react";

export const HeroSliderBaseStyles: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  minHeight: 360,
};

export const SlideBaseStyles: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: 0,
  top: 0,
  transition: "opacity 300ms ease, transform 300ms ease",
};

export const ImageBaseStyles: React.CSSProperties = {
  width: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
  transition: "opacity 300ms ease, transform 300ms ease",
};

export const SlideImageWrapperBaseStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

export const OverlayBaseStyles: React.CSSProperties = {
  position: "absolute",
  color: "#fff",
  background: "rgba(0,0,0,0.48)",
  borderRadius: 8,
  padding: "16px",
  maxWidth: "70%",
  boxSizing: "border-box",
  transition: "opacity 300ms ease, transform 300ms ease",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0px 0px 2px rgb(6, 6, 7)"
};

export const ArrowBaseStyles: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.4)",
  color: "#fff",
  border: "none",
  padding: "10px 14px",
  cursor: "pointer",
  borderRadius: 100,
  userSelect: "none",
  zIndex: 3
};

export const LeftArrowBaseStyles: React.CSSProperties = {
  left: 12,
  ...ArrowBaseStyles,
};

export const RightArrowBaseStyles: React.CSSProperties = {
  right: 12,
  ...ArrowBaseStyles,
};

export const DotsBaseStyles: React.CSSProperties = {
  position: "absolute",
  bottom: 12,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: 8,
  alignItems: "center",
  padding: "6px 10px",
  background: "rgba(0,0,0,0.35)",
  borderRadius: 999,
  zIndex: 3,
};

export const DotBaseStyles: React.CSSProperties = {
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.6)",
  cursor: "pointer",
  transition: "transform 200ms ease, width 200ms ease, height 200ms ease, background 200ms ease",
};

export const ActiveDotBaseStyles: React.CSSProperties = {
  background: "#fff",
  transform: "scale(1.4)"
};

export const ButtonBaseStyles: React.CSSProperties = {
  borderRadius: 4,
  margin: "16px"
};

export const useHeroSliderStyles = (): React.CSSProperties => ({ ...HeroSliderBaseStyles });
export const useSlideStyles = (active?: boolean): React.CSSProperties => ({
  ...SlideBaseStyles,
  opacity: active ? 1 : 0,
  zIndex: active ? 2 : 1,
  pointerEvents: active ? "auto" : "none",
});

export const useImageStyles = (): React.CSSProperties => ({ ...ImageBaseStyles });
export const useImageWrapperStyles = (): React.CSSProperties => ({ ...SlideImageWrapperBaseStyles });

export const useOverlayStyles = (active?: boolean): React.CSSProperties => ({
  ...OverlayBaseStyles,
  opacity: active ? 1 : 0,
});

export const useDotStyles = (active?: boolean): React.CSSProperties => ({
  ...DotBaseStyles,
  ...(active ? ActiveDotBaseStyles : {}),
});

export const TitleBaseStyles: React.CSSProperties = {
  fontWeight: "700",
  fontSize: 22,
  margin: 0,
  color: "#fff",
  lineHeight: 1.1
};

export const DescriptionBaseStyles: React.CSSProperties = {
  color: "#f2f2f2",
  lineHeight: 1.4,
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
};

export default HeroSliderBaseStyles;
