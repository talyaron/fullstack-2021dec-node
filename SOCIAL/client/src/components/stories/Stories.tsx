import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUser } from "../../userRedux/userSlice";
import { StoryInterface } from "../../models/postInterface";
import axios from "axios";
import { selectPost, selectPosts, selectStories, updatePosts, updateStories } from "../posts/postsSlice";

export const Stories = () => {
  const user = useAppSelector(selectUser);
  // const stories = useAppSelector(selectStories);
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  const stories = [
    {
      id: 1,
      name: "Someone",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpptsGDBtm3zOCyJ8_6lzndxsFuNCVlGtTB5yjez96_CbBFGgC",
    },
    {
      id: 2,
      name: "Someone",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaKY87mrCCZ8yy0h1CNn0ZbOFkY2jJJJ3wg&usqp=CAU"
    },
    {
      id: 3,
      name: "Someone",
      img: "https://www.divephotoguide.com/images/lightboximage/orig/1649590382.jpg",
    },
  ];

  // useEffect(() => {
  //   const getStories = async () => {
  //     try {
  //       const { data } = await axios.get("/api/posts");
  //       dispatch(updateStories(data.data));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getStories();
  //   console.log("from getStories:", stories);
  // }, []);


  return (
    <div className="stories">
      <div className="story">
        <img src={user.profilePic} alt="" />
        <span>{user.name}</span>
        <button>+</button>
      </div>

      {stories.map((story: StoryInterface) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
