import React from 'react'
import makeModelSelect from '../data/makeModelSelect'

export default function MakeModelSelect() {
    return (
        <form>
            <h1>{ name }</h1>
            <select name={ name } id={ name }>
                { values.map((value, i) => (
                    <option value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
                    ))
                }
            </select>
        </form>
    )
}
