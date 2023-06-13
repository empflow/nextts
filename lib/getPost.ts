export default async function getPost(postId: string): Promise<Post | undefined> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!res.ok) return undefined;
  return res.json();
}