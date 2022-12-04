import { useEffect, useState } from "react";
import Gallery from "../../assets/8.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { selectUser } from "../../userRedux/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectDarkMode } from "../../themeRedux/themeSlice";
import { selectPost, updatePost } from "../posts/postsSlice";
import axios from "axios";

export const Share = () => {
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);
  const user = useAppSelector(selectUser);
  // console.log(user)

  
  

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log("from formData: ", formData);
      const { data } = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("from upload: ", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleShare = async (e: any) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    console.log("from ShareComponent imgUrl from handleShare: ", imgUrl);
    try {
      const { data } = await axios.post("/posts", {
        description,
        img: imgUrl,
      });
       
      dispatch(updatePost(data));
      setDescription('');
      setFile("");
      // window.location.reload();
      // console.log("data from handleShare: ", data);

    } catch (error) {
      console.log(error);
    }
  };

  


  return (
    <div className={`share ${darkMode ? "darkMode" : ""}`}>
      <div className="container">
        <div className="top">
          <div className="left">
          <img src={user.profilePic} alt="" />
          <input
            className={`input ${darkMode ? "darkMode" : ""}`}
            type="text"
            value={description}
            placeholder={`What's on your mind ${user.name}?`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
          </div>
          <div className="right">
            {/* @ts-ignore */}
           { file && <img className="file" alt=""  src={URL.createObjectURL(file)} /> }
          </div>

        </div>
        <hr className={`hr ${darkMode ? "darkMode" : ""}`} />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              name="file"
              multiple={false}
              accept="image/*"
              style={{ display: "none" }}
              className={`input ${darkMode ? "darkMode" : ""}`}
              onChange={(e: any) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Gallery} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleShare}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};
