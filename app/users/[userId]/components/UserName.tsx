import styles from "../styles.module.css";

interface PageTitleParams {
  userPromise: Promise<User>
}

export default async function PageTitle({ userPromise }: PageTitleParams) {
  const user = await userPromise;

  return (
    <h1 className={styles.pageTitle}>{user.name}</h1>
  )
}