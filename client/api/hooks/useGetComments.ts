import { useQuery } from "@tanstack/react-query";

import { GETCommentsResponse } from "../types/CommentsResponse";
import { QueryKey } from "../types/QueryKey";

type TData = GETCommentsResponse;
type TError = unknown;
type TQueryData = GETCommentsResponse;
type TQueryKey = [QueryKey, string];

const getComments = async (feedId: string) =>
  fetch(`http://localhost:4000/comments?feedId=${feedId}`).then((res) =>
    res.json()
  );

export const useGetComments = (feedId: string) => {
  return useQuery<TData, TError, TQueryData, TQueryKey>({
    queryKey: [QueryKey.COMMENTS, feedId],
    queryFn: async () => getComments(feedId),
  });
};
