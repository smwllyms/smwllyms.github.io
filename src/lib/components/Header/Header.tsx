import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";
import {
  useHeaderStyles,
  useNavListStyles,
  useNavItemStyles
} from "./Header.css";
import { SupportedEvents } from "../../hooks/useEventHandlers";
import { MenuItem } from "../MenuItem/MenuItem";

export interface NavigationItem {
  id: string;
  label: string;
  iconUrl?: string;
}
interface HeaderProps extends BaseElementProps {
  logoElement: React.JSX.Element;
  navigationItems?: Array<NavigationItem>;
  onNavigate?: (sectionId: string) => void;
  style?: React.CSSProperties;
  currentSectionIdInView?: string;
}

export const Header = ({
  id,
  classNames,
  ariaLabel,
  testId,
  logoElement,
  navigationItems = [],
  onNavigate,
  style,
  currentSectionIdInView
}: HeaderProps): React.JSX.Element => {

  const headerStyles = useHeaderStyles({ height: style?.height });
  const navListStyles = useNavListStyles();
  const navItemStyles = useNavItemStyles();

  return (
    <>
      <BaseElement
        id={id}
        classNames={classNames}
        ariaLabel={ariaLabel}
        testId={testId}
        style={{ ...headerStyles, ...style }}
      >
        <BaseElement
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12
          }}
        >
          {logoElement}
        </BaseElement>
        <BaseElement
          style={navListStyles}
        >
          {navigationItems?.map((navItem) => (
            <MenuItem
              key={navItem.id}
              id={navItem.id}
              label={navItem.label}
              active={currentSectionIdInView === navItem.id}
              eventConfiguration={{
                listenTo: [SupportedEvents.POINTER_CLICK],
                handler: () => onNavigate && onNavigate(navItem.id)
              }}
              style={navItemStyles}
            />
          ))}
        </BaseElement>
      </BaseElement>
    </>
  )
}
