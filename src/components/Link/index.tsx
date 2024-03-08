import { Link as RRLink } from "react-router-dom";
import { LinkButtonProps } from "../../types/props";

import style from "./link.module.css";

function Link(props: LinkButtonProps) {
  return (
    <RRLink
      to={props.to}
      target={props.target}
      style={props.style}
      className={`${style.link} ${props.className}`}
    >
      {props.children}
    </RRLink>
  );
}

export default Link;
