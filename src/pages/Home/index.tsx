import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Input from "../../components/Input";
import List from "../../components/Task/List";
import Button from "../../components/Button";

import { getTasks } from "../../utils/index";
import { ToDoData } from "../../types";

import style from "./home.module.css";
import { FormSubmitHandler } from "../../types/props";
import { getRoute } from "../../routes";

function getTaskFromList(id: number, taskList: ToDoData[]) {
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
  const { state } = useLocation();

  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState<ToDoData[]>([]);

  const fetchData = async () => {
    // FETCH FROM API
    try {
      const data = await getTasks();
      const allTasks = data.slice(0, TOTAL_TASKS_TO_PULL);
      setToDoList(allTasks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (
      state && // IF STATE IS NOT NULL
      state.newTask && // IF STATE HAS newTask
      state.allTasks // IF STATE HAS allTasks
    ) {
      // RESTORE PREVIOUS STATE
      let newTaskList = state.allTasks;

      // UPDATE TASK DATA NAVIGATING FROM EDIT FORM
      const newTask: ToDoData = { ...state.newTask };
      const taskIndex = state.allTasks.indexOf(
        getTaskFromList(newTask.id, state.allTasks)
      );

      newTaskList[taskIndex].title = newTask.title;
      setToDoList(newTaskList);
    } else {
      // FETCH DATA FROM API
      fetchData();
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
      setToDoList([...toDoList, newTodo]);
      setInputValue("");
    }
  };

  // delete functionality
  const deleteItem = (id: number) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const handleNavigation = (id: number) => {
    let url = getRoute("edit").replace(":id", id.toString());
    let state = { title: "", allTasks: toDoList }; // PASS ALL TASKS TO MAINTAIN STATE

    if (id > TOTAL_TASKS_TO_PULL) {
      // PASS TITLE THROUGH STATE SINCE ANY TASKS ABOVE 'TOTAL_TASKS_TO_PULL' IS NOT FETCHED OR UPDATED FROM API
      state.title = getTaskFromList(id, toDoList).title;
    }

    navigate(url, { state });
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
          <Button className={style["add-btn"]} variant="success">
            Add
          </Button>
        </div>
      </form>

      <List
        toDoList={toDoList}
        edit={(id: number) => handleNavigation(id)}
        delete={deleteItem}
      />
    </div>
  );
}

export default Home;
