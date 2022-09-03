import React from "react";

interface DudeCardProps {
    name: string;
    age:number;
    food:string;
}


const DudeCard = (props:DudeCardProps) => {
    const {name, age, food} = props;



return (
<div className="dude_card">
<h1>{name}</h1>
<h2>age:{age}</h2>
<h2>{food}</h2>


</div>


)

}

export default DudeCard;