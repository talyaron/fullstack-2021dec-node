interface BreedImageProps {
    imgSrc: string
}

const BreedImage = ({ imgSrc }: BreedImageProps) => {
    return (
        <div className="breed-image">
            <img src={imgSrc} alt="Breed Image" />
        </div>
    );
}

export default BreedImage;