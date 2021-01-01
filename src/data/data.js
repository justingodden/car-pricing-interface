export default [
    {
        name: "make",
        type: 'select',
        values: [
            "audi",
            "bmw",
            "mercedes"
        ]
    },
    {
        name: "model",
        type: 'select',
        values: [
            "fiesta",
            "golf",
            "focus"
        ]
    },
    {
        name: "reg year",
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
        name: "fuel type",
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
        name: "drive type",
        type: 'select',
        values: [
            "front wheel drive",
            "rear wheel drive",
            "four wheel drive"
        ]
    },
    {
        name: "previous owners",
        type: 'range',
        values: [
            1,
            5
        ]
    }
]