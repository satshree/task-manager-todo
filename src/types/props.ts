import { ReactNode } from "react";
import { To } from "react-router-dom";

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
