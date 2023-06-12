import styles from "../styles.module.css";

interface UserPostsProps {
  postsPromise: Promise<Post[]>
}

export default async function UserPosts({ postsPromise }: UserPostsProps) {
  const posts = await postsPromise;

  const postsNodes = posts.map((post, i) => {
    const titleExcerptLength = 30;
    const bodyExcerptLength = 50;
    const titleExcerpt = getExcerpt(post.title, titleExcerptLength);
    const bodyExcerpt = getExcerpt(post.body, bodyExcerptLength);

    return (
      <article key={i} className={styles.post}>
        <h2>{titleExcerpt}</h2>
        <p>{bodyExcerpt}</p>
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