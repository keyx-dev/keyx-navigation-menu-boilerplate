import clsx from "clsx";
import "./navigation-menu-trigger.scss";

export default function NavigationMenuTrigger(props) {
  const { text = "Learn", hover, className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element
      {...rest}
      className={clsx(
        "navigationMenuTrigger_30_83",
        `hover-${hover}`,
        className,
      )}
    >
      {text && <div className="learn_30_80">{text}</div>}

      <div className="lucideChevronDown_30_81">
        <svg
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="vector_30_82"
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="black"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Element>
  );
}
