import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";
import { useSectionStyles, useSectionTitleStyles, useSectionTextStyles } from "./Section.css";

export interface SectionProps extends BaseElementProps {
  title?: string;
}

export const Section = ({
  id,
  title,
  children,
  style,
  ariaLabel,
  testId,
  classNames
}: SectionProps): React.JSX.Element => {
  const sectionStyles = useSectionStyles();
  const titleStyles = useSectionTitleStyles();
  const textStyles = useSectionTextStyles();
  return (
    <BaseElement
      id={id}
      ariaLabel={ariaLabel}
      testId={testId}
      classNames={classNames}
      style={{ ...sectionStyles, ...style }}
    >
      <BaseElement>
        {title ? (
          <BaseElement style={titleStyles}>
            <h2>{title}</h2>
          </BaseElement>
        ) : (
          <></>
        )}
        <BaseElement style={textStyles}>
          {children}
        </BaseElement>
      </BaseElement>
    </BaseElement>
  );
};

export default Section;
