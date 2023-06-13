export default async function getUserPosts(userId: string): Promise<Post[] | undefined> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 30 }});
  if (!res.ok) return undefined;
  return res.json();
}