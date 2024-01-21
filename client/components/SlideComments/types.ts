import { GETCommentsResponse } from "../../api/types/CommentsResponse";

export interface SlideCommentsProps {
  authorLogo: string;
  authorTitle: string;
  authorPostedDate: string;
  comments?: GETCommentsResponse;
  isLoading: boolean;
  title: string;
}
