import React from 'react'

export default function ValueRange({ name, values }) {
    return (
        <form>
            <h1>{ name }</h1>
            <input
                type="range"
                name={ name }
                id={ name }
                min={ values[0] }
                max={ values[1] }
            />
        </form>
    )
}