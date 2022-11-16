import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../app/hooks';
import { show } from '../../components/navbar/showNavbarSlice';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(show());
  }, [])
  

  const posts = [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet lorem id turpis lacinia, et.",
      img: "http://www.thechunkychef.com/wp-content/uploads/2017/02/Kentucky-Lemonade-Cocktail-4.jpg",
    },
    {
      id: "2",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet lorem id turpis lacinia, et.",
      img: "https://i0.wp.com/succulentcity.com/wp-content/uploads/2019/06/cactus-six-thorns-sc-1.jpg?resize=640%2C669&ssl=1",
    },
    {
      id: "3",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet lorem id turpis lacinia, et.",
      img: "https://thumbs.dreamstime.com/b/whole-banana-orange-lemon-apple-water-black-background-fresh-fruit-spray-179208969.jpg",
    },
    {
      id: "4",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet lorem id turpis lacinia, et.",
      img: "https://cdn.vox-cdn.com/thumbor/teCEQIxlj9RbCj6P_vlwMopAptQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11545893/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.jpg",
    },
  ];


  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <Link className="link" to={`/post/${post.id}`}>
                 <img src={post.img} alt="img" />
              </Link>
             
            </div>

            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read More...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


