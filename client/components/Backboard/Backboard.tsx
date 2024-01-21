import { FC, PropsWithChildren } from "react";

import classes from "./Backboard.module.scss";

export const Backboard: FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.Backboard}>{children}</div>;
};

export default Backboard;
