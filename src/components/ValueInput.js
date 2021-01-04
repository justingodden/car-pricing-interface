import React, { useContext } from 'react'
import capitalize from '../utils/capitalize'
import { CarContext } from '../context/CarContext';


export default function ValueSelect({ name }) {
    const [car, setCar] = useContext(CarContext)

    function handleChange(e) {
        let tempCar = car
        tempCar.mileage = e.target.value
        setCar(tempCar)
    }

    return (
        <div key={ name } className="fieldBlock">
            <h3>{ capitalize(name) }</h3>
            <form>
                <input className='form-input' type="number" placeholder="---"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}
