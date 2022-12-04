import { useAppSelector } from "../../app/hooks";
import avatar from "../../assets/avatar.jpg";
import { selectUser } from "../../userRedux/userSlice";

export interface Story {
  id: number;
  name: string;
  img?: string;
}

export const Stories = () => {
  const user = useAppSelector(selectUser);

  const currentUser = {
    name: "Marina Ziv",
    profilePic: avatar,
  };
  const stories = [
    {
      id: 1,
      name: "Someone",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYcWh2YdZqsHnhDQTil0KPm88gFTkFBS2bg&usqp=CAU",
    },
    {
      id: 2,
      name: "Someone",
      img: "https://i.pinimg.com/originals/00/5b/df/005bdf8be39f3d4085a5dacdca41df47.jpg",
    },
    {
      id: 3,
      name: "Someone",
      img: "https://www.divephotoguide.com/images/lightboximage/orig/1649590382.jpg",
    },
    {
      id: 4,
      name: "Someone",
      img: "https://static01.nyt.com/images/2022/11/21/opinion/18manjoo-image/18manjoo-image-superJumbo.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="img" />
        <span>{user.name}</span>
        <button>+</button>
      </div>

      {stories.map((story: Story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="img" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
