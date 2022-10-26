import axios from 'axios'
import React from 'react'

const Client = () => {

    const allItems = []
    async function getAllItems() {
        await axios.get("api/items/getAll")


    }


    return (
        <div>


            Client



        </div>
    )
}

export default Client