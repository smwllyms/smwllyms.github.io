import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";
import { ImageBaseStyles } from "./Image.css";

export interface ImageProps extends BaseElementProps {
  src: string;
  alt?: string;
  imgStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export const Image = ({
  src,
  alt,
  imgStyle,
  wrapperStyle,
  id,
  ariaLabel,
  testId,
  classNames,
  eventConfigurations
}: ImageProps): React.JSX.Element => {
  return (
    <BaseElement
      id={id}
      ariaLabel={ariaLabel}
      testId={testId}
      classNames={classNames}
      style={wrapperStyle}
      eventConfigurations={eventConfigurations}
    >
      <img src={src} alt={alt || "image"} style={{ ...ImageBaseStyles, ...imgStyle }} />
    </BaseElement>
  );
};

export default Image;
