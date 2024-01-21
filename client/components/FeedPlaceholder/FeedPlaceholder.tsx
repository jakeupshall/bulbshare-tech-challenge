import classNames from "classnames";

import classes from "./FeedPlaceholder.module.scss";

export const FeedPlaceholder = () => {
  return (
    <>
      <div className={classNames(classes.FeedPlaceholder, classes.Animate)}>
        <div className={classes.FeedPlaceholder__Header}>
          <div className={classes.FeedPlaceholder__BrandLogo} />
          <div className={classes.FeedPlaceholder__BrandTitle}>
            <div
              className={classNames(
                classes.FeedPlaceholder__Line,
                classes["FeedPlaceholder__Line--medium"]
              )}
            />
            <div
              className={classNames(
                classes.FeedPlaceholder__Line,
                classes["FeedPlaceholder__Line--short"]
              )}
            />
          </div>
        </div>
        <div className={classes.FeedPlaceholder__Banner} />
        <div className={classes.FeedPlaceholder__Detail}>
          <div className={classes.FeedPlaceholder__Section}>
            <div className={classes.FeedPlaceholder__Line} />
            <div className={classes.FeedPlaceholder__Line} />
            <div
              className={classNames(
                classes.FeedPlaceholder__Line,
                classes["FeedPlaceholder__Line--short"]
              )}
            />
          </div>
        </div>
        <div className={classes.FeedPlaceholder__Footer}>
          <div className={classes.FeedPlaceholder__Section}>
            <div className={classNames(classes.FeedPlaceholder__Line)} />
          </div>
        </div>
      </div>
    </>
  );
};
