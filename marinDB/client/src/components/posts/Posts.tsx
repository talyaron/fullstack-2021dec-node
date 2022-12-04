import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPosts, updatePosts } from "./postsSlice";
import { selectDarkMode } from "../../themeRedux/themeSlice";
import { Post } from "../post/Post";
import PostInterface from "../../models/postInterface";
import axios from "axios";
import { commentsSelector, updateComments } from "../comments/commentSlice";

export const Posts = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);
  const posts = useAppSelector(selectPosts);
  // const comment = useAppSelector(commentsSelector);

  // GETPOSTS ASYNC
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get("/posts");
        dispatch(updatePosts(data.data));
        // console.log(data.data);

      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

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
    <div className={`posts ${darkMode ? "darkMode" : ""}`}>
      {posts.map((post: PostInterface) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};


