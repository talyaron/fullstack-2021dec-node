import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import CommentInterface from "../../models/commentInterface";
import { selectDarkMode } from "../../themeRedux/themeSlice";
import { selectUser } from "../../userRedux/userSlice";
import { selectPosts } from "../posts/postsSlice";
import { commentSelector, commentsSelector, updateComment, updateComments } from "./commentSlice";
import axios from "axios";
import moment from "moment";

interface CommentProps {
  postId: number;
}

export const Comments = ({ postId }: CommentProps) => {
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);
  const user = useAppSelector(selectUser);
  const comments = useAppSelector(commentsSelector);
  // const comment = useAppSelector(commentSelector);


  useEffect(() => {
    const getComments = async () => {
      try {
        // const { data } = await axios.get("/comments?postId=" + postId);
        const { data } = await axios.get(`/comments?postId=${postId}`);
        console.log(data.data);
        dispatch(updateComments(data.data));
        console.log("data from getComment - Comments:", data.data);

      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, []);
  

  const handleSubmitComment = async (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/comments", { description, postId });     
      // if (!Array.isArray(data.data)) throw new Error("data.data is not array")
      // dispatch(updateComments(data.data));   
      setDescription(data.data);
          
    } catch (error) {
      console.error(error);
    }
  };
  console.log("comments from Comments: ", comments);

  return (
    <div className={`comments ${darkMode ? "darkMode" : ""}`}>
      <div className="write">
        <img src={user.profilePic} alt="" />
        <input
          className={`input ${darkMode ? "darkMode" : ""}`}
          type="text"
          name="description"
          placeholder="write a comment"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmitComment}>Send</button>
      </div>

      {/* <form className="write" onSubmit={handleSubmitComment}>
        <img src={user.profilePic} alt="" />
        <input
          className={`input ${darkMode ? "darkMode" : ""}`}
          type="text"
          name="description"
          placeholder="write a comment"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Send</button>
      </form> */}

      {comments.map((comment: CommentInterface) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.description}</p>
          </div>
          <div className="date">
            <span>{moment(comment.createdAt).fromNow()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
