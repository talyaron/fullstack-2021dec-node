import { Blog } from '../blog/Blog';
import { BlogState } from "../blog/blogSlice";


const blogs: BlogState[] = [
  {
    title: "barca",
    url: "https://photo.one.co.il/Image/GG/2,1/1630272.webp",
    id: "111;",
  },
  {
    title: "real",
    url: "https://upload.wikimedia.org/wikipedia/he/thumb/c/c7/Logo_Real_Madrid.svg/1200px-Logo_Real_Madrid.svg.png",
    id: "222",
  },
  {
    title: "Winter",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/800px-Atletico_Madrid_2017_logo.svg.png",
    id: "333",
  },
];

export const Modal = () => {
   
  return (
    <div>
      {blogs.map((blog: BlogState) => {
        return <Blog key={blog.id} blogItem={blog} />;
      })}
    </div>
  );
}


