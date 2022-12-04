import { selectDarkMode } from "../../themeRedux/themeSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PostInterface from "../../models/postInterface";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Comments } from "../comments/Comments";
import moment from "moment";
import axios from "axios";
import { selectUser } from "../../userRedux/userSlice";

interface PostProps {
  post: PostInterface;
}

export const Post = ({ post }: PostProps) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [likedNum, setLikedNum] = useState<[]>([]);
  const [liked, setLiked] = useState<boolean>(false);
  const [commentAmount, setCommentAmount] = useState<[]>([]);
  const darkMode = useAppSelector(selectDarkMode);
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  // GET COMMENT AMOUNT
  useEffect(() => {
    const getCommentsAmount = async () => {
      try {
        const { data } = await axios.get(`/comments?postId=${post.id}`);
        // console.log(" from getCommentsAmount:", data.data);
        setCommentAmount(data.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    getCommentsAmount();
  }, []);

  
  // GET LIKES
  useEffect(() => {
    const getLikes = async () => {
      try {
        const { data } = await axios.get(`/likes?postId=${post.id}`);
        // console.log(" from getLikes:", data.data);
        setLikedNum(data.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    getLikes();
  }, []);
  // console.log("likes:", likes);



  // UPDATE LIKE ( ADD / DELETE )
  const handleLike = async () => {
    try {
      if (liked) {
        const { data } = await axios.post("/likes", { postId: post.id });
        console.log("from handleLike: ", data.data);
        setLikedNum(data.data.length);
        setLiked(!liked);
      }

      if (!liked) {
        const { data } = await axios.delete(`/likes?postId=${post.id}`);
        console.log("from handleLike: ", data.data);
        setLikedNum(data.data.length);
        setLiked(!liked);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`post ${darkMode ? "darkMode" : ""}`}>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="ditails">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className={`date ${darkMode ? "darkMode" : ""}`}>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
          </div>
          <MoreHorizIcon className={`moreIcon ${darkMode ? "darkMode" : ""}`} />
        </div>

        <div className="content">
          <p>{post.description}</p>
          {/* <img src={post.img} alt="img" /> */}
          <img src={`../../upload/${post.img}`} alt="" />
          {/* <img src={'../../upload/'+post.img} alt='' /> */}
        </div>
        <div className="info">
          <div className="item">
            {likedNum && currentUser.id && !liked ? (
              <FavoriteOutlinedIcon className="like" onClick={handleLike} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {likedNum} likes
          </div>

          {/* <div className="item" onClick={() => dispatch(toggleComment())}>
            <TextsmsOutlinedIcon />
            13 Comments
          </div> */}

          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            {commentAmount ? (
              <TextsmsOutlinedIcon className="commentIcon" />
            ) : (
              <TextsmsOutlinedIcon />
            )}
            {commentAmount} Comments
          </div>

          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {/* @ts-ignore */}
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};
