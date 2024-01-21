import { FC } from "react";

import { Comment } from "./Comment";
import { SlideCommentsProps } from "./types";

import classes from "./SlideComments.module.scss";
import { useTimeSince } from "../../hooks";

export const SlideComments: FC<SlideCommentsProps> = ({
  authorLogo,
  authorTitle,
  authorPostedDate,
  comments,
  isLoading,
  title,
}) => {
  const postedDate = useTimeSince(new Date(authorPostedDate));

  return (
    <div className={classes.SlideComments}>
      <div className={classes.SlideComments__AuthorRegion}>
        <div className={classes.SlideComments__Author}>
          <div className={classes.SlideComments__AuthorLogo}>
            <img src={authorLogo} alt="Author Logo" />
          </div>
          <div className={classes.SlideComments__AuthorDetail}>
            <span className={classes.SlideComments__AuthorTitle}>
              {authorTitle}
            </span>
            <div className={classes.SlideComments__AuthorPostedDate}>
              {postedDate}
            </div>
          </div>
        </div>
        <div className={classes.SlideComments__Title}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={classes.SlideComments__EngagementRegion}>
        {isLoading && <p>Loading...</p>}
        {comments?.map((item, i) => (
          <Comment key={i} data={item} />
        ))}
      </div>
    </div>
  );
};
