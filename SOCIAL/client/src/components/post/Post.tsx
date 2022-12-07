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
import { selectPosts, updatePost, updatePosts } from "../posts/postsSlice";

interface PostProps {
  post: PostInterface;
}

export const Post = ({ post }: PostProps) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [likedAmount, setLikedAmount] = useState<number | null>(null);
  const [liked, setLiked] = useState<boolean>(false);
  const [commentAmount, setCommentAmount] = useState<number | null>(null);
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const user = useAppSelector(selectUser);

 

  // GET COMMENT AMOUNT
  useEffect(() => {
    const getCommentsAmount = async () => {
      try {
        const { data } = await axios.get(`/comments?postId=${post.id}`);
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
        setLikedAmount(data.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    getLikes();
  }, [likedAmount]);


  // UPDATE LIKE ( ADD / DELETE )
  const handleLike = async () => {
    setLiked(!liked);
    try {
      if (liked) {
        const { data } = await axios.post("/likes", { postId: post.id });
        setLikedAmount(data.data.length);
      }

      if (!liked) {
        const { data } = await axios.delete(`/likes?postId=${post.id}`);
        setLikedAmount(data.data.length);
      }
    } catch (error) {
      console.error(error);
    }
    console.log("likes:", liked);
  };


  const handleDeletePost = async (postId: number | null) => {
    try {
      const { data } = await axios.delete(`/posts/${postId}`);
      dispatch(updatePost(data.data));
    } catch (error) {
      console.error(error);
    }
    console.log("post from handleDeletePost: ", post);
  };

  

  return (
    <div className="post">
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
              <span className='date'>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
          </div>
          {!menuOpen ? (
            <MoreHorizIcon
              className="moreIcon"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          )}
        </div>

        <div className="content">
          <p>{post.description}</p>
          <img src={`../../upload/${post.img}`} alt="" />
          {/* <img src={'../../upload/'+post.img} alt='' /> */}
        </div>
        <div className="info">
          <div className="item">
            {likedAmount && currentUser.id && !liked ? (
              <FavoriteOutlinedIcon className="like" onClick={handleLike} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {likedAmount} likes
          </div>

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

        {commentOpen && (
          <Comments
            postId={post.id}
            commentAmount={commentAmount}
            setCommentAmount={setCommentAmount}
          />
        )}
      </div>
    </div>
  );
};
