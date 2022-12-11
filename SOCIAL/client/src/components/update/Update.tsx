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
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState();
  const [cover, setCover] = useState<any>();
  const [coverURL, setCoverURL] = useState();
  const [profile, setProfile] = useState<any>();
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

  // const uploadProfile = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", profile);
  //     formData.append("upload_preset", "imu1jl9i");

  //     const { data } = await axios.post(
  //       "https://api.cloudinary.com/v1_1/dvfl7coan/image/upload",
  //       formData
  //     );
  //     console.log("PROFILE secure_url: ", data.secure_url);
  //     setFile(data.secure_url);

  //   } catch (err) {
  //     console.log(err);
  //   }

  //   console.log("Upload Profile: ", profile);
  // };

  const uploadCover = async () => {
    try {
      const formData = new FormData();
      formData.append("file", cover);
      formData.append("upload_preset", "imu1jl9i");

      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dvfl7coan/image/upload",
        formData
      );
      console.log("COVER data: ", data);
      console.log("COVER secure_url: ", data.secure_url);
      setCoverURL(data.secure_url);
    } catch (err) {
      console.log(err);
    }
    console.log("coverURL from uploadCover:", coverURL);
    console.log("cove from uploadCover: ", cover);
  };

  const handleUpdate = async (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    // let profileUrl = profile;
    console.log("input Cover from andleUpdate: ", cover);
    console.log("coverURL from andleUpdate: ", coverURL);

    if (coverURL || cover) await uploadCover();
    // if(!coverURL) throw new Error("NO coverURL in HandleUpdate!");

    // coverURL = cover ? await uploadCover() : postUser.coverPic;
    console.log("HandleUpdate coverURL: ", coverURL);

    // @ts-ignore
    // profileUrl = profile ? await uploadProfile() : postUser.profilePic;
    try {
      const { data } = await axios.patch("/api/users/updateUser", {
        ...profileUser,
        coverPic: coverURL,
        // profilePic: profileUrl,
        postUser,
      });

      setOpenUpdate(false);
      console.log("HandleUpdate: ", data.data);
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
                <img src={cover && URL.createObjectURL(cover)} alt="" />
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
                <img src={profile && URL.createObjectURL(profile)} alt="" />
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
