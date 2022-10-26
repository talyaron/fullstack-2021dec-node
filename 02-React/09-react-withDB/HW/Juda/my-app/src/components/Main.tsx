import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Link to="/manager"><button>Manager</button></Link>
            <Link to="/client"><button>Client</button></Link>
        </div>
    )
}

export default Main