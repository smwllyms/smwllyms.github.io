import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";
import { useTextStyles } from "./Text.css";

export interface TextProps extends BaseElementProps {
  text: string;
}

export const Text = ({
  text,
  id,
  ariaLabel,
  testId,
  classNames,
  style
}: TextProps): React.JSX.Element => {

  const textStyles = useTextStyles();
  return (
    <BaseElement
      id={id}
      ariaLabel={ariaLabel}
      testId={testId}
      classNames={classNames}
      style={{ ...textStyles, ...style }}
    >
      <span>{text}</span>
    </BaseElement>
  );
};

export default Text;
