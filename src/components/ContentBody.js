import React from 'react'
import data from '../data/data'

export default function ContentBody() {
        return (
            data.map((field, i) => {
                if (field.type === 'select') return (
                    <form>
                        <h1>{field.name}</h1>
                        <select name={field.name} id={field.name}>
                            {field.values.map((value, i) => (
                                <option value={value}>{value}</option>
                                ))
                                }
                        </select>
                    </form>
                    
                )
                }
            )
                
    )
}