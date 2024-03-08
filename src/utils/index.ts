import { ToDoData } from "../types";

const API_ROOT = "https://jsonplaceholder.typicode.com/todos";

export async function getTasks() {
  const result = await fetch(API_ROOT);
  const tasksJSON: ToDoData[] = await result.json();

  return tasksJSON;
}

export async function postTask(task: ToDoData) {
  await fetch(API_ROOT, {
    method: "POST",
    body: JSON.stringify(task),
  });

  return task;
}
