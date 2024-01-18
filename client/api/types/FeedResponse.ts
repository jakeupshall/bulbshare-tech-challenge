export interface FeedData {
  brand: {
    name: string;
    logo: string;
  };
  name: string;
  description: string;
  feedTitle: string;
  bannerText: string;
  bannerImage: string;
  adImage1: string;
  adImage2: string;
  startsOn: string;
}

export interface PaginateFeed {
  from: number;
  to: number;
  limit: number;
  totalItems: number;
  prevContent: number | null;
  nextContent: number | null;
}

export interface GETFeedResponse {
  paginate: PaginateFeed;
  items: FeedData[];
}
