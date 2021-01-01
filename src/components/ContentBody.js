import React from 'react'
import data from '../data/data'
import ValueSelect from './ValueSelect'

export default function ContentBody() {
        return (
            data.map((field, i) => {
                if (field.type === 'select') return (
                    <ValueSelect
                        name={field.name}
                        values={field.values}
                    /> 
                )
                }
            )
                
    )
}