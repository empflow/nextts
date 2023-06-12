export default async function getPost(postId: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}