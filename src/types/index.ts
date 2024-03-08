export interface Routes {
  to: string;
  text: string;
  element: React.ReactElement;
}

export interface ToDoData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface DateInfo {
  weekday: "long";
  year: "numeric";
  month: "long";
  day: "numeric";
}
