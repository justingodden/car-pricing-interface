import React, { useState } from 'react'
import capitalize from '../utils/capitalize'

function range(start, stop) {
    let number_array = [];
    for (let i=start; i < (stop+1); i++) {
        number_array.push(i);
    }
    return number_array;
}

export default function ValueRange({ name, values }) {
    const [input, setInput] = useState(null)
    const arr = range(values[0], values[1])
    return (
        <div className="fieldBlock">
            <h3>{ capitalize(name) + " " + input}</h3>
            <form>
                <select className='form-select' onChange={e => setInput(e.target.value)}>
                    <option value="" disabled defaultValue>---</option>
                    { arr.map((value, _) => (
                        <option value={value} key={value}>{value}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
