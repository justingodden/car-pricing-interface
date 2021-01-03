import React, { useState } from 'react'
import ValueSelect from './ValueSelect'
import carMakesModels from '../data/carMakesModels'
import fieldNames from '../data/fieldNames'
import capitalize from '../utils/capitalize'

const makes = []

carMakesModels.forEach(obj => makes.push(obj.make))

let passData = undefined

export default function MakeModelSelect() {

    const [input, setInput] = useState(undefined)
    function onEventChange(input) {
        setInput(input)
    }
    return (
        <div className="fieldBlock">
            <ValueSelect name="Make" values={makes} onEventChange={onEventChange}/> 
        </div>
    )
}
