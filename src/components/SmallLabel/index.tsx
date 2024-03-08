import { PropsWithChildren } from "react";

import style from "./smalllabel.module.css";

function SmallLabel(props: PropsWithChildren) {
  return <div className={style.label}>{props.children}</div>;
}

export default SmallLabel;
