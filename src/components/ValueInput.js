import React, { useState } from 'react'
import capitalize from '../utils/capitalize'


export default function ValueSelect({ name }) {
    const [input, setInput] = useState([])

    const handleChange = e => {
        setInput(e.target.value)
        console.log(input)
    }

    return (
        <div key={ name } className="fieldBlock">
            <h3>{ capitalize(name) }</h3>
            <form>
                <input className='form-input' type="number" placeholder="---"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}
