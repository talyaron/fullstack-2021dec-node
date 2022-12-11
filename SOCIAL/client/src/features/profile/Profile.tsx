import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import avatar from "../../assets/avatar.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectUser } from "../../userRedux/userSlice";
import { Posts } from "../../components/posts/Posts";
import { Update } from "../../components/update/Update";
import axios from "axios";

export const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [postUser, setPostUser] = useState<{}>({});
  const [followerUserId, setFollowerUserId] = useState<number>();
  const [following, setFollowing] = useState<boolean>(true);
  const user = useAppSelector(selectUser);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const dispatch = useAppDispatch();

  // GET PROFILE USER
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/users/find/" + userId);
        // const { postUser } = data;
        setPostUser(data.postUser);
      } catch (error) {
        console.error(error);
      }
    })();

    console.log("postUser: ", postUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // GET RELATIONSHIP
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `/api/relationships/getRelationships?followedUserId=${userId}`
        );
        // console.log(data.data[0]);          // {followerUserId: 1}
        // console.log(Object.values(data.data[0]));

        // EXTRACTING VALUE FROM THE OBJECT & CONVERTING TO THE NUMBER:
        for (let [key, value] of Object.entries(data.data[0])) {
          // console.log(`${key}: ${value}`);
          setFollowerUserId(parseInt(`${value}`));
        }
      } catch (error) {
        console.error(error);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  // console.log("followerUserId: ", followerUserId);
  // console.log(typeof followerUserId);




  // FOLLOW / UNFOLLOW USER
  const handleFollow = async () => {
    setFollowing(!following);
    console.log(userId);

    try {
      if (!following) {
        const { data } = await axios.post("/api/relationships/addRelationship", { userId });
        
      }

      if (following) {
        const { data } = await axios.delete(
          `/api/relationships/deleteRelationship?userId=${userId}`
        );
        
      }
    } catch (error) {
      console.error(error);
    }
    
    console.log("following:", following);
  };

  useEffect(() => {
    setPostUser(postUser);
  }, [user.id]);

  return (
    <div className="profile">
      <div className="images">
        <div className="border">
          {/* @ts-ignore */}
          <img src={postUser.coverPic} className="cover" alt="" />
        </div>
        {/* @ts-ignore */}
        <img src={postUser.profilePic} className="profilePic" alt="" />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon fontSize="medium" />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon fontSize="medium" />
            </a>
          </div>

          <div className="center">
            {/* @ts-ignore */}
            <span>{postUser.name}</span>

            <div className="info">
              <div className="item">
                <PlaceIcon />
                {/* @ts-ignore */}
                <span>{postUser.city}</span>
              </div>

              <div className="item">
                <LanguageIcon />
                {/* @ts-ignore */}
                <span>{postUser.website?.substring(0, 18)}</span>
              </div>
            </div>

            {userId === user.id ? (
              <button onClick={() => setOpenUpdate(true)}>update</button>
            ) : (
              <button onClick={handleFollow}>
                {" "}
                {followerUserId === user.id && following === true ? "Following" : "Follow"}{" "}
              </button>
            )}
          </div>

          <div className="right">
            <ForumOutlinedIcon />
            <a href="mailto:marinaziv4@gmail.com" target="_bliank">
              <EmailOutlinedIcon />
            </a>
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={userId}/>
      </div>
      {openUpdate && (
        <Update setOpenUpdate={setOpenUpdate} postUser={postUser} />
      )}
    </div>
  );
};
