import { useEffect, useState } from "react";
import { ItemProps } from "../../../types/props";

import style from "./item.module.css";

function Item(props: ItemProps) {
  const [toDo, setToDo] = useState(props.todo);

  useEffect(() => setToDo(props.todo), [props.todo]);

  return <div className={style.item}>{toDo.title}</div>;
}

export default Item;
