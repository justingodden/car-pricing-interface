import React from 'react'
import capitalize from '../utils/capitalize'


export default function ValueSelect({ name }) {
    return (
        <div className="fieldBlock">
            <h3>{ capitalize(name) }</h3>
            <form >
                <input className='form-input' type="text" placeholder="---" name={ name } id={ name }/>
            </form>
        </div>
    )
}
