import getSearchResults from "@/lib/getSearchResults";
import { Metadata } from "next";
import SearchItem from "./components/SearchItem";

interface SearchResultsParams {
  params: { query: string };
}

export async function generateMetadata({
  params: { query },
}: SearchResultsParams): Promise<Metadata> {
  const decodedQuery = decodeURI(query);
  return { title: `'${decodedQuery}' search results` };
}

export default async function SearchResults({
  params: { query },
}: SearchResultsParams) {
  const results = (await getSearchResults(query)).query?.pages;

  return (
    <div className="m-auto flex flex-col justify-center gap-8">
      {results ? (
        Object.values(results).map((result, i) => (
          <SearchItem result={result} key={i} />
        ))
      ) : (
        <h2>
          Nothing was found. Make sure your search term isn't too specific!
        </h2>
      )}
    </div>
  );
}
