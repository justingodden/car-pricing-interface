import React from 'react'

function range(start, stop) {
    let number_array = [];
    for (let i=start; i < (stop+1); i++) {
        number_array.push(i);
    }
    return number_array;
}

export default function ValueRange({ name, values }) {
    const arr = range(values[0], values[1])
    return (
        <form>
            <h1>{ name }</h1>
            <select name={ name } id={ name }>
                { arr.map((value, i) => (
                    <option value={value}>{value}</option>
                    ))
                }
            </select>
        </form>
    )
}
