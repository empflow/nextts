import styles from "./styles.module.css";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserName from "./components/UserName";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { userId }}: IUserParams): Promise<Metadata> {
  const user = await getUser(userId);
  if (!user?.name) return { title: "User not found" };

  return {
    title: user.name,
    description: `The page of ${user.name}`
  }
}

interface IUserParams {
  params: { userId: string }
}

export default async function User({ params: { userId }}: IUserParams) {
  const userPostsPromise = getUserPosts(userId);
  const user = await getUser(userId);
  if (!user?.name) notFound();

  return (
    <>
    <h1 className={styles.pageTitle}>{user.name}</h1>

    <Suspense fallback={<h2>Loading posts...</h2>}>
      <UserPosts userId={userId} postsPromise={userPostsPromise} />
    </Suspense>
    </>
  )
}

export async function generateStaticParams() {
  const users = await getAllUsers();
  return users.map(user => ({
    userId: user.id.toString()
  }))
}