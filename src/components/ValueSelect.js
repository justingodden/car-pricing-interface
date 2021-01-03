import React, { useState } from 'react'
import capitalize from '../utils/capitalize'

export default function ValueSelect({ name, values, onEventChange }) {

    
    return (
        <div className="fieldBlock">
            <h3>{ capitalize(name) + " "}</h3>
            <form >
                <select className='form-select' >
                    <option value="" disabled defaultValue>---</option>
                    { values.map((value, _) => (
                        <option value={value} key={ value }>{capitalize(value)}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
