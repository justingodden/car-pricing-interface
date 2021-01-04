export default [
    {
        name: "regYear",
        type: 'range',
        values: [
            2010,
            2020
        ]
    },
    {
        name: "mileage",
        type: 'input',
        values: null,
    },
    {
        name: "fuelType",
        type: 'select',
        values: [
            "petrol",
            "diesel",
            "hybrid",
            "plug-in hybrid",
            "electric" 
        ]
    },
    {
        name: "transmission",
        type: 'select',
        values: [
            "manual",
            "automatic"
        ]
    },
    {
        name: "driveType",
        type: 'select',
        values: [
            "front wheel drive",
            "rear wheel drive",
            "four wheel drive"
        ]
    },
    {
        name: "previousOwners",
        type: 'range',
        values: [
            1,
            5
        ]
    }
]