import getAllUsers from "../../lib/getAllUsers";
import Link from "next/link";
import styles from "./styles.module.css";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Users"
}

export default async function Users() {
  const users = await getAllUsers();

  const usersNodes = users.map((user, i) => (
    <div className={styles.userContainer} key={i}>
      <Link href={`/users/${user.id}`}>
        <div className={styles.user}>
          <h3 className={styles.userName}>{user.name}</h3>
          <p className={styles.userCompanyName}>{user.company.name}</p>
        </div>
      </Link>
    </div>
  ))

  return (
    <>
    <h1 className={styles.pageTitle}>Users</h1>
    <ol>{usersNodes}</ol>
    </>
  )
}