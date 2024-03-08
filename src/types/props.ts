import { ReactNode } from "react";
import { To } from "react-router-dom";
import { ToDoData } from ".";

interface BaseProps {
  className?: string;
  onClick?: () => void;
  style?: object;
}

interface PropsWithChildren {
  children: ReactNode;
}

type BasicProps = BaseProps & PropsWithChildren;

export type BoxProps = BasicProps & {
  center?: boolean;
  padding?: string;
  border?: boolean;
  width?: number;
  height?: number;
};

export type TitleProps = BasicProps & {
  bold?: boolean;
};

export type ButtonProps = BasicProps & {
  type?: "submit" | "reset" | "reset" | undefined;
  variant?: string;
};

export type LinkButtonProps = BasicProps &
  ButtonProps & {
    to: To;
    target?: "_blank" | "blank" | undefined;
  };

export type InputProps = BaseProps & {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

export type ItemProps = BaseProps & {
  todo: ToDoData;
};

export type ItemListProps = BaseProps & {
  toDoList: ToDoData[];
};
