import React from 'react'

const BreedCard = (props:any) => {
   
    const {breedProps} = props;
    
  return (
    <div>
        <img src={breedProps} alt={breedProps} />
        </div>
  )
}

export default BreedCard