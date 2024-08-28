import { Posts } from "../types/post";

export async function getPosts(): Promise<Posts> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data: Posts = await res.json();

  return data.map((post) => ({
    ...post,
    comment: [],
  }));
}
