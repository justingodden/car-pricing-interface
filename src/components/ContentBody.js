import React from 'react'

const carMakes = ["audi", "bmw", "mercedes"]

export default function ContentBody() {
    


    return (
        <div>
            <form>
                <h3>Input something</h3>
                <input type="text"/>
            </form>



            <form>
                <h3>Car Make</h3>
                <select name="make" id="make">
                    {carMakes.map((make, i) => (
                        <option value={make}>{make}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
