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

  return <button className={className}>{props.children}</button>;
}

export default Button;
