import { FC } from 'react';
import { Link } from 'react-router-dom';
import {Breeds} from './getData'

import '../styles/category.css';

interface CategoryProps{
  breed:Breeds;
}

const Category = ({breed}:CategoryProps) => {

  return (
    <Link to={`/breeds/`}>
    <div className="category">
      <h2> -- {breed.name} -- </h2>
      <img className="catImg" src={breed.img} alt="dog-img" />
    </div>
    </Link>

  );
};

export default Category ;