import * as React from "react";
import { useBaseElementStyles } from "./BaseElementStyles.css";
import { EventConfiguration, useEventHandlers } from "../../hooks/useEventHandlers";

export interface BaseElementProps {
  children?: React.JSX.Element | Array<React.JSX.Element>;
  ariaLabel?: string;
  style?: React.CSSProperties;
  id?: string;
  testId?: string;
  classNames?: Array<string>;
  eventConfigurations?: Array<EventConfiguration>;
}
export const BaseElement = ({
  children,
  ariaLabel,
  style,
  id,
  testId,
  eventConfigurations,
  classNames
}: BaseElementProps): React.JSX.Element => {

  const ref = React.useRef<HTMLDivElement>(null);

  const className = React.useMemo(() =>
    classNames ? classNames.join(" ") : "", [JSON.stringify(classNames)]);

  const baseStyles = useBaseElementStyles();

  useEventHandlers({ ref, eventConfigurations });

  return (
    <div
      id={id}
      ref={ref}
      style={{ ...baseStyles, ...style }}
      aria-label={ariaLabel}
      data-test-id={testId}
      className={className}
      children={children}
    />
  );
}