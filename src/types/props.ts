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

export type BoxProps = BaseProps &
  PropsWithChildren & {
    center?: boolean;
    padding?: string;
    border?: boolean;
    width?: number;
    height?: number;
  };

export type TitleProps = BaseProps &
  PropsWithChildren & {
    bold?: boolean;
  };

export type ButtonProps = BaseProps &
  PropsWithChildren & {
    variant?: string;
  };
