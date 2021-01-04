import React, { useContext } from 'react'
import capitalize from '../utils/capitalize'
import { CarContext } from '../context/CarContext';

export default function ValueSelect({ name, values }) {
    const [car, setCar] = useContext(CarContext)

    function handleChange(e) {
        let tempCar = car
        tempCar[name] = e.target.value
        setCar(tempCar)
    }

    return (
        <div className="fieldBlock">
            <h3>{ capitalize(name) + " "}</h3>
            <form >
                <select className='form-select' onChange={handleChange}>
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
