import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";
import { useEmbedStyles } from "./Embed.css";

export interface EmbedProps extends BaseElementProps {
  src: string;
  width?: string | number;
  height?: string | number;
  allow?: string;
}

export const Embed = ({
  src,
  width = "100%",
  height = 352,
  allow,
  id,
  ariaLabel,
  testId,
  classNames
}: EmbedProps): React.JSX.Element => {
  const styles = useEmbedStyles();

  return (
    <BaseElement
      id={id}
      ariaLabel={ariaLabel}
      testId={testId}
      classNames={classNames}
      style={styles.container}
    >
      <iframe
        src={src}
        style={styles.iframe}
        width={width}
        height={height}
        allow={allow}
        loading="lazy"
      />
    </BaseElement>
  );
};

export default Embed;
