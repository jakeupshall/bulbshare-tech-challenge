import { forwardRef, LegacyRef } from "react";

import { FeedCardProps } from "./types";

import classes from "./FeedCard.module.scss";

export const FeedCard = forwardRef(
  ({ feed }: FeedCardProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    const {
      brand: { name: brandName, logo: brandLogo },
      bannerImage,
      feedTitle,
    } = feed;

    const renderedContent = () => (
      <>
        <div className={classes.Feed__Header}>
          <div className={classes.Brand}>
            <div className={classes.Brand__LogoContainer}>
              <img src={brandLogo} alt={`${brandName} logo`} />
            </div>
            <label>{brandName}</label>
          </div>
          <div className={classes.Brief}>
            <button type="button" className={classes.Brief__Action}>
              Join brief now!
            </button>
          </div>
        </div>
        <div className={classes.Feed__Content}>
          <span
            className={classes.Feed__BannerImage}
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
        </div>
        <div className={classes.Feed__TitleContainer}>
          <h1>{feedTitle}</h1>
        </div>
      </>
    );

    return (
      <div className={classes.Feed} ref={ref}>
        {renderedContent()}
      </div>
    );
  }
);
