import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";
import { useFooterStyles } from "./Footer.css";

export const Footer = ({ id,
  ariaLabel,
  testId,
  classNames,
  children,
  style
}: BaseElementProps): React.JSX.Element => {
  const styles = useFooterStyles();
  return (
    <BaseElement
      id={id}
      ariaLabel={ariaLabel}
      testId={testId}
      classNames={classNames}
      style={{ ...styles, ...style }}
    >
      <span>{children}</span>
    </BaseElement>
  )
}
