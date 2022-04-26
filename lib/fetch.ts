import fetch from "node-fetch";
import { POST } from "../types/types";

export const getAllPostsData = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/get-blogs/`)
  );
  const posts: POST[] = await res.json();
  return posts;
};
export const getAllPostIds = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/get-blogs/`)
  );
  const posts: POST[] = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};
export const getPostData = async (id: string) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/get-blogs/${id}`)
  );
  const post: POST = await res.json();
  return post;
};
