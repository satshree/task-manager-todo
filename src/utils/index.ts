import { ToDoData } from "../types";

const API_ROOT = "https://jsonplaceholder.typicode.com/todos";

export default async function getTasks() {
  const result = await fetch(API_ROOT);
  const tasksJSON: ToDoData[] = await result.json();

  return tasksJSON;
}
