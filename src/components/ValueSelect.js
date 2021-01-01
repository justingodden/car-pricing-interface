import React from 'react'

export default function ValueSelect({ name, values }) {
    return (
        <form>
            <h1>{ name }</h1>
            <select name={ name } id={ name }>
                { values.map((value, i) => (
                    <option value={value}>{value}</option>
                    ))
                }
            </select>
        </form>
    )
}
