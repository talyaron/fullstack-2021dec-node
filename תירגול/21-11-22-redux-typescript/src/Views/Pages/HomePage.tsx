import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectWeather } from '../../features/weather/weatherSlice'
import { getWeather } from '../../features/weather/weatherThunk'
import SearchForm from '../Components/SearchForm'

const HomePage = () => {
    const [searchCity, setSearchCity] = useState<string>("Jerusalem")
    const dispatch = useAppDispatch()
    const weather = useAppSelector(selectWeather)

    useEffect(() => {
        (async () => {
            dispatch(getWeather(searchCity))
        })()
    }, [searchCity, dispatch])

    return (
        <div className='homePage'>
            <SearchForm setSearchCity={setSearchCity} />
            {
                Object.keys(weather).length > 0
                    ?
                    <Link to="weather-more">
                        <h2>Weather in {searchCity}</h2>
                        <p>{Math.round(weather.main.temp)}°C</p>
                    </Link>
                    :
                    <h1>Loading...</h1>
            }
        </div>
    )
}

export default HomePage