import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useGetFeeds } from "../../api/hooks";

import { FeedCard } from "../../components/FeedCard";
import { FeedPlaceholder } from "../../components/FeedPlaceholder";

export const FeedList = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isLoading, isFetchingNextPage } = useGetFeeds(1);

  const renderPlaceholder = () =>
    Array.from({ length: 5 }, (_, i) => <FeedPlaceholder key={i} />);

  useEffect(() => {
    if (inView && !isLoading && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isFetchingNextPage, isLoading]);

  if (!data && !isLoading) {
    return (
      <p>There's no feeds available at the moment, please try again later</p>
    );
  }

  return (
    <>
      {data?.pages.map((page, pageIndex) => (
        <Fragment key={pageIndex}>
          {page.items.map((feed, feedIndex) => (
            <FeedCard
              key={feed.feedTitle}
              feed={feed}
              ref={page.items.length === feedIndex + 1 ? ref : undefined} // ref is only applied to the last item to get when it comes into view
            />
          ))}
        </Fragment>
      ))}
      {(isLoading || isFetchingNextPage) && renderPlaceholder()}
    </>
  );
};
