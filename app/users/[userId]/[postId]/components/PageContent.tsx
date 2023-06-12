import styles from "../styles.module.css";

interface PageContentParams {
  postPromise: Promise<Post>
}

export default async function PageContent({ postPromise }: PageContentParams) {
  const post = await postPromise;

  return (
    <>
    <h1 className={styles.pageTitle}>{post.title}</h1>
    <p>{post.body}</p>
    </>
  )
}
