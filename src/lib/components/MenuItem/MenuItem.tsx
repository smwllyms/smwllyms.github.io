import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";
import { EventConfiguration, SupportedEvents } from "../../hooks/useEventHandlers";
import { useMenuItemStyles, useMenuItemHoverStyles, useMenuItemUnderlineStyles } from "./MenuItem.css";

interface MenuItemProps extends BaseElementProps {
  label: string;
  active?: boolean;
}
export const MenuItem = ({
  id,
  ariaLabel,
  testId,
  classNames,
  style,
  label,
  eventConfigurations,
  active
}: MenuItemProps): React.JSX.Element => {

  const menuItemStyles = useMenuItemStyles();
  const menuItemHoverStyles = useMenuItemHoverStyles();
  const menuItemUnderlineStyles = useMenuItemUnderlineStyles();
  const [hovered, setHovered] = React.useState(false);

  const mergedEventConfigurations: Array<EventConfiguration> = [];
  if (eventConfigurations) {
    mergedEventConfigurations.push(...eventConfigurations);
  }
  mergedEventConfigurations.push({
    listenTo: [
      SupportedEvents.POINTER_ENTER,
      SupportedEvents.POINTER_LEAVE
    ],
    handler: (args) => {
      if (args.type === SupportedEvents.POINTER_ENTER) setHovered(true);
      if (args.type === SupportedEvents.POINTER_LEAVE) setHovered(false);
    }
  });

  const domId = id ? `menu-${id}` : undefined;

  return (
    <BaseElement
      eventConfigurations={mergedEventConfigurations}
      id={domId}
      style={{ ...menuItemStyles, ...(hovered ? menuItemHoverStyles : {}), ...style, position: "relative" }}
      ariaLabel={ariaLabel}
      testId={testId}
      classNames={classNames}
      data-section-id={id}
    >
      <span style={{ display: "flex", alignItems: "center", height: "100%" }}>{label}</span>
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: menuItemUnderlineStyles.height,
          backgroundColor: active ? "white" : "transparent",
          transition: "background-color 200ms ease"
        }}
      />
    </BaseElement>
  );
}