import BlockedIcon from "@/app/icons/Blocked";
import Image from "next/image";
import Link from "next/link";

interface SearchItemProps {
  result: SearchResult;
}

export default function SearchItem({ result }: SearchItemProps) {
  const thumbnail = result.thumbnail ? (
    <Image
      alt={result.title}
      src={result.thumbnail?.source}
      fill={true}
      loading="lazy"
      style={{
        objectFit: "cover",
        borderRadius: "5px",
      }}
    />
  ) : (
    <BlockedIcon className="fill-c-gray-500 object-cover dark:fill-c-gray-1000" />
  );

  const textContent = (
    <>
      <h2>{result.title}</h2>
      <p>{result.extract}</p>
    </>
  );

  return (
    <Link
      href={`https://en.wikipedia.org/?curid=${result.pageid}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className="flex w-full gap-5">
        <div className="relative h-40 w-40 flex-shrink-0 flex-grow-0">
          {thumbnail}
        </div>
        <div>{textContent}</div>
      </article>
    </Link>
  );
}
