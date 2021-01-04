import React, { useContext } from 'react'
import capitalize from '../utils/capitalize'
import { CarContext } from '../context/CarContext';

function range(start, stop) {
    let number_array = [];
    for (let i=start; i < (stop+1); i++) {
        number_array.push(i);
    }
    return number_array;
}

export default function ValueRange({ name, values }) {
    const [car, setCar] = useContext(CarContext)

    function handleChange(e) {
        let tempCar = car
        tempCar[name] = e.target.value
        setCar(tempCar)
    }

    
    const arr = range(values[0], values[1])
    return (
        <div className="fieldBlock">
            <h3>{ capitalize(name) }</h3>
            <form>
                <select className='form-select' onChange={handleChange}>
                    <option value="" disabled selected>---</option>
                    { arr.map((value, i) => (
                        <option value={value} key={i}>{value}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
