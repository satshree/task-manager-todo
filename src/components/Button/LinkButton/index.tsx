import { LinkButtonProps } from "../../../types/props";
import { Link } from "react-router-dom";

import style from "../button.module.css";

function LinkButton(props: LinkButtonProps) {
  const className = `${style.btn} ${style["link-btn"]} ${
    props.variant === "danger"
      ? style["btn-danger"]
      : props.variant === "success"
      ? style["btn-success"]
      : ""
  }`;

  return (
    <Link
      to={props.to}
      className={className}
      target={props.target}
      style={props.style}
    >
      {props.children}
    </Link>
  );
}

export default LinkButton;
