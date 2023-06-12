import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserName from "./components/UserName";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next"
import styles from "./styles.module.css";

export async function generateMetadata({ params: { userId }}: IUserProps): Promise<Metadata> {
  const user = await getUser(userId);
  return {
    title: user.name,
    description: `The page of ${user.name}`
  }
}

interface IUserProps {
  params: { userId: string }
}

export default async function User({ params: { userId }}: IUserProps) {
  const userPromise = getUser(userId);
  const userPostsPromise = getUserPosts(userId);

  return (
    <>
    <Suspense fallback={<h2>Loading title...</h2>}>
      <UserName userPromise={userPromise} />
    </Suspense>

    <Suspense fallback={<h2>Loading posts...</h2>}>
      <UserPosts userId={userId} postsPromise={userPostsPromise} />
    </Suspense>
    </>
  )
}