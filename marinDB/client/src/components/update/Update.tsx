import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { selectUser, updateUser } from "../../userRedux/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectDarkMode } from "../../themeRedux/themeSlice";
import axios from "axios";

interface UpdateProps {
  setOpenUpdate: Function;
  postUser: Object;
}

export const Update = ({ setOpenUpdate, postUser }: UpdateProps) => {
  const darkMode = useAppSelector(selectDarkMode);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  
  const [inputs, setInputs] = useState({
    email: user.email,
    password: user.password,
    name: user.name,
    city: user.city,
    website: user.website,
  });

  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  //   name: "",
  //   city: "",
  //   website: "",
  // });

  

  const upload = async (file: File) => {
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

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    let coverUrl;
    let profileUrl;
    // @ts-ignore
    coverUrl = cover ? await upload(cover) : postUser.coverPic;
    // @ts-ignore
    profileUrl = profile ? await upload(profile) : postUser.profilePic;
    console.log("from handleUpdate coverUrl: ", coverUrl);
    console.log("from handleUpdate coverUrl: ", coverUrl);
    try {
      const { data } = await axios.put("/users", {
        inputs,
        coverPic: coverUrl,
        profilePic: profileUrl,
      });

      setOpenUpdate(false);
      dispatch(updateUser(data.data));
      // setInputs({ ...data.data[0] });
      console.log("data from handleUpdate: ", data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  return (
    <div className={`update ${darkMode ? "darkMode" : ""}`}>
      <div className={`wrapper ${darkMode ? "darkMode" : ""}`}>
        <h1>Update Your Profile</h1>

        <form onSubmit={handleUpdate}>
          <div className="files">
            <label htmlFor="cover">
              <span>Cover Picture</span>
              <div className="imgContainer">
                {/* ts-ignore */}
                <img
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : `../../upload/${user.coverPic}`
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>

            <input
              type="file"
              id="cover"
              multiple={false}
              accept="image/*"
              className={`input ${darkMode ? "darkMode" : ""}`}
              style={{ display: "none" }}
              onChange={(e: any) => setCover(e.target.files[0])}
            />

            <label htmlFor="profile">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : `../../upload/${user.profilePic}`
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>

            <input
              type="file"
              id="profile"
              multiple={false}
              accept="image/*"
              className={`input ${darkMode ? "darkMode" : ""}`}
              style={{ display: "none" }}
              onChange={(e: any) => setProfile(e.target.files[0])}
            />
          </div>

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            className={`input ${darkMode ? "darkMode" : ""}`}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="text"
            name="password"
            value={inputs.password}
            className={`input ${darkMode ? "darkMode" : ""}`}
            onChange={handleChange}
          />

          <label>Name</label>
          <input
            type="text"
            value={inputs.name}
            name="name"
            className={`input ${darkMode ? "darkMode" : ""}`}
            onChange={handleChange}
          />

          <label>Country / City</label>
          <input
            type="text"
            name="city"
            value={inputs.city}
            className={`input ${darkMode ? "darkMode" : ""}`}
            onChange={handleChange}
          />

          <label>Website</label>
          <input
            type="text"
            name="website"
            value={inputs.website}
            className={`input ${darkMode ? "darkMode" : ""}`}
            onChange={handleChange}
          />

          <button type="submit">Update</button>
        </form>

        <button className="close" onClick={() => setOpenUpdate(false)}>
          close
        </button>
      </div>
    </div>
  );
};
