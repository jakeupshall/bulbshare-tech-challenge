export interface CommentsData {
  user: {
    name: string;
    avatar: string;
  };
  comment: string;
  submittedOn: string;
}

export type GETCommentsResponse = CommentsData[];
