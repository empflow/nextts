import getSearchResults from "@/lib/getSearchResults";

interface QueryParams {
  params: { query: string };
}

export default async function SearchResults({
  params: { query },
}: QueryParams) {
  const res = getSearchResults(query);
  const results = (await res).query?.pages;
  console.log(results);

  const resultsNodes = results ? (
    Object.values(results).map((result) => (
      <p className="mb-10">{JSON.stringify(result)}</p>
    ))
  ) : (
    <h2>Nothing was found. Make sure your search term isn't too specific!</h2>
  );

  return <>{resultsNodes}</>;
}
