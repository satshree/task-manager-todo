import { BoxProps } from "../../types/props";

import style from "./box.module.css";

function Box(props: BoxProps) {
  const flexStyle = {
    justifyContent: props.center ? "center" : "flex-start",
    padding: props.padding || "1rem",
    border: props.border ? "0.8px solid #c9c9c9" : "none",
    borderRadius: props.border ? "8px" : "none",
    width: props.width || "auto",
    height: props.height || "auto",
    style: props.style ? { ...props.style } : null,
  };

  return (
    <div className={style.box} style={flexStyle}>
      {props.children}
    </div>
  );
}

export default Box;
