import { getRoute } from "../../routes";
import Title from "../../components/Title";
import { Link } from "react-router-dom";

import style from "./home.module.css";
import Input from "../../components/Input";
import List from "../../components/Task/List";
import { useState } from "react";
import Button from "../../components/Button";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const toDoSample = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ];

  return (
    <div className={style.page}>
      <Title>Todo App</Title>
      <div className={style.container}>
        <Input
          className={style.input}
          placeholder="Add Task"
          value={inputValue}
          onChange={setInputValue}
        />
        <Button className={style.button} variant="success">
          Success
        </Button>
      </div>

      <List toDoList={toDoSample} />
    </div>
  );
}

export default Home;
