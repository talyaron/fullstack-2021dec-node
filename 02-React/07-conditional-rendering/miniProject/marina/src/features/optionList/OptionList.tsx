import { Link } from "react-router-dom";
import { useState } from 'react'
import { FactInterface } from '../factsList/FactsList'
import { OptionCard } from '../optionList/OptionCard'
import { Elephant } from '../../components/Elephant'


// export const elephant: FactInterface[] = [
//   {
//     src: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KT2JHPPZCJECNIGX44RUBOTOMM.jpeg",
//     text: "If an Elephant dies, it’s family members take very good care of the bones",
//     id: Math.floor(Math.random() * 1000000),
//   },
//   {
//     src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/b4/65/jumbo-the-elephant-monument.jpg?w=1200&h=1200&s=1",
//     text: "The elephants never dies",
//     id: Math.floor(Math.random() * 1000000),
//   },
// ];

export const OptionList = () => {
  // const [elephants, setElephants] = useState<boolean>(false)
  return (
    <div>
      <h2 className="header">Choose the wright answer</h2>
      {/* <div className="flex">
        {elephant.map((element) => (
          <OptionCard key={element.id} option={element}/>
        ))}
      </div> */}
      <Elephant/>
    </div>
  );
}


