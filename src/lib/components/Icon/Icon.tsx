import * as React from "react";
import { BaseElementProps } from "../Base/BaseElement";
import { useIconStyles } from "./Icon.css";
import { Image } from "../Image/Image";
import { SupportedEvents } from "../../hooks/useEventHandlers";

interface IconProps extends BaseElementProps {
  iconUrl: string;
  onClick?: () => void;
  alt?: string;
}
export const Icon = ({
  id,
  ariaLabel,
  alt,
  testId,
  classNames,
  style,
  iconUrl,
  onClick
}: IconProps): React.JSX.Element => {

  const iconStyles = useIconStyles({ usePointer: !!onClick });

  return (
    <Image
      id={id}
      alt={alt || "icon"}
      ariaLabel={ariaLabel}
      testId={testId} 
      classNames={classNames}
      imgStyle={{ ...iconStyles, ...style }}
      src={iconUrl}
      eventConfiguration={{
        listenTo: [SupportedEvents.POINTER_CLICK],
        handler: () => onClick?.()
      }}
    />
  )
}