import React from 'react'
import spinner from '../spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img className="rounded mx-auto d-block" src={spinner} alt="spinner" width="50px" />
        </div>
    )
}

export default Spinner
