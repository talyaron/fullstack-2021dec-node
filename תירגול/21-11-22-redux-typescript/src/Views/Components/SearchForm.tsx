import { FC } from 'react'

interface SearchFormProps {
    setSearchCity: Function
}

const SearchForm: FC<SearchFormProps> = ({ setSearchCity }) => {

    const hendleGetCity = (evt: any) => {
        evt.preventDefault()

        const city = evt.target.elements.city.value
        setSearchCity(city)
    }

    return (
        <form onSubmit={hendleGetCity}>
            <input type="text" name="city" placeholder='Enter city' />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm