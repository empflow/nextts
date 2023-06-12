import { useEffect, useState } from "react";
import getAllUsers from "../../lib/getAllUsers";
import Link from "next/link";
import styles from "./styles.module.css";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Users"
}

export default async function Users() {
  const users: User[] = await getAllUsers();

  const usersNodes = users.map((user, i) => (
    <li className={styles.user} key={i}>
      <Link href={`/users/${user.id}`}>
        <h3 className={styles.userName}>{user.name}</h3>
        <p className={styles.userCompanyName}>{user.company.name}</p>
      </Link>
    </li>
  ))

  return (
    <>
    <h1 className={styles.usersPageTitle}>Users</h1>
    <ol>{usersNodes}</ol>
    </>
  )
}