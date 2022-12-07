import { Link, useNavigate } from "react-router-dom";
import Friends from "../../assets/friend4.png";
import Groups from "../../assets/group.png";
import Market from "../../assets/marketplace.png";
import Watch from "../../assets/play.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/course2.png";
import Fund from "../../assets/fund3.png";
import { useAppSelector } from "../../app/hooks";
import { selectDarkMode } from "../../themeRedux/themeSlice";
import { selectUser } from "../../userRedux/userSlice";

export const Leftbar = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Link to={`/profile/${user.id}`}>
              <img src={user.profilePic} alt="" />
            </Link>
            <span>{user.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="img" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="img" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="img" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="img" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="img" />
            <span>Memories</span>
          </div>
        </div>
        <hr className="hr" />
        <div className="menu">
          <span>Your shortcats</span>
          <div className="item">
            <img src={Events} alt="img" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="img" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="img" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="img" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="img" />
            <span>Messages</span>
          </div>
        </div>
        <hr className="hr" />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials} alt="img" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="img" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund} alt="img" />
            <span>Fundraiser</span>
          </div>
        </div>
      </div>
    </div>
  );
};
