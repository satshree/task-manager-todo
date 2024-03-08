import { useState, useEffect } from "react";
import List from "../../components/Task/List";
import Button from "../../components/Button";
import { getTasks } from "../../utils/index";
import { ToDoData } from "../../types";

import style from "./home.module.css";
import Input from "../../components/Input";
import { FormSubmitHandler } from "../../types/props";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState<ToDoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        const firstTenTasks = data.slice(0, 7);
        setToDoList(firstTenTasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // add functionality
  const handleAddTask: FormSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      // random id between 1-100
      const userId = Math.floor(Math.random() * 100) + 1;
      // id based on the lenght of the todoList array + 1
      const id = toDoList.length + 1;
      // newTodo list
      const newTodo: ToDoData = {
        userId: userId,
        id: id,
        title: inputValue.trim(),
        completed: false, // task set always false in initial
      };
      setToDoList([...toDoList, newTodo]);
      setInputValue("");
    }
  };

  // delete functionality
  const deleteItem = (id: number) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  return (
    <div className={style.page}>
      <form className={style.container} onSubmit={handleAddTask}>
        <div>
          <Input
            className={style.input}
            placeholder="Add Task"
            value={inputValue}
            onChange={setInputValue}
          />
        </div>
        <div className={style.button}>
          <Button variant="success">Add</Button>
        </div>
      </form>

      <List
        toDoList={toDoList}
        edit={(id: number) => alert(`EDIT TODO ID ${id}`)}
        delete={deleteItem}
      />
    </div>
  );
}

export default Home;
