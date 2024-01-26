import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { SlideArticle } from "./SlideArticle/SlideArticle";
import { SlideViewer } from "./SlideViewer";
import { SlidePresentationProps } from "./types";

import classes from "./SlidePresentation.module.scss";

export const SlidePresentation: FC<SlidePresentationProps> = ({ feed }) => {
  const [viewingIndex, setViewingIndex] = useState<number>(1);
  const viewerRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  const onViewerScroll = (e: any) => {
    const scrollDirection = e.wheelDelta < 0 ? "down" : "up";

    if (articleRef.current) {
      if (scrollDirection === "down") {
        setViewingIndex(2);
      }
    }
  };

  const onArticleScroll = (e: any) => {
    const scrollDirection = e.wheelDelta < 0 ? "down" : "up";

    if (articleRef.current) {
      const { scrollTop } = articleRef.current;
      const isNearTop = scrollTop === 0;

      if (isNearTop && scrollDirection === "up") {
        setViewingIndex(1);
      }
    }
  };

  useEffect(() => {
    const viewerElement = viewerRef.current;
    const articleElement = articleRef.current;

    if (viewerElement) {
      viewerElement.addEventListener("wheel", onViewerScroll);
    }

    if (articleElement) {
      articleElement.addEventListener("wheel", onArticleScroll);
    }

    // Clean-up
    return () => {
      viewerElement?.removeEventListener("wheel", onViewerScroll);
      articleElement?.removeEventListener("wheel", onArticleScroll);
    };
  }, []);

  return (
    <div className={classes.SlidePresentation}>
      <div
        className={classNames(classes.SlidePresentation__ImageContainer, {
          [classes["SlidePresentation__ImageContainer--hidden"]]:
            viewingIndex !== 1,
        })}
        ref={viewerRef}
      >
        <SlideViewer feed={feed} />
      </div>
      <div
        className={classNames(classes.SlidePresentation__ArticleContainer, {
          [classes["SlidePresentation__ArticleContainer--hidden"]]:
            viewingIndex !== 2,
        })}
        ref={articleRef}
      >
        <SlideArticle feed={feed} />
      </div>
      <div className={classes.SlidePresentation__ControlContainer}>
        <button
          type="button"
          aria-label="Previous slide"
          className={classNames(
            classes.SlidePresentation__Control,
            classes["SlidePresentation__Control--prev"]
          )}
          onClick={() => setViewingIndex(viewingIndex - 1)}
          disabled={viewingIndex === 1}
        >
          <svg aria-hidden="true">
            <use href="/switch-down.svg#icon" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className={classNames(
            classes.SlidePresentation__Control,
            classes["SlidePresentation__Control--next"]
          )}
          onClick={() => setViewingIndex(viewingIndex + 1)}
          disabled={viewingIndex === 2}
        >
          <svg aria-hidden="true">
            <use href="/switch-down.svg#icon" />
          </svg>
        </button>
      </div>
    </div>
  );
};
