import { useInfiniteQuery } from "@tanstack/react-query";

import { GETFeedResponse } from "../types/FeedResponse";
import { QueryKey } from "../types/QueryKey";

type TData = GETFeedResponse;
type TError = unknown;
type TQueryData = { pageParams: number[]; pages: GETFeedResponse[] };
type TQueryKey = QueryKey[];
type TPageParam = number;

const getFeeds = async ({ pageParam }: { pageParam: number }) =>
  fetch(`http://localhost:4000/feed?START=${pageParam as number}`).then((res) =>
    res.json()
  );

export const useGetFeeds = (start: number) => {
  return useInfiniteQuery<TData, TError, TQueryData, TQueryKey, TPageParam>({
    queryKey: [QueryKey.FEED_LIST],
    queryFn: getFeeds,
    initialPageParam: start,
    getNextPageParam: (lastGroup) => {
      const nextDataGroup = lastGroup.paginate.nextContent;

      if (nextDataGroup) {
        return nextDataGroup;
      }

      return undefined;
    },
  });
};
