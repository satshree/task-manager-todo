import { useState, useEffect } from "react";
import style from "./home.module.css";
import Input from "../../components/Input";
import List from "../../components/Task/List";
import Button from "../../components/Button";
import getTasks from "../../utils/index";
import { ToDoData } from "../../types";
import Title from "../../components/Title";
import Label from "../../components/Label";

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

  const handleAddTask = () => {
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

  // const today = new Date();
  // const options: Intl.DateTimeFormatOptions = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <div className={style.page}>
      <div className={style.header}>
        <Title bold={true}>My Day</Title>
        <Label>Date will be here</Label>
      </div>
      <div className={style.container}>
        <div>
          <Input
            className={style.input}
            placeholder="Add Task"
            value={inputValue}
            onChange={setInputValue}
          />
        </div>
        <div className={style.button}>
          <Button variant="success" onClick={handleAddTask}>
            Add
          </Button>
        </div>
      </div>

      <List
        toDoList={toDoList}
        edit={(id: number) => alert(`EDIT TODO ID ${id}`)}
        delete={(id: number) => alert(`DELETE TODO ID ${id}`)}
      />
    </div>
  );
}

export default Home;
