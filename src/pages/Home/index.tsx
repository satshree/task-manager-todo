import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import style from "./home.module.css";
import Input from "../../components/Input";
import List from "../../components/Task/List";
import Button from "../../components/Button";
import getTasks from "../../utils/index";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        const firstTenTasks = data.slice(0, 10); // Get the first 10 tasks
        setToDoList(firstTenTasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddTask = () => {};

  return (
    <div className={style.page}>
      <Title>Todo App</Title>
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

      <List toDoList={toDoList} />
    </div>
  );
}

export default Home;
