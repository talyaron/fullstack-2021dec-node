import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Menu } from "../../components/menu/Menu";
import { useAppDispatch } from "../../app/hooks";
import { show } from "../../components/navbar/showNavbarSlice";

export const Single = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(show());
  }, []);

  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/400" alt="img" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="user"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={`/write?edit=2`}>
              <AiFillEdit />
            </Link>
          </div>
          <div className="delete">
            <RiDeleteBin6Line />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo
          ac lorem eu lobortis. Nulla sit amet erat purus. Nullam sed est
          volutpat, euismod sapien at, semper urna. Praesent eget diam in mi
          varius consequat. Curabitur elit odio, placerat nec leo a, tempus
          mattis lorem. Fusce quis odio nulla. Duis at sem quis nulla aliquam
          consequat. Aliquam erat volutpat. Donec luctus scelerisque tempus.
          Nullam accumsan ipsum lacus. Vivamus pellentesque sed sem pretium
          viverra. Praesent ornare mi efficitur, blandit sem at, aliquam urna.
          Nulla semper sollicitudin augue, vel venenatis nunc mollis id. Aenean
          non diam est. Vestibulum hendrerit pulvinar magna, sit amet gravida
          dui dapibus nec. Donec eu lacus non nisi vehicula aliquet eu at dolor.
          Nam eu interdum velit. Aliquam in risus et purus auctor sagittis ac a
          ligula. Proin placerat blandit mauris id fermentum. Donec accumsan
          felis scelerisque urna euismod malesuada. Praesent dapibus nulla sit
          amet lobortis maximus. Curabitur luctus lorem quis ex luctus, eu
          eleifend leo pharetra. Fusce vitae imperdiet nisi. Aenean laoreet
          vulputate purus ut sagittis. Praesent ultricies lacinia imperdiet. In
          et varius odio, vitae ultricies ipsum. Donec justo purus, imperdiet eu
          ipsum et, venenatis dictum risus. Etiam tempus, est vitae maximus
          eleifend, augue sapien laoreet ligula, sed ornare dolor turpis non
          dolor. In hac habitasse platea dictumst. Nam in ante posuere, dictum
          dolor aliquet, imperdiet sem. Praesent nunc lectus, lacinia eget enim
          sed, euismod auctor est. Suspendisse venenatis gravida est non
          rhoncus. Nullam at metus elit. Sed accumsan fringilla est, a
          condimentum felis convallis id. Duis tristique mattis leo, eget
          hendrerit enim dapibus at. Curabitur elementum quam a orci mollis
          hendrerit vitae id turpis. Mauris hendrerit a eros vel facilisis.
          Vestibulum sed magna ut augue mattis sodales nec et risus. Morbi
          rhoncus urna et posuere mattis. Praesent quis odio vel libero pulvinar
          dignissim. Suspendisse suscipit velit sit amet dictum rhoncus.
          Pellentesque id est sed risus ultrices lacinia ac a enim. Vivamus eu
          sagittis turpis.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};
