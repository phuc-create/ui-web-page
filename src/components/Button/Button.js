import React from 'react'
// eslint-disable-next-line react/prop-types
const Button = ({ value }) => {
    return (
        <button className="button__primary">
            {value}
        </button>
    )
}

export default Button
