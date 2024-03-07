import { ReactNode } from "react";

interface BaseProps {
  className?: string;
  onClick?: () => void;
}

export type BoxProps = BaseProps & {
  children: ReactNode;
  center?: boolean;
  padding?: string;
  border?: boolean;
  width?: number;
  height?: number;
  style?: object;
};
