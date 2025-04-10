import React from "react";

import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import "./navigation-menu.scss";

export default function NavigationMenu(props) {
  const { children, className, ...rest } = props;

  const Element = props.as || RadixNavigationMenu.Root;

  return (
    <Element {...rest} className={clsx("navigationMenu_8_12", className)}>
      {React.Children.only(children)}

      <div className="navigationViewportPosition_8_11">
        <RadixNavigationMenu.Viewport className="navigationViewport_10_13" />
      </div>
    </Element>
  );
}
