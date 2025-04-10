import clsx from "clsx";
import "./menu-item-link.scss";

export default function MenuItemLink(props) {
  const {
    title = "Introduction",
    description = "Re-usable components built using Radix UI and Tailwind CSS.",
    hover,
    className,
    ...rest
  } = props;

  const Element = props.as || "div";

  return (
    <Element
      {...rest}
      className={clsx("menuItemLink_28_35", `hover-${hover}`, className)}
    >
      {title && <div className="introduction_28_33">{title}</div>}
      {description && (
        <div className="reUsableComponents_28_34">{description}</div>
      )}
    </Element>
  );
}
