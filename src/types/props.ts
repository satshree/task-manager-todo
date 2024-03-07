import { ReactNode } from "react";

interface BaseProps {
  className?: string;
  onClick?: () => void;
}

export type BoxProps = BaseProps & {
  center: boolean;
  children: ReactNode;
  padding?: string;
  border?: boolean;
  width?: number;
  height?: number;
  style?: object;
};
