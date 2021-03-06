export const CarbonData = [
    {
        "id": "commute_method",
        "question": "To start, how do you get around?",
        "icon": "car",
        "multiple": true,
        "options": [
            {
                "type": "text",
                "value": "Car",
                "score": 4.6
            },
            {
                "type": "text",
                "value": "Public transport",
                "score": 3.5
            },
            {
                "type": "text",
                "value": "Ride share",
                "score": 2.2
            },
            {
                "type": "text",
                "value": "Bike / walk",
                "score": 0
            }
        ],
        "next": "1"
    },
    {
        "condition": "prevSelections[0] == 'Car'",
        "question": "Is your car electric?",
        "icon": "car_electric",
        "multiple": false,
        "options": [
            {
                "type": "text",
                "value": "Yes",
                "score": -3.1
            },
            {
                "type": "text",
                "value": "No",
                "score": 0
            }
        ]
    },
    {
        "question": "Where do you usually go?",
        "icon": "pin",
        "multiple": false,
        "options": [
            {
                "type": "text",
                "value": "Not far",
                "aside": "~50 miles a week",
                "score": -2.5
            },
            {
                "type": "text",
                "value": "Commute to work",
                "aside": "~200 miles a week",
                "score": 0
            },
            {
                "type": "text",
                "value": "I get around",
                "aside": "~400 miles a week",
                "score": 3.4
            },
            {
                "type": "input",
                "value": "Other",
                "aside": "miles a week",
                "score": "parseInt(value)*0.02"
            }
        ]
    },
    {
        "question": "How often do you fly?",
        "icon": "airplane",
        "multiple": false,
        "isSubScore": true,
        "options": [
            {
                "type": "input",
                "value": "Type your answer here...",
                "aside": "times a year",
                "score" : "value"
            }
        ]
    },
    {
        "condition": "parseInt(prevSelections[0]) > 0",
        "question": "Alright, how far do you usually fly?",
        "icon": "airplane",
        "multiple": false,
        "options": [
            {
                "type": "text",
                "value": "Across the world",
                "aside": "2500+ miles",
                "score": "prevSubScore*1.6"
            },
            {
                "type": "text",
                "value": "Across the country",
                "aside": "1000-2500 miles",
                "score": "prevSubScore*0.8"
            },
            {
                "type": "text",
                "value": "Not far",
                "aside": "Less than 1000 miles",
                "score": "prevSubScore*0.3"
            }
        ]
    },
    {
        "question": "What's your diet like?",
        "icon": "diet_type",
        "multiple": false,
        "subtext": "Yes, food has a carbon footprint too",
        "options": [
            {
                "type": "text",
                "value": "Vegetarian",
                "score": +1.7
            },
            {
                "type": "text",
                "value": "Vegan",
                "score": +1.5
            },
            {
                "type": "text",
                "value": "I eat it all",
                "score": +2.9
            }
        ]
    },
    {
        "question": "Where do you live? ",
        "icon": "live",
        "multiple": false,
        "subtext": "I swear we aren't creepy",
         "isSubScore": true,
        "options": [
            {
                "type": "text",
                "value": "Apartment",
                "aside": "0-2 bedrooms",
                "score": 4.1
            },
            {
                "type": "text",
                "value": "House",
                "aside": "3-5 bedrooms",
                "score": 8.2
            },
            {
                "type": "text",
                "value": "Big house",
                "aside": "5+ bedrooms",
                "score": 12.3
            }
        ]
    },
    {
        "question": "Got it, how many people live there?",
        "icon": "house-building",
        "multiple": false,
        "subtext": "(not including fluffy)",
        "options": [
            {
                "type": "input",
                "value": "Type your answer here...",
                "aside": "people",
                "score": "prevSubScore/value"
            }
        ]
    },
    {
        "question": "How often do you use heating and cooling?",
        "icon": "heating_freq",
        "multiple": false,
        "options": [
            {
                "type": "text",
                "value": "Most days",
                "score": +3.5
            },
            {
                "type": "text",
                "value": "Only when it's super hot or cold",
                "score": 0
            },
            {
                "type": "text",
                "value": "Never",
                "score": -2.3
            }
        ]
    },
    {
        "question": "About how much stuff do you order online?",
        "icon": "stuff_count",
        "multiple": false,
        "isSubScore": true,
        "options": [
            {
                "type": "text",
                "value": "All my stuff",
                "aside": "30+ items per month",
                "score": 2.2
            },
            {
                "type": "text",
                "value": "Some stuff",
                "aside": "10-20 items",
                "score": 1.1
            },
            {
                "type": "text",
                "value": "Barely any stuff",
                "aside": "less than 10 items",
                "score": 0.3
            },
            {
                "type": "input",
                "value": "Other",
                "aside": "items per month",
                "score": "value*0.05"
            }
        ]
    },
    {
        "question": "When do you get new stuff?",
        "icon": "new_stuff",
        "multiple": false,
        "isSubScore": true,
        "options": [
            {
                "type": "text",
                "value": "I'm always getting new stuff",
                "score": "prevSubScore*2",
            },
            {
                "type": "text",
                "value": "I sometimes get new stuff",
                "score": "prevSubScore*1",
            },
            {
                "type": "text",
                "value": "I wait until my old stuff breaks",
                "score": "prevSubScore*0.5",
            }
        ]
    },
    {
        "question": "What kind of stuff?",
        "icon": "stuff_type",
        "multiple": false,
        "options": [
            {
                "type": "text",
                "value": "Big stuff",
                "aside": "like furniture and TVs",
                "score": "prevSubScore*3"
            },
            {
                "type": "text",
                "value": "Medium stuff",
                "aside": "like clothes and books",
                "score": "prevSubScore*1.5"
            },
            {
                "type": "text",
                "value": "Small stuff",
                "aside": "like pens and cards",
                "score": "prevSubScore*1"
            },
            {
                "type": "text",
                "value": "All kinds of stuff",
                "score": "prevSubScore*1.5"
            }
        ]
    }
]
