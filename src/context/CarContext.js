import React, { useState, createContext } from 'react'


export const CarContext = createContext()

export const CarProvider = props => {
    const [car, setCar] = useState(
            {
                make: null,
                model: null,
                regYear: null,
                mileage: null,
                fuelType: null,
                transmission: null,
                driveType: null,
                previousOwners: null
            }
        )
    return(
        <CarContext.Provider value={[car ,setCar]}>
            { props.children }
        </CarContext.Provider>
    )
}