import React from 'react'
import fieldNames from '../data/fieldNames'
import ValueSelect from './ValueSelect'
import ValueInput from './ValueInput'
import ValueRange from './ValueRange'

export default function ContentBody() {
        return (
            fieldNames.map((field, i) => {
                if (field.type === 'select') return (
                    <ValueSelect name={field.name} values={field.values} /> 
                )
                else if (field.type === 'input') return (
                    <ValueInput name={field.name} /> 
                )
                else return (
                    <ValueRange name={field.name} values={field.values} />
                )
            }
        )
    )
}