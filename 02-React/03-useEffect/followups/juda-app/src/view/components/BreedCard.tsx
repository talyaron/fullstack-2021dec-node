import React from "react";


interface BreedProps {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;

}

const BreedCard = (props: BreedProps) => {
    const { breed, country, origin, coat, pattern } = props;

    return (
        <div className="breedCard">
            <h1>{breed}</h1>
            <h2>{country}</h2>
            <h2>{origin}</h2>
            <h2>{coat}</h2>
            <h2>{pattern}</h2>

        </div>


    )

}

export default BreedCard;