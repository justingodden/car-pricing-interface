import React from 'react'
import capitalize from '../utils/capitalize'

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
        <div className="fieldBlock">
            <h3>{ capitalize(name) }</h3>
            <form>
                <select className='form-select' name={ name } id={ name }>
                    <option value="" disabled selected>---</option>
                    { arr.map((value, i) => (
                        <option value={value}>{value}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
