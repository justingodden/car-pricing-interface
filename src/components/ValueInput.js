import React from 'react'

export default function ValueSelect({ name }) {
    return (
        <form>
            <h1>{ name }</h1>
            <input type="text" placeholder="---" name={ name } id={ name }/>
        </form>
    )
}
