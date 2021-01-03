import React, { useState } from 'react'
import capitalize from '../utils/capitalize'


export default function ValueSelect({ name }) {
    const [input, setInput] = useState(null)

    return (
        <div className="fieldBlock">
            <h3>{ capitalize(name) + " " + input}</h3>
            <form>
                <input className='form-input' type="text" placeholder="---"
                onChange={e => setInput(e.target.value)}
                />
            </form>
        </div>
    )
}
