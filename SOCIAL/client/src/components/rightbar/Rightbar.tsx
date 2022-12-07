import { useAppSelector } from "../../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Rightbar = () => {
  const [postUser, setPostUser] = useState<{}>({});

  return (
    <div className="righrbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0cp6fyIxUx3pHnHRmsZi4iG3A9u46zy1GA&usqp=CAU"
                alt="avatar"
              />
              <span className="span">Jeff Bridges</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYiikbyUqYPvSBILICPFoYgMpIVdE5RGfZA&usqp=CAU"
                alt="avatar"
              />
              <span className="span">Jack Nicholson</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Lastest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjFmzABJ52h_jz_uSi9PdaFIlCH2V7vcLzA9GPk0NQw&s"
                alt="avatar"
              />
              <p>
                <span className="span">Barbara Streisand</span>
                {"  "}
                Changed her cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJQeAlgKO9RexnOrTY-t27h-KjmDfzxADNg&usqp=CAU"
                alt="avatar"
              />
              <p>
                <span className="span">Liza Minnelli</span>
                {"  "}
                Posted a new post
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmuJjFSgC6yiuLl-n37wQS2HE19WFb20YyQ&usqp=CAU"
                alt="avatar"
              />
              <p>
                <span className="span">Bob Marley</span>
                {"  "}
                Joind the group
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT1Ibf7l7jk_KDCgrl-P5sLRWJbKdY9htdw&usqp=CAU"
                alt="avatar"
              />
              <p>
                <span className="span">Michael Douglas</span>
                {"  "}
                Follwed Bob Marley
              </p>
            </div>
            <span>7 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT1Ibf7l7jk_KDCgrl-P5sLRWJbKdY9htdw&usqp=CAU"
                alt="avatar"
              />
              <div className="online" />
              <span className="span">Michael Douglas</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmuJjFSgC6yiuLl-n37wQS2HE19WFb20YyQ&usqp=CAU"
                alt="avatar"
              />
              <div className="online" />
              <span className="span">Bob Marley</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjFmzABJ52h_jz_uSi9PdaFIlCH2V7vcLzA9GPk0NQw&s"
                alt="avatar"
              />
              <div className="online" />
              <span className="span">Barbara Streisand</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYiikbyUqYPvSBILICPFoYgMpIVdE5RGfZA&usqp=CAU"
                alt="avatar"
              />
              <div className="online" />
              <span className="span">Jack Nicholson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJQeAlgKO9RexnOrTY-t27h-KjmDfzxADNg&usqp=CAU"
                alt=""
              />

              <div className="online" />
              <span className="span">Liza Minnelli</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
