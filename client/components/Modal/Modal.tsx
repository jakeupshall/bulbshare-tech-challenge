// import classNames from "classnames";

import { FC, PropsWithChildren } from "react";

import { useKeyPress } from "../../hooks/useKeyPress";

import { ModalProps } from "./types";

import classes from "./Modal.module.scss";

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  disableBackdropClick = false,
  onCancel,
}) => {
  useKeyPress("Escape", onCancel);

  return (
    <div className={classes.Modal}>
      <button
        type="button"
        onClick={!disableBackdropClick ? onCancel : undefined}
        className={classes.Close}
        aria-label="Close modal"
      >
        <svg aria-hidden="true">
          <use href="/close-dialog.svg#icon" />
        </svg>
      </button>
      {children}
    </div>
  );
};
