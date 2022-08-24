import '../styles/category.css'
const Category = (CategoryProps:any) => {

  return (
    <div className="category">
      <h2> -- {CategoryProps.title} -- </h2>
      <img className="catImg" src={CategoryProps.url} alt="dog-img" />
    </div>
    

  );
};

export default Category ;