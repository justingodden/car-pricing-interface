import React from 'react'

export default function ValueSelect({ name, values }) {
    return (
        <form >
            <h1>{ name }</h1>
            <select name={ name } id={ name } onSelect={console.log("hi")}>
                <option value="" disabled selected>---</option>
                { values.map((value, i) => (
                    <option value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
                    ))
                }
            </select>
        </form>
    )
}
