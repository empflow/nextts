import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../styles.module.css";

interface UserPostsParams {
  postsPromise: Promise<Post[]  | undefined>,
  userId: string
}

export default async function UserPosts({ postsPromise, userId }: UserPostsParams) {
  const posts = await postsPromise;
  if (!posts) notFound();

  const postsNodes = posts.map((post, i) => {
    const titleExcerptLength = 30;
    const bodyExcerptLength = 50;
    const titleExcerpt = getExcerpt(post.title, titleExcerptLength);
    const bodyExcerpt = getExcerpt(post.body, bodyExcerptLength);

    return (
      <article key={i} className={styles.postContainer}>
        <Link href={`/users/${userId}/${post.id}`}>
          <div className={styles.post}>
            <h2 className={styles.postTitle}>{titleExcerpt}</h2>
            <p className={styles.postExcerpt}>{bodyExcerpt}</p>
          </div>
        </Link>
      </article>
    )
  })

  return (
    <div className="posts">
      {postsNodes}
    </div>
  )
}

function getExcerpt(body: string, excerptLength: number) {
  if (body.length > excerptLength) {
    let excerpt = body.slice(0, excerptLength)
    excerpt = excerpt.trim();
    return excerpt += "...";
  } else {
    return body;
  }
}