import { forwardRef, LegacyRef, useEffect, useState } from "react";

import { FeedDetail } from "../../modules/FeedDetail";

import { Modal } from "../Modal";
import { FeedCardProps } from "./types";

import classes from "./FeedCard.module.scss";

export const FeedCard = forwardRef(
  ({ feed }: FeedCardProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    const {
      brand: { name: brandName, logo: brandLogo },
      bannerImage,
      feedTitle,
    } = feed;
    const [showDetail, setShowDetail] = useState<boolean>(false);

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
        <button
          className={classes.Feed__Content}
          onClick={() => setShowDetail(true)}
        >
          <span
            className={classes.Feed__BannerImage}
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
          <span className={classes.Feed__TitleContainer}>
            <h1>{feedTitle}</h1>
          </span>
        </button>
      </>
    );

    useEffect(() => {
      if (showDetail) {
        document.body.style.overflow = "hidden"; // prevent the background of the application from scrolling while the full-size lightbox modal is open
      } else {
        document.body.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
      };
    }, [showDetail]);

    return (
      <>
        <div className={classes.Feed} ref={ref}>
          {renderedContent()}
        </div>
        {showDetail && (
          <Modal onCancel={() => setShowDetail(false)}>
            <FeedDetail feed={feed} />
          </Modal>
        )}
      </>
    );
  }
);
