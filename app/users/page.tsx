"use client";

import { Metadata } from "next"
import { useEffect, useState } from "react";
import getAllUsers from "../../lib/getAllUsers";
import Link from "next/link";
import styles from "./styles.module.css";


export default async function Users() {
  const users: User[] = await getAllUsers();

  function showStyles() {
    console.log(styles);
  }

  const usersNodes = users.map((user, i) => {
    const { city, street, geo } = user.address;

    return (
      <li onClick={showStyles} className={styles.user} key={i}>
        <div>
          <h3 className={styles.userName}>{user.name}</h3>
          <h4 className={styles.userPhone}>Phone Number: {user.phone}</h4>
        </div>

        <div className={styles.userLocation}>
          <p>Latitude: {geo.lat}</p>
          <p>Longitude: {geo.lng}</p>
        </div>
      </li>
    )
  })

  return (
    <main>
      <h1 className={styles.usersPageTitle}>List of users</h1>
      <ol>{usersNodes}</ol>
    </main>
  )
}