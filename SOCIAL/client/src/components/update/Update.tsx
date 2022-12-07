import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { selectUser, updateUser } from "../../userRedux/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import axios from "axios";

interface UpdateProps {
  setOpenUpdate: Function;
  postUser: Object;
}

export const Update = ({ setOpenUpdate, postUser }: UpdateProps) => {
  const [file, setFile] = useState("");
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  // IMGs:
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  // INPUTS:
  const [profileUser, setProfileUser] = useState({
    // @ts-ignore
    email: postUser.email,
    // @ts-ignore
    name: postUser.name,
    // @ts-ignore
    city: postUser.city,
    // @ts-ignore
    website: postUser.website,
  });
 
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log("from formData: ", formData);
      const { data } = await axios.patch("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("from upload: ", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    let coverUrl;
    let profileUrl;
    // @ts-ignore
    coverUrl = cover ? await upload() : postUser.coverPic;
    // @ts-ignore
    profileUrl = profile ? await upload() : postUser.profilePic;
    console.log("from handleUpdate coverUrl: ", coverUrl);
    console.log("from handleUpdate profileUrl: ", profileUrl);
    try {
      const { data } = await axios.patch("/users", {
        ...profileUser,
        coverPic: coverUrl,
        profilePic: profileUrl,
        postUser,
      });
      
      // setProfileUser(data.data);
      // setProfileUser(profileUser);
      setOpenUpdate(false);
      setCover(null);
      setProfile(null);
      // dispatch(updateUser(data.data));
      // setInputs({ ...data.data[0] });
      console.log("from handleUpdate: ", data.data);
    } catch (error) {
      console.log(error);
    }

    console.log(profileUser);
  };

  const handleChange = (e: React.FormEvent<Element> | any) => {
    setProfileUser((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  return (
    <div className="update">
      <div className="wrapper">
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
              style={{ display: "none" }}
              onChange={(e: any) => setProfile(e.target.files[0])}
            />
          </div>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profileUser.email}
            onChange={handleChange}
          />

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profileUser.name}
            onChange={handleChange}
          />

          <label>Country / City</label>
          <input
            type="text"
            name="city"
            value={profileUser.city}
            onChange={handleChange}
          />

          <label>Website</label>
          <input
            type="text"
            name="website"
            value={profileUser.website}
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
