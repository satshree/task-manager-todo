import { PropsWithChildren } from "react";

import style from "./label.module.css";

function Label(props: PropsWithChildren) {
  return <div className={style.label}>{props.children}</div>;
}

export default Label;
