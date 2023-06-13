import { notFound } from "next/navigation";
import styles from "../styles.module.css";

interface PageContentParams {
  postPromise: Promise<Post | undefined>
}

export default async function PageContent({ postPromise }: PageContentParams) {
  const post = await postPromise;
  if (!post) return notFound();

  return (
    <>
    <h1 className={styles.pageTitle}>{post.title}</h1>
    <p>{post.body}</p>
    </>
  )
}
