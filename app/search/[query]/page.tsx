import getSearchResults from "@/lib/getSearchResults";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

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
    <>
      {results ? (
        Object.values(results).map((result) => (
          <p className="mb-10">{JSON.stringify(result)}</p>
        ))
      ) : (
        <h2>
          Nothing was found. Make sure your search term isn't too specific!
        </h2>
      )}
    </>
  );
}
