import { useAppSelector } from '../../app/hooks'
import { selectWeather } from '../../features/weather/weatherSlice'

const WeatherMore = () => {
    const weather = useAppSelector(selectWeather)

    return (
        <div>
            {
                Object.keys(weather).length > 0 ?
                    <div>
                        <div>
                            <label>City</label>
                            <p>
                                {weather.name}
                            </p>
                        </div>
                        <div>
                            {
                                weather.weather.map((i: any, index: any) =>
                                (
                                    <>
                                        <p>{i.main}</p>
                                        <img src={`./weater-icons/${i.icon}.png`} alt={i.main} />
                                    </>
                                )
                                )
                            }

                        </div>
                        <div>
                            <label>
                                Current Degree
                            </label>
                            <p>
                                {Math.round(weather.main.temp)}&deg;C
                            </p>
                        </div>
                        <div>
                            <label>Feels like</label>
                            <p>{Math.round(weather.main.feels_like)}&deg;C</p>
                        </div>
                        <div>
                            <label>
                                Humidity
                            </label>
                            <p>
                                {weather.main.humidity}%
                            </p>
                        </div>
                        <div>
                            <label>
                                Max Degree
                            </label>
                            <p>
                                {Math.round(weather.main.temp_max)}&deg;C
                            </p>
                        </div>
                        <div>
                            <label>
                                Min Degree
                            </label>
                            <p>
                                {Math.round(weather.main.temp_min)}&deg;C
                            </p>
                        </div>
                    </div>
                    :
                    null
            }

        </div>

    )
}

export default WeatherMore