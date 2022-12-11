import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPost, selectPosts, updatePosts } from "./postsSlice";
import { Post } from "../post/Post";
import PostInterface from "../../models/postInterface";
import axios from "axios";
import { selectSearch } from "../navbar/serachSlice";

interface PostsProps {
  userId: number;
}

export const Posts = ({ userId }: PostsProps) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const post = useAppSelector(selectPost);
  const search = useAppSelector(selectSearch);

  // GETPOSTS
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(`/api/posts/getPosts?userId=${userId}`);
        dispatch(updatePosts(data.data));
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
    // console.log("from getPosts posts:", posts);
  }, [post]);

  // useEffect(() => {
  //   const getPostsByName = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/posts/${search}`);
  //       dispatch(updatePosts(data.data));
  //       dispatch(changeSearch(search));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getPostsByName();
  //   // console.log("from getPosts posts:", posts);
  // }, [search]);

  // GETPOSTS THUNK
  // useEffect(() => {
  //   const getAllPosts = () => {
  //     try {
  //       dispatch(updatePost(posts));
  //       console.log(posts);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getAllPosts();
  // }, []);

  return (
    <div className="posts">
      {posts.map((post: PostInterface) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};
