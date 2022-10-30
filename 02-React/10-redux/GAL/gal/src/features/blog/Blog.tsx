import React from 'react'
import { BlogState, changeBlog, blogSelector } from "../blog/blogSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { textSelector } from '../text/textSlice';

interface BlogProps {
  blogItem: BlogState;
}

export const Blog: React.FC<BlogProps> = ({ blogItem }) => {
  const dispatch = useAppDispatch();
  const blog = useAppSelector(blogSelector);
  let text = useAppSelector(textSelector);
  return (
    <div className="blog" onClick={() => dispatch(changeBlog(blog))}>
      <img className="blog__img" src={blogItem.url} alt={blogItem.title} />
      <p>{text.length > 0 ? text : blogItem.title}</p>
    </div>
  );
};



