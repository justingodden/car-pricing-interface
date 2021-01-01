import React from 'react'
import capitalize from '../utils/capitalize'

export default function ValueSelect({ name, values }) {
    return (
        <div className="fieldBlock">
            <h3>{ capitalize(name) }</h3>
            <form >
                <select className='form-select'name={ name } id={ name } onSelect={console.log("hi")}>
                    <option value="" disabled selected>---</option>
                    { values.map((value, i) => (
                        <option value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
