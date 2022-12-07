import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPost, selectPosts, updatePosts } from "./postsSlice";
import { Post } from "../post/Post";
import PostInterface from "../../models/postInterface";
import axios from "axios";


export const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const post = useAppSelector(selectPost);


  // GETPOSTS 
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        dispatch(updatePosts(data.data));

      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
    // console.log("from getPosts posts:", posts);
  }, [post]);

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
    <div className="posts" >
      {posts.map((post: PostInterface) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};


