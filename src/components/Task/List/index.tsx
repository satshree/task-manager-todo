import { useEffect, useState } from "react";
import { ItemListProps } from "../../../types/props";

import Item from "../Item";

import style from "./list.module.css";
import Box from "../../Box";

function List(props: ItemListProps) {
  const [toDoList, setToDoList] = useState(props.toDoList);

  useEffect(() => {
    setToDoList(props.toDoList);
  }, [props.toDoList]);

  const deleteItem = (id: number) => {
    props.delete(id);
  };

  return (
    <div className={style.list}>
      {toDoList.length === 0 ? (
        <>
          <Box center={true}>
            <div style={{ fontSize: "22px" }}>Add New Task</div>
          </Box>
        </>
      ) : (
        toDoList.map((toDo) => (
          <Item
            key={toDo.id}
            todo={toDo}
            setComplete={props.setComplete}
            edit={props.edit}
            delete={() => deleteItem(toDo.id)}
          />
        ))
      )}
    </div>
  );
}

export default List;
