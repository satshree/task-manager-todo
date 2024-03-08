import { useEffect, useState } from "react";
import { ItemProps } from "../../../types/props";

import style from "./item.module.css";
import Button from "../../Button";

function Item(props: ItemProps) {
  const [toDo, setToDo] = useState(props.todo);

  return (
    <div className={style.item}>
      <div className={style["check-wrapper"]}>
        <input
          className={style.check}
          type="checkbox"
          checked={toDo.completed}
          onChange={() => {
            setToDo({ ...toDo, completed: !toDo.completed });
            props.setComplete(toDo.id, !toDo.completed);
          }}
        />
        <span
          style={{ textDecoration: toDo.completed ? "line-through" : "none" }}
        >
          {toDo.title}
        </span>
      </div>
      <div>
        <Button onClick={() => props.edit(toDo.id)}>Edit</Button>
        <Button variant="danger" onClick={() => props.delete(toDo.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Item;
