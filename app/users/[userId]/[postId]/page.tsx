import getPost from "@/lib/getPost";
import { Suspense } from "react";
import PageContent from "./components/PageContent";

interface UserPostParams {
  params: { postId: string, userId: string }
}

export default async function UserPost({ params: { postId }}: UserPostParams) {
  const postPromise = getPost(postId);

  return (
    <Suspense fallback={<h2>Loading post...</h2>}>
      <PageContent postPromise={postPromise} />
    </Suspense>
  )
}
