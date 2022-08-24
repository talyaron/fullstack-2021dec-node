import { Link } from "react-router-dom";
export interface flower{
  id:string;
  name:string,
  
}

export const flowers:flower[] = [
  {id:'12256546334', name:'rose'},
  {id:'1223etr34',name:'lilly'},
  {id:'12233rt4',name:'lotus'},
  {id:'12rt2334',name:'underRose'},
]

const Rose = () => {
  return (
    <div>
      <h1>Rose</h1>
      <img src="https://www.lovingly.com/wp-content/uploads/2019/09/red-rose-on-black-background-649x1024.jpg
" alt="" />
      <p>A rose is either a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars.] They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.
      </p>
      <br />
      {flowers.map((flower)=>{
        return <Link to={`/rose/${flower.id}`}>underRose</Link>
      })}
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Rose;
