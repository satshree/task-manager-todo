import { ReactNode } from "react";

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
