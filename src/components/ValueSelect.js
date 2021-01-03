import React, { useState } from 'react'
import capitalize from '../utils/capitalize'

export default function ValueSelect({ name, values }) {

    
    return (
        <div className="fieldBlock">
            <h3>{ capitalize(name) + " "}</h3>
            <form >
                <select className='form-select' >
                    <option value="" disabled selected>---</option>
                    { values.map((value, i) => (
                        <option value={value} key={ i }>{capitalize(value)}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
