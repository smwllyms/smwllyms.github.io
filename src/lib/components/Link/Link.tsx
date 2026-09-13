import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";

export interface LinkProps extends BaseElementProps {
  href: string;
  children: React.JSX.Element | Array<React.JSX.Element>;
}

export const Link = ({
  href,
  children,
  id,
  ariaLabel,
  testId,
  classNames
}: LinkProps): React.JSX.Element => {
  return (
    <BaseElement
      id={id}
      ariaLabel={ariaLabel}
      testId={testId}
      classNames={classNames}
    >
      <a href={href} target="_blank" rel="noreferrer">{children}</a>
    </BaseElement>
  );
};

export default Link;
