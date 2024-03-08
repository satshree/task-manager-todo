import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Input from "../../components/Input";
import List from "../../components/Task/List";
import Button from "../../components/Button";

import { getTasks } from "../../utils/index";
import { ToDoData } from "../../types";

import style from "./home.module.css";
import { getRoute } from "../../routes";

function Home() {
  const TOTAL_TASKS_TO_PULL = 7; // TOTAL NUMBER OF TASKS TO PULL FROM API

  const navigate = useNavigate();
  const { state } = useLocation();

  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState<ToDoData[]>([]);

  const getTaskFromList = (id: number) => {
    // GET THE TASK FROM LIST
    for (let t of toDoList) {
      if (t.id === id) return t;
    }

    return {
      userId: 1,
      id: 0,
      title: "",
      completed: false,
    };
  };

  useEffect(() => {
    // FETCH DATA FROM API
    const fetchData = async () => {
      try {
        const data = await getTasks();
        const allTasks = data.slice(0, TOTAL_TASKS_TO_PULL);
        setToDoList(allTasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // UPDATE TASK DATA NAVIGATING FROM EDIT FORM
    if (
      state && // IF STATE IS NOT NULL
      state.newTask && // IF STATE HAS newTask
      toDoList.length > 0 // IF THE TASKS HAS ALREADY BEEN LOADED
    ) {
      const newTask: ToDoData = { ...state.newTask };
      let newTaskList = toDoList;

      newTaskList[toDoList.indexOf(getTaskFromList(newTask.id))].title =
        newTask.title;

      setToDoList(newTaskList);
    }
  }, [
    toDoList, // CHECK FOR newTask FROM EDIT PAGE ONCE THE TASKS HAS BEEN LOADED
  ]);

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

  const handleNavigation = (id: number) => {
    let url = getRoute("edit").replace(":id", id.toString());
    let state = { title: "" };

    if (id > TOTAL_TASKS_TO_PULL) {
      // PASS TITLE THROUGH STATE SINCE ANY TASKS ABOVE 'TOTAL_TASKS_TO_PULL' IS NOT FETCHED OR UPDATED FROM API
      state.title = getTaskFromList(id).title;
    }

    navigate(url, { state });
  };

  return (
    <>
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
          <Button
            className={style["add-btn"]}
            variant="success"
            onClick={handleAddTask}
          >
            Add
          </Button>
        </div>
      </div>

      <List
        toDoList={toDoList}
        edit={(id: number) => handleNavigation(id)}
        delete={(id: number) => alert(`DELETE TODO ID ${id}`)}
      />
    </>
  );
}

export default Home;
