import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
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
import { selectDarkMode } from "../../themeRedux/themeSlice";
import { selectUser } from "../../userRedux/userSlice";
import { Posts } from "../../components/posts/Posts";
import { Update } from "../../components/update/Update";
import axios from "axios";

export const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [postUser, setPostUser] = useState({});
  const [ralationshipData, setRalationshipData] = useState({});
  const [following, setFollowing] = useState<boolean>(true);
  const darkMode = useAppSelector(selectDarkMode);
  const user = useAppSelector(selectUser);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const dispatch = useAppDispatch();
  // console.log("userId from Profile: ", userId);

  // GET PROFILE USER
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get("/users/find/" + userId);
        const { postUser } = data;
        // console.log("data from getUser:", data.postUser);
        setPostUser(data.postUser);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);
  console.log("postUser: ", postUser);

  // GET PROFILE`S USER RELATIONSHIP
  useEffect(() => {
    const getRelationships = async () => {
      try {
        const { data } = await axios.get(
          `/relationships?followedUserId=${userId}`
        );
        console.log("from getRelationships: ", data.data);
        setRalationshipData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getRelationships();
  }, []);

  // FOLLOW / UNFOLLOW USER
  const handleFollow = async () => {
    try {
      // if ( !following ) {
      //   const { data } = await axios.post("/relationships", { userId });
      //   console.log("from handleFollowUser: ", data.data);
      //   setRalationshipData(data.data);
      // }
      // const { data } = await axios.post("/relationships", { userId });
      // console.log("from handleFollowUser: ", data);
      // setRalationshipData(data.data);
      // ------------------------------------------------
      // if ( following ) {
      //   const { data } = await axios.delete(`/relationships?userId=${userId}`);
      //   console.log("from handleFollowUser: ", data.data);
      //   setRalationshipData(data.data);
      // }
      // const { data } = await axios.delete(`/relationships?userId=${userId}`);
      // console.log("from handleFollowUser: ", data);
      // setRalationshipData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`profile ${darkMode ? "darkMode" : ""}`}>
      <div className="images">
        <div className="border">
          {/* @ts-ignore */}
          <img className="cover" src={postUser.coverPic} alt="" />
        </div>
        {/* @ts-ignore */}
        <img src={postUser.profilePic}
          className={`profilePic ${darkMode ? "darkMode" : ""}`}
          alt=""
        />
      </div>

      <div className="profileContainer">
        <div className={`uInfo ${darkMode ? "darkMode" : ""}`}>
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
              <button onClick={handleFollow}>Follow</button>
            )}

            {/* {userId === user.id ? (
              <button onClick={handleUpdateUser}>update</button>
            ) : (
              <button onClick={handleFollowUser}> {ralationshipData === user && following ? "Folowing" : "Follow"}{" "}
              </button>
            )} */}
          </div>

          <div className="right">
            <ForumOutlinedIcon />
            <a href="mailto:marinaziv4@gmail.com" target="_bliank">
              <EmailOutlinedIcon />
            </a>
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
      {openUpdate && (
        <Update setOpenUpdate={setOpenUpdate} postUser={postUser} />
      )}
    </div>
  );
};
