import { FC } from "react";

import { SlideViewerProps } from "./types";

import classes from "./SlidePresentation.module.scss";

export const SlideViewer: FC<SlideViewerProps> = ({ feed }) => {
  return (
    <img
      src={feed.bannerImage}
      className={classes.SlidePresentation__Image}
      alt={feed.bannerText}
    />
  );
};
