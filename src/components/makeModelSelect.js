import React, { useState } from 'react'
import carMakesModels from '../data/carMakesModels'
import capitalize from '../utils/capitalize'

const makes = []

carMakesModels.forEach(obj => makes.push(obj.make))

export default function MakeModelSelect() {
    const [make, setMake] = useState(null)
    const [models, setModels] = useState([])

    function handleMakeSelect(e) {
        setMake(e.target.value)
        setModels(carMakesModels.find(element => element.make === e.target.value).models) 
    }
    return (
        <>
            <div className="fieldBlock">
                <h3>Car Make</h3>
                <form >
                    <select className='form-select' onChange={handleMakeSelect}>
                        <option value="" disabled selected>---</option>
                        { makes.map((value, _) => (
                            <option value={value} key={value}>{capitalize(value)}</option>
                            ))
                        }
                    </select>
                </form>
            </div>

            <div className="fieldBlock">
                <h3>Car Model</h3>
                <form >
                    <select className='form-select' >
                        <option value="" disabled selected>---</option>
                        { make !== null && models.map((value, _) => (
                            <option value={value} key={ value }defaultValue="---">{capitalize(value)}</option>
                            ))
                        }
                    </select>
                </form>
            </div>
        </>
    )
}
