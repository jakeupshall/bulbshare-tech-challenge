import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

import { SectionProps } from "./types";

import classes from "./Grid.module.scss";

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  size,
  style,
}) => {
  return (
    <div
      className={classNames(classes.Section, classes[`Section--col-${size}`])}
      style={style}
    >
      {children}
    </div>
  );
};
