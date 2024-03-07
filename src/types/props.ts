import { ReactNode } from "react";

interface BaseProps {
  className: string;
  onClick: () => void;
}

export type BoxProps = BaseProps & {
  center: string;
  children: ReactNode;
  border?: boolean;
  width?: number;
  height?: number;
  style?: object;
};
