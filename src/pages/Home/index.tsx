import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import List from "../../components/Task/List";
import Button from "../../components/Button";

import { getTasks } from "../../utils/index";
import { ToDoData } from "../../types";

import style from "./home.module.css";
import { FormSubmitHandler } from "../../types/props";
import { getRoute } from "../../routes";
import { getState, saveState } from "../../utils/LocalStorage";
import Box from "../../components/Box";

export function getTaskFromList(id: number, taskList: ToDoData[]) {
  // GET THE TASK FROM LIST
  for (let t of taskList) {
    if (t.id === id) return t;
  }

  return {
    userId: 1,
    id: 0,
    title: "",
    completed: false,
  };
}

function Home() {
  const TOTAL_TASKS_TO_PULL = 7; // TOTAL NUMBER OF TASKS TO PULL FROM API

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState<ToDoData[]>([]);

  const setState = (state: ToDoData[]) => {
    setToDoList(state);
    saveState(state);
  };

  const fetchData = async () => {
    // FETCH FROM API
    try {
      const data = await getTasks();
      const allTasks = data.slice(0, TOTAL_TASKS_TO_PULL);
      setState(allTasks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const state = getState();

    if (state.length === 0) {
      fetchData();
    } else {
      setState(state);
    }
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
      setState([...toDoList, newTodo]);
      setInputValue("");
    }
  };

  // delete functionality
  const deleteItem = (id: number) => {
    if (window.confirm("Are you sure you want to delete this task?"))
      setState(toDoList.filter((item) => item.id !== id));
  };

  const setComplete = (id: number, complete: boolean) => {
    // SET TASK COMPLETE DATA
    const index = toDoList.indexOf(getTaskFromList(id, toDoList));

    toDoList[index].completed = complete;
    setState(toDoList);
  };

  const handleNavigation = (id: number) => {
    let url = getRoute("edit").replace(":id", id.toString());
    navigate(url);
  };

  return (
    <div className={style.page}>
      <form className={style.container} onSubmit={handleAddTask}>
        <div>
          <Input
            className={style.input}
            placeholder="I want to..."
            value={inputValue}
            onChange={setInputValue}
          />
        </div>
        <div className={style.button}>
          <Button className={style["add-btn"]} variant="success">
            Add
          </Button>
        </div>
      </form>

      <List
        toDoList={toDoList}
        setComplete={(id: number, complete: boolean) =>
          setComplete(id, complete)
        }
        edit={(id: number) => handleNavigation(id)}
        delete={deleteItem}
      />

      <Box center={true}>
        <Button
          variant="danger"
          onClick={() => {
            if (window.confirm("Reset data? All changes will be lost!"))
              fetchData();
          }}
        >
          Reset
        </Button>
      </Box>
    </div>
  );
}

export default Home;
