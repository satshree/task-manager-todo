import { ToDoData } from "../types";

const API_ROOT = "https://jsonplaceholder.typicode.com/todos";

export async function getTask(id: number) {
  const result = await fetch(API_ROOT + `/${id}/`);

  if (result.status !== 200) {
    throw new Error(result.statusText);
  }

  const taskJSON: ToDoData = await result.json();
  return taskJSON;
}

export async function getTasks() {
  const result = await fetch(API_ROOT);

  if (result.status !== 200) {
    throw new Error(result.statusText);
  }

  const tasksJSON: ToDoData[] = await result.json();
  return tasksJSON;
}

export async function postTask(task: ToDoData) {
  const result = await fetch(API_ROOT, {
    method: "POST",
    body: JSON.stringify(task),
  });

  if (result.status !== 200) {
    throw new Error(result.statusText);
  }

  return task;
}
