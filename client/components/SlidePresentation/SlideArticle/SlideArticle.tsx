import { FC } from "react";

import { useGetNthDateSuffix } from "../../../hooks";

import { SlideArticleProps } from "./types";

import classes from "./SlideArticle.module.scss";

export const SlideArticle: FC<SlideArticleProps> = ({ feed }) => {
  const startsOn = new Date(feed.startsOn);
  const date = startsOn.getDate();
  const month = startsOn.toLocaleString("default", { month: "long" });
  const year = startsOn.toLocaleString("default", { year: "numeric" });

  const dateSuffix = useGetNthDateSuffix(date);

  return (
    <div className={classes.SlideArticle}>
      <div className={classes.SlideArticle__AuthorLogo}>
        <img src={feed.brand.logo} alt="Author Logo" />
      </div>
      <div className={classes.SlideArticle__Title}>
        <h1>{feed.feedTitle}</h1>
      </div>
      <div className={classes.SlideArticle__AuthorPostedDate}>
        {`${date + dateSuffix} ${month} ${year}`}
      </div>
      <div className={classes.SlideArticle__Description}>
        <p>{feed.description}</p>
      </div>
      <div className={classes.SlideArticle__Image}>
        <img src={feed.adImage1} alt="" />
      </div>
      <div className={classes.SlideArticle__Image}>
        <img src={feed.adImage2} alt="" />
      </div>
    </div>
  );
};
