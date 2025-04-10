import clsx from "clsx";
import "./slot.scss";

export default function Slot(props) {
  const { slotIdentifier = "children", className, ...rest } = props;

  const Element = props.as || "div";

  return (
    <Element {...rest} className={clsx("slot_4_28", className)}>
      <div className="frame58_4_29">
        {slotIdentifier && (
          <div className="children_4_30">{slotIdentifier}</div>
        )}
      </div>
    </Element>
  );
}
