"use client";

import React from "react";

import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import "./navigation-menu-item.scss";

export default function NavigationMenuItem(props) {
  const { content, children, className, ...rest } = props;

  const Element = props.as || RadixNavigationMenu.Item;

  return (
    <Element {...rest}>
      <RadixNavigationMenu.Trigger asChild={true}>
        {React.Children.only(children)}
      </RadixNavigationMenu.Trigger>

      <RadixNavigationMenu.Content className="content_4_19">
        {content}
      </RadixNavigationMenu.Content>
    </Element>
  );
}
