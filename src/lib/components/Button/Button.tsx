import * as React from "react";
import { BaseElementProps } from "../Base/BaseElement";
import { ButtonBaseStyles } from "./Button.css";

interface ButtonProps extends BaseElementProps {
  onClick?: () => void;
  disabled?: boolean;
  label: string;
}
export const Button = ({
  onClick,
  disabled,
  id,
  ariaLabel,
  testId,
  classNames,
  style,
  label
}: ButtonProps): React.JSX.Element => {

  const className = React.useMemo(() =>
    classNames ? classNames.join(" ") : "", [JSON.stringify(classNames)]);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      id={id}
      aria-label={ariaLabel}
      data-testid={testId}
      className={className}
      style={{...ButtonBaseStyles, ...style}}
    >
      <span>{label}</span>
    </button>
  )
}