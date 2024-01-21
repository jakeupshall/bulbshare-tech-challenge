import { FC, PropsWithChildren } from "react";

import { GridProps } from "./types";

import classes from "./Grid.module.scss";

export const Grid: FC<PropsWithChildren<GridProps>> = ({ children, style }) => {
  return (
    <div className={classes.Grid} style={style}>
      {children}
    </div>
  );
};
