type SearchResult = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResults = {
  query?: {
    pages?: Record<string, SearchResult>;
  };
};
