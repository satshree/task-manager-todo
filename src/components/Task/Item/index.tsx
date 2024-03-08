import { useEffect, useState } from "react";
import { ItemProps } from "../../../types/props";

import style from "./item.module.css";

function Item(props: ItemProps) {
  const [toDo, setToDo] = useState(props.todo);

  useEffect(() => setToDo(props.todo), [props.todo]);

  return (
    <div className={style.item}>
      <div className={style["check-wrapper"]}>
        <input
          className={style.check}
          type="checkbox"
          checked={toDo.completed}
          onClick={() => setToDo({ ...toDo, completed: !toDo.completed })}
        />
        <span
          style={{ textDecoration: toDo.completed ? "line-through" : "none" }}
        >
          {toDo.title}
        </span>
      </div>
      <div></div>
    </div>
  );
}

export default Item;
