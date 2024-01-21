import { FC } from "react";

import { useTimeSince } from "../../../hooks";

import { CommentProps } from "./types";

import classes from "../SlideComments.module.scss";

export const Comment: FC<CommentProps> = ({ data }) => {
  const submittedOn = useTimeSince(new Date(data.submittedOn));

  return (
    <div className={classes.SlideComments__Response}>
      <div className={classes.SlideComments__ResponseLogo}>
        <img src={data.user.avatar} alt="User Logo" />
      </div>
      <div className={classes.SlideComments__ResponseDetail}>
        <div>
          <span className={classes.SlideComments__ResponseAuthor}>
            {data.user.name}
          </span>
          <span className={classes.SlideComments__ResponseComment}>
            {data.comment}
          </span>
        </div>
        <div className={classes.SlideComments__ResponseSubmittedOn}>
          {submittedOn}
        </div>
      </div>
    </div>
  );
};
