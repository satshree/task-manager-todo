import { TitleProps } from "../../types/props";

import style from "./title.module.css";

function Title(props: TitleProps) {
  const titleStyle = {
    fontWeight: props.bold ? "700" : "400",
    ...(props.style || {}),
  };

  return (
    <div className={style.title} style={titleStyle}>
      {props.children}
    </div>
  );
}

export default Title;
