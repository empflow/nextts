import { FC } from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import PageTitle from "./components/PageTitle";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next"
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "User Posts"
}

interface IUserProps {
  params: { userId: string }
}

export default async function User({ params: { userId }}: IUserProps) {
  const userPromise: Promise<User> = getUser(userId);
  const userPostsPromise: Promise<Post[]> = getUserPosts(userId);

  return (
    <>
    <Suspense fallback={<h2>Loading title...</h2>}>
      {/* @ts-expect-error */}
      <PageTitle userPromise={userPromise} />
    </Suspense>

    <Suspense fallback={<h2>Loading posts...</h2>}>
      {/* @ts-expect-error */}
      <UserPosts postsPromise={userPostsPromise} />
    </Suspense>
    </>
  )
}