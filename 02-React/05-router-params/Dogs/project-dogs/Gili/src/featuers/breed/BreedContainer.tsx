import { useEffect, useState } from 'react';
import { getBreedImageRandom, Image } from './../breeds/getAllBreeds';
import { useParams } from 'react-router-dom';

const searchList = document.querySelector(".listData");

export const BreedContainer = () => {
	const { breed } = useParams();
	const [ breedImage, setBreedImage ] = useState<Image>({ breed: '', src: '' });
	const [ breedInfoUrl, setBreedInfoUrl ] = useState('');

	useEffect(
		() => {
			if (breed) getBreedImageRandom(breed).then((breedImage) => setBreedImage(breedImage));
			if (breed)
				findBreedOnWiki(breed).then((result) => {
					const url = displayResultURL(result.query.search[0]);
					setBreedInfoUrl(url);

				});
		},
		[ breed ]
	);

	return (
		<div className='breedContainer'>
				<h1>{breed}</h1>
				<img src={breedImage.src} alt={breedImage.breed} />
                 <a href={breedInfoUrl}><p>For more info click here</p></a>
		</div>
	);
};

async function findBreedOnWiki(breed: string) {
	const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${breed}`;
	const response = await fetch(endpoint);
	if (!response.ok) {
		throw Error(response.statusText);
	}
	const json = await response.json();
    console.log(json)
	return json;
}

function displayResultURL(result: any) {
	const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
	return url;
}