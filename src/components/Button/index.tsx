import { ButtonProps } from "../../types/props";

import style from "./button.module.css";

function Button(props: ButtonProps) {
  const className = `${style.btn} ${
    props.variant === "danger"
      ? style["btn-danger"]
      : props.variant === "success"
      ? style["btn-success"]
      : ""
  }`;

  return (
    <button className={className} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
