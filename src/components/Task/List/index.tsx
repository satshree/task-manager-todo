import { useEffect, useState } from "react";
import { ItemListProps } from "../../../types/props";

import Item from "../Item";

import style from "./list.module.css";

function List(props: ItemListProps) {
  const [toDoList, setToDoList] = useState(props.toDoList);

  useEffect(() => setToDoList(props.toDoList), [props.toDoList]);

  return (
    <div className={style.list}>
      {toDoList.map((toDo) => (
        <Item key={toDo.id} todo={toDo} />
      ))}
    </div>
  );
}

export default List;
