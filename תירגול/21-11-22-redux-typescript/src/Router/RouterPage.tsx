import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WeatherMore from '../Views/Pages/WeatherMore'
import HomePage from '../Views/Pages/HomePage'
import Layout from './Layout'

const RouterPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="weather-more" element={<WeatherMore />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPage