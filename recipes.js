// ==================== RECIPE DATA ====================

const recipes = [
    // INDIAN VEGETARIAN
    {
        id: 1,
        name: "Palak Paneer",
        nameHindi: "पालक पनीर",
        image: "./images/palakpaneer.png", 
        diet: "veg",
        cuisine: "indian",
        mealType: "lunch",
        difficulty: "medium",
        cookTime: "30 mins",
        rating: 4.5,
        calories: 350,
        costCategory: "budget",
        costRange: "₹50-100",
        tags: ["Lunch", "Dinner", "Healthy"],
        ingredients: [
            { name: "Spinach", amount: "500g", cost: "low" },
            { name: "Paneer", amount: "250g", cost: "medium" },
            { name: "Onion", amount: "2 medium", cost: "low" },
            { name: "Tomato", amount: "2 medium", cost: "low" },
            { name: "Cream", amount: "3 tbsp", cost: "medium" }
        ],
        nutrition: {
            protein: "15g",
            carbs: "20g",
            fat: "25g"
        },
        instructions: [
           {title: "Blanch the spinach",
            description: "Bring a pot of water to boil. Add spinach and cook for 2 minutes. Immediately transfer to ice water to retain green color.",
            time: "2"}, // minutes - shows timer button
        {
            title: "Make spinach paste",
            description: "Blend blanched spinach with green chili and ginger into a smooth paste. Set aside."
        },
        {
            title: "Prepare the base",
            description: "Heat oil in a pan, add cumin seeds and let them splutter. Add chopped onions and sauté until golden brown.",
            time: "5"
        },
        {
            title: "Cook the gravy",
            description: "Add ginger-garlic paste, cook for 2 minutes. Add tomatoes and cook until soft. Add spinach puree and spices.",
            time: "10"
        },
        {
            title: "Add paneer and finish",
            description: "Add cubed paneer and cream. Simmer for 5 minutes. Garnish with cream swirl and serve hot.",
            time: "5"
        }
    ],
    tips: [
        "Use fresh spinach for vibrant green color",
        "Don't overcook paneer - it becomes hard",
        "Add a pinch of sugar to balance acidity",
        "Kasuri methi adds restaurant-style flavor"
    ]
    },
    {
        id: 2,
        name: "Dal Makhani",
        nameHindi: "दाल मखनी",
        image: "./images/dalmakhani.png",
        diet: "veg",
        cuisine: "indian",
        mealType: "dinner",
        difficulty: "medium",
        cookTime: "60 mins",
        rating: 4.8,
        calories: 280,
        costCategory: "budget",
        costRange: "₹40-80",
        tags: ["Dinner", "Comfort Food"],
        ingredients: [
            { name: "Black Lentils", amount: "1 cup", cost: "low" },
            { name: "Kidney Beans", amount: "1/4 cup", cost: "low" },
            { name: "Butter", amount: "4 tbsp", cost: "medium" },
            { name: "Cream", amount: "1/2 cup", cost: "medium" }
        ],
        nutrition: {
            protein: "18g",
            carbs: "35g",
            fat: "12g"
        },
        instructions: [
    {
        title: "Soak the lentils",
        description: "Wash whole black urad dal and rajma thoroughly. Soak them in water overnight or for at least 8 hours.",
        time: "480"
    },
    {
        title: "Pressure cook dal",
        description: "Drain soaked lentils and pressure cook with water and a pinch of salt for 6-7 whistles until soft and mushy.",
        time: "20"
    },
    {
        title: "Prepare the base",
        description: "Heat butter in a pan, add cumin seeds and let them splutter. Add finely chopped onions and sauté until golden brown.",
        time: "5"
    },
    {
        title: "Cook tomato gravy",
        description: "Add ginger-garlic paste and cook for 2 minutes. Add tomato puree, red chili powder, and cook until oil separates.",
        time: "10"
    },
    {
        title: "Simmer the dal",
        description: "Add cooked dal to the gravy, mix well and simmer on low heat. Stir occasionally and add water if needed for consistency.",
        time: "30"
    },
    {
        title: "Finish with cream and butter",
        description: "Add fresh cream and a dollop of butter. Simmer for 5-10 minutes for rich flavor. Garnish with cream and coriander.",
        time: "10"
    }
],

tips: [
    "Slow cooking gives authentic creamy texture",
    "Use butter generously for restaurant-style taste",
    "Mash some dal while cooking for thicker consistency",
    "Overnight soaking helps faster and better cooking",
    "Add a smoky flavor using charcoal (dhungar method) for authenticity"
]

    },
    {
        id: 3,
        name: "Masala Dosa",
        nameHindi: "मसाला डोसा",
        image: "./images/masaladosa.png",
        diet: "veg",
        cuisine: "indian",
        mealType: "breakfast",
        difficulty: "hard",
        cookTime: "45 mins",
        rating: 4.7,
        calories: 300,
        costCategory: "budget",
        costRange: "₹30-60",
        tags: ["Breakfast", "South Indian"],
        ingredients: [
            { name: "Rice", amount: "2 cups", cost: "low" },
            { name: "Urad Dal", amount: "1/2 cup", cost: "low" },
            { name: "Potato", amount: "4 large", cost: "low" }
        ],
        nutrition: {
            protein: "8g",
            carbs: "50g",
            fat: "5g"
        },
        instructions: [
    {
        title: "Prepare dosa batter",
        description: "Soak rice and urad dal separately for 6-8 hours. Grind to a smooth batter, mix well, and ferment overnight until fluffy.",
        time: "480"
    },
    {
        title: "Make potato filling",
        description: "Boil potatoes, peel and mash them. Heat oil, add mustard seeds, curry leaves, onions, green chilies and sauté. Add turmeric and mashed potatoes. Mix well.",
        time: "15"
    },
    {
        title: "Heat the tawa",
        description: "Heat a flat non-stick or cast iron tawa. Lightly grease it and ensure it's hot before pouring batter.",
        time: "2"
    },
    {
        title: "Spread the dosa",
        description: "Pour a ladle of batter and spread it in a circular motion to make a thin dosa. Drizzle oil or butter around edges.",
        time: "3"
    },
    {
        title: "Add filling and cook",
        description: "Place a portion of potato masala in the center. Cook until dosa turns golden and crispy.",
        time: "4"
    },
    {
        title: "Fold and serve",
        description: "Fold the dosa and serve hot with coconut chutney and sambar.",
        time: "1"
    }
],

tips: [
    "Fermentation is key for crispy and tasty dosa",
    "Use a well-seasoned tawa to prevent sticking",
    "Spread batter quickly for thin and crispy texture",
    "Add a little sugar in batter for better browning",
    "Serve immediately for best taste and crunch"
]

    },
    {
        id: 4,
        name: "Chole Bhature",
        nameHindi: "छोले भटूरे",
        image: "./images/cholebhature.png",
        diet: "veg",
        cuisine: "indian",
        mealType: "lunch",
        difficulty: "medium",
        cookTime: "50 mins",
        rating: 4.6,
        calories: 450,
        costCategory: "budget",
        costRange: "₹60-120",
        tags: ["Lunch", "Street Food"],
        ingredients: [
            { name: "Chickpeas", amount: "2 cups", cost: "low" },
            { name: "Flour", amount: "2 cups", cost: "low" },
            { name: "Yogurt", amount: "1/4 cup", cost: "low" }
        ],
        nutrition: {
            protein: "12g",
            carbs: "60g",
            fat: "18g"
        },
        instructions: [
    {
        title: "Soak and cook chickpeas",
        description: "Soak chickpeas overnight. Pressure cook with salt until soft.",
        time: "30"
    },
    {
        title: "Prepare masala",
        description: "Heat oil, add cumin seeds, onions, and sauté until golden. Add ginger-garlic paste.",
        time: "5"
    },
    {
        title: "Cook gravy",
        description: "Add tomato puree, spices, and cook until oil separates.",
        time: "10"
    },
    {
        title: "Add chickpeas",
        description: "Add boiled chickpeas and simmer for rich flavor.",
        time: "15"
    },
    {
        title: "Prepare bhature dough",
        description: "Mix flour, curd, salt, and knead into soft dough. Rest for 2 hours.",
        time: "120"
    },
    {
        title: "Fry bhature",
        description: "Roll dough and deep fry until puffed and golden.",
        time: "10"
    }
],

tips: [
    "Use tea bag while boiling chole for dark color",
    "Rest dough well for fluffy bhature",
    "Add amchur or anardana for tangy flavor",
    "Fry bhature in hot oil for best puff"
]

    },

    // CONTINENTAL VEGETARIAN
    {
        id: 5,
        name: "Pasta Primavera",
        nameHindi: "पास्ता प्रिमावेरा",
        image: "./images/pastaprimavera.png",
        diet: "veg",
        cuisine: "continental",
        mealType: "lunch",
        difficulty: "easy",
        cookTime: "25 mins",
        rating: 4.4,
        calories: 380,
        costCategory: "moderate",
        costRange: "₹100-150",
        tags: ["Lunch", "Italian", "Quick"],
        ingredients: [
            { name: "Pasta", amount: "250g", cost: "medium" },
            { name: "Bell Peppers", amount: "2", cost: "medium" },
            { name: "Zucchini", amount: "1", cost: "medium" },
            { name: "Parmesan", amount: "50g", cost: "high" }
        ],
        nutrition: {
            protein: "12g",
            carbs: "55g",
            fat: "15g"
        },
        instructions: [
    {
        title: "Boil pasta",
        description: "Cook pasta in salted water until al dente. Drain and set aside.",
        time: "10"
    },
    {
        title: "Sauté vegetables",
        description: "Heat olive oil, add garlic and sauté vegetables like broccoli, carrots, and capsicum.",
        time: "8"
    },
    {
        title: "Prepare sauce",
        description: "Add cream or light sauce, salt, pepper, and mix well.",
        time: "5"
    },
    {
        title: "Combine pasta",
        description: "Add cooked pasta and toss with vegetables and sauce.",
        time: "5"
    },
    {
        title: "Serve",
        description: "Garnish with parmesan cheese and herbs.",
        time: "2"
    }
],

tips: [
    "Use fresh seasonal vegetables",
    "Do not overcook pasta",
    "Add pasta water for better sauce texture",
    "Use olive oil for authentic taste"
]

    },
    {
        id: 6,
        name: "Mushroom Risotto",
        nameHindi: "मशरूम रिसोट्टो",
        image: "./images/mushroomrisotto.png",
        diet: "veg",
        cuisine: "continental",
        mealType: "dinner",
        difficulty: "hard",
        cookTime: "40 mins",
        rating: 4.7,
        calories: 420,
        costCategory: "premium",
        costRange: "₹200-300",
        tags: ["Dinner", "Italian", "Gourmet"],
        ingredients: [
            { name: "Arborio Rice", amount: "300g", cost: "high" },
            { name: "Mushrooms", amount: "300g", cost: "medium" },
            { name: "Parmesan", amount: "100g", cost: "high" },
            { name: "White Wine", amount: "100ml", cost: "high" }
        ],
        nutrition: {
            protein: "10g",
            carbs: "65g",
            fat: "18g"
        },
        instructions: [
    {
        title: "Prepare broth",
        description: "Heat vegetable broth and keep it warm.",
        time: "5"
    },
    {
        title: "Sauté mushrooms",
        description: "Cook mushrooms in butter until soft and set aside.",
        time: "5"
    },
    {
        title: "Cook rice",
        description: "In the same pan, sauté onions and garlic, then add arborio rice and toast lightly.",
        time: "5"
    },
    {
        title: "Add broth gradually",
        description: "Add warm broth one ladle at a time, stirring continuously until absorbed.",
        time: "20"
    },
    {
        title: "Finish risotto",
        description: "Add mushrooms, parmesan, butter, and mix until creamy.",
        time: "5"
    }
],

tips: [
    "Stir continuously for creamy texture",
    "Use warm broth only",
    "Do not rush cooking process",
    "Use arborio rice for best results"
]

    },

    // INDIAN NON-VEGETARIAN
    {
        id: 7,
        name: "Butter Chicken",
        nameHindi: "बटर चिकन",
        image: "./images/butterchicken.png",
        diet: "nonveg",
        cuisine: "indian",
        mealType: "dinner",
        difficulty: "medium",
        cookTime: "45 mins",
        rating: 4.9,
        calories: 480,
        costCategory: "moderate",
        costRange: "₹150-200",
        tags: ["Dinner", "Popular", "Creamy"],
        ingredients: [
            { name: "Chicken", amount: "500g", cost: "medium" },
            { name: "Butter", amount: "100g", cost: "medium" },
            { name: "Cream", amount: "200ml", cost: "medium" },
            { name: "Tomato Puree", amount: "300g", cost: "low" }
        ],
        nutrition: {
            protein: "35g",
            carbs: "15g",
            fat: "32g"
        },
        instructions: [
    {
        title: "Marinate chicken",
        description: "Marinate chicken with curd, spices, and ginger-garlic paste. Rest for at least 1 hour.",
        time: "60"
    },
    {
        title: "Cook chicken",
        description: "Grill or pan-fry marinated chicken until cooked.",
        time: "15"
    },
    {
        title: "Prepare gravy",
        description: "Heat butter, sauté onions, garlic, and tomato puree with spices.",
        time: "10"
    },
    {
        title: "Blend gravy",
        description: "Blend cooked mixture into a smooth gravy.",
        time: "5"
    },
    {
        title: "Combine chicken",
        description: "Add cooked chicken to gravy and simmer.",
        time: "10"
    },
    {
        title: "Finish with cream",
        description: "Add cream and butter, cook for few minutes and serve.",
        time: "5"
    }
],

tips: [
    "Use butter generously for authentic taste",
    "Grill chicken for smoky flavor",
    "Balance spices with cream",
    "Use cashew paste for richness"
]

    },
    {
        id: 8,
        name: "Tandoori Chicken",
        nameHindi: "तंदूरी चिकन",
        image: "./images/tandoorichicken.png",
        diet: "nonveg",
        cuisine: "indian",
        mealType: "dinner",
        difficulty: "medium",
        cookTime: "50 mins",
        rating: 4.7,
        calories: 320,
        costCategory: "moderate",
        costRange: "₹120-180",
        tags: ["Dinner", "Grilled", "Healthy"],
        ingredients: [
            { name: "Chicken", amount: "500g", cost: "medium" },
            { name: "Yogurt", amount: "200g", cost: "low" },
            { name: "Tandoori Masala", amount: "3 tbsp", cost: "low" }
        ],
        nutrition: {
            protein: "40g",
            carbs: "8g",
            fat: "15g"
        },
        instructions: [
    {
        title: "Marinate chicken",
        description: "Mix curd, ginger-garlic paste, spices, lemon juice, and oil. Coat chicken well and marinate for at least 4 hours.",
        time: "240"
    },
    {
        title: "Preheat oven/tandoor",
        description: "Preheat oven to 200°C or prepare tandoor/grill.",
        time: "10"
    },
    {
        title: "Cook chicken",
        description: "Place marinated chicken on tray or grill and cook until tender and slightly charred.",
        time: "30"
    },
    {
        title: "Baste and finish",
        description: "Brush with butter while cooking for extra flavor and moisture.",
        time: "5"
    },
    {
        title: "Serve",
        description: "Serve hot with onion rings and mint chutney.",
        time: "2"
    }
],

tips: [
    "Marinate overnight for best flavor",
    "Use mustard oil for authentic taste",
    "Do not overcook to keep chicken juicy",
    "Add smoky flavor using charcoal method"
]

    },

    // CONTINENTAL NON-VEGETARIAN
    {
        id: 9,
        name: "Grilled Salmon",
        nameHindi: "ग्रिल्ड सैल्मन",
        image: "./images/grilledsalmon.png",
        diet: "nonveg",
        cuisine: "continental",
        mealType: "dinner",
        difficulty: "easy",
        cookTime: "20 mins",
        rating: 4.8,
        calories: 380,
        costCategory: "premium",
        costRange: "₹400-600",
        tags: ["Dinner", "Seafood", "Healthy"],
        ingredients: [
            { name: "Salmon Fillet", amount: "2 pieces", cost: "high" },
            { name: "Lemon", amount: "1", cost: "low" },
            { name: "Herbs", amount: "mixed", cost: "medium" }
        ],
        nutrition: {
            protein: "42g",
            carbs: "0g",
            fat: "25g"
        },
        instructions: [
    {
        title: "Prepare marinade",
        description: "Mix olive oil, lemon juice, garlic, salt, and pepper.",
        time: "5"
    },
    {
        title: "Marinate salmon",
        description: "Coat salmon fillets and let rest for 15-20 minutes.",
        time: "20"
    },
    {
        title: "Preheat grill",
        description: "Heat grill or pan on medium-high heat.",
        time: "5"
    },
    {
        title: "Grill salmon",
        description: "Cook salmon for 4-5 minutes on each side until flaky.",
        time: "10"
    },
    {
        title: "Serve",
        description: "Serve hot with veggies or lemon wedges.",
        time: "2"
    }
],

tips: [
    "Do not overcook salmon",
    "Use skin-on fillet for better texture",
    "Let fish rest before serving",
    "Use fresh lemon for best flavor"
]

    },
    {
        id: 10,
        name: "Chicken Steak",
        nameHindi: "चिकन स्टेक",
        image: "./images/chickensteak.png",
        diet: "nonveg",
        cuisine: "continental",
        mealType: "dinner",
        difficulty: "medium",
        cookTime: "30 mins",
        rating: 4.6,
        calories: 420,
        costCategory: "premium",
        costRange: "₹250-350",
        tags: ["Dinner", "Grilled"],
        ingredients: [
            { name: "Chicken Breast", amount: "2 pieces", cost: "medium" },
            { name: "Butter", amount: "50g", cost: "medium" },
            { name: "Garlic", amount: "5 cloves", cost: "low" }
        ],
        nutrition: {
            protein: "45g",
            carbs: "5g",
            fat: "22g"
        },
        instructions: [
    {
        title: "Prepare chicken",
        description: "Flatten chicken breast and season with salt, pepper, and herbs.",
        time: "5"
    },
    {
        title: "Marinate",
        description: "Add olive oil, garlic, and lemon juice. Rest for 20-30 minutes.",
        time: "30"
    },
    {
        title: "Cook steak",
        description: "Heat pan and cook chicken on medium heat until golden and cooked through.",
        time: "15"
    },
    {
        title: "Prepare sauce (optional)",
        description: "Make pepper or mushroom sauce for serving.",
        time: "10"
    },
    {
        title: "Serve",
        description: "Serve hot with veggies or mashed potatoes.",
        time: "2"
    }
],

tips: [
    "Do not overcook chicken breast",
    "Rest steak before cutting",
    "Use butter for extra flavor",
    "Cook on medium heat for even cooking"
]

    },

    // More recipes for variety
    {
        id: 11,
        name: "Poha",
        nameHindi: "पोहा",
        image: "./images/poha.png",
        diet: "veg",
        cuisine: "indian",
        mealType: "breakfast",
        difficulty: "easy",
        cookTime: "15 mins",
        rating: 4.3,
        calories: 220,
        costCategory: "budget",
        costRange: "₹20-40",
        tags: ["Breakfast", "Quick", "Light"],
        ingredients: [
            { name: "Flattened Rice", amount: "2 cups", cost: "low" },
            { name: "Peanuts", amount: "2 tbsp", cost: "low" },
            { name: "Potato", amount: "1 small", cost: "low" }
        ],
        nutrition: {
            protein: "6g",
            carbs: "40g",
            fat: "8g"
        },
        instructions: [
    {
        title: "Rinse poha",
        description: "Wash poha lightly and drain excess water.",
        time: "2"
    },
    {
        title: "Prepare tempering",
        description: "Heat oil, add mustard seeds, curry leaves, peanuts, and sauté.",
        time: "5"
    },
    {
        title: "Add onions and spices",
        description: "Add chopped onions, green chilies, turmeric, and cook until soft.",
        time: "5"
    },
    {
        title: "Mix poha",
        description: "Add soaked poha, salt, and mix gently.",
        time: "3"
    },
    {
        title: "Finish and serve",
        description: "Add lemon juice, coriander, and serve hot.",
        time: "2"
    }
],

tips: [
    "Do not over-soak poha",
    "Use thin poha for best texture",
    "Add sugar for slight sweetness",
    "Garnish with sev for crunch"
]

    },
    {
        id: 12,
        name: "Greek Salad",
        nameHindi: "ग्रीक सलाद",
        image: "./images/greeksalad.png",
        diet: "veg",
        cuisine: "continental",
        mealType: "lunch",
        difficulty: "easy",
        cookTime: "10 mins",
        rating: 4.2,
        calories: 180,
        costCategory: "moderate",
        costRange: "₹80-120",
        tags: ["Lunch", "Healthy", "Salad"],
        ingredients: [
            { name: "Cucumber", amount: "1", cost: "low" },
            { name: "Tomato", amount: "2", cost: "low" },
            { name: "Feta Cheese", amount: "100g", cost: "high" },
            { name: "Olives", amount: "50g", cost: "medium" }
        ],
        nutrition: {
            protein: "8g",
            carbs: "12g",
            fat: "14g"
        },
        instructions: [
    {
        title: "Chop vegetables",
        description: "Cut tomatoes, cucumber, onion, and capsicum into chunks.",
        time: "5"
    },
    {
        title: "Prepare dressing",
        description: "Mix olive oil, lemon juice, salt, and oregano.",
        time: "3"
    },
    {
        title: "Combine salad",
        description: "Add vegetables and olives into a bowl and toss with dressing.",
        time: "3"
    },
    {
        title: "Add feta cheese",
        description: "Place feta cheese on top and drizzle olive oil.",
        time: "2"
    },
    {
        title: "Serve",
        description: "Serve fresh and chilled.",
        time: "1"
    }
],

tips: [
    "Use fresh vegetables for best taste",
    "Do not overmix after adding feta",
    "Use extra virgin olive oil",
    "Chill before serving for refreshing taste"
]

    },
    
    {
    id: 13,
    name: "Shahi Paneer",
    nameHindi: "शाही पनीर",
    image: "./images/shahipaneer.png",
    diet: "veg",
    cuisine: "indian",
    mealType: "lunch",
    difficulty: "medium",
    cookTime: "35 mins",
    rating: 4.7,
    calories: 350,
    costCategory: "moderate",
    costRange: "₹120-180",
    tags: ["Lunch", "Rich", "North Indian", "Curry"],
    ingredients: [
        { name: "Paneer", amount: "200g", cost: "medium" },
        { name: "Onion", amount: "2", cost: "low" },
        { name: "Tomato", amount: "3", cost: "low" },
        { name: "Cream", amount: "100ml", cost: "medium" },
        { name: "Cashew Nuts", amount: "50g", cost: "high" },
        { name: "Butter", amount: "2 tbsp", cost: "medium" },
        { name: "Ginger-Garlic Paste", amount: "1 tbsp", cost: "low" },
        { name: "Spices", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "14g",
        carbs: "18g",
        fat: "26g"
    },
    instructions: [
    {
        title: "Prepare cashew paste",
        description: "Soak cashews in warm water and grind into a smooth paste.",
        time: "10"
    },
    {
        title: "Cook base",
        description: "Heat butter, sauté onions, ginger-garlic paste until golden.",
        time: "5"
    },
    {
        title: "Add tomatoes",
        description: "Add tomato puree and cook until oil separates.",
        time: "10"
    },
    {
        title: "Make gravy",
        description: "Add cashew paste, cream, and spices. Cook until rich and creamy.",
        time: "10"
    },
    {
        title: "Add paneer",
        description: "Add paneer cubes and simmer for few minutes.",
        time: "5"
    }
],

tips: [
    "Use fresh cream for rich texture",
    "Do not overcook paneer",
    "Add a little sugar for balance",
    "Cashew paste gives royal flavor"
]

    },

    {
    id: 14,
    name: "Veg Au Gratin",
    nameHindi: "वेज औ ग्रेटिन",
    image: "./images/vegaugratin.png",
    diet: "veg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "40 mins",
    rating: 4.5,
    calories: 320,
    costCategory: "moderate",
    costRange: "₹120-200",
    tags: ["Dinner", "Baked", "Cheesy", "Continental"],
    ingredients: [
        { name: "Potato", amount: "2", cost: "low" },
        { name: "Carrot", amount: "1", cost: "low" },
        { name: "Beans", amount: "100g", cost: "low" },
        { name: "Broccoli", amount: "100g", cost: "medium" },
        { name: "Milk", amount: "250ml", cost: "low" },
        { name: "Cheese", amount: "150g", cost: "medium" },
        { name: "Butter", amount: "2 tbsp", cost: "medium" },
        { name: "Flour", amount: "2 tbsp", cost: "low" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" }
    ],
    nutrition: {
        protein: "12g",
        carbs: "28g",
        fat: "18g"
    },
    instructions: [
    {
        title: "Boil vegetables",
        description: "Parboil mixed vegetables like potato, carrot, beans, and broccoli.",
        time: "10"
    },
    {
        title: "Prepare white sauce",
        description: "Melt butter, add flour, cook briefly, then add milk and whisk to form smooth sauce.",
        time: "10"
    },
    {
        title: "Combine veggies and sauce",
        description: "Mix vegetables with white sauce, salt, and pepper.",
        time: "5"
    },
    {
        title: "Add cheese topping",
        description: "Transfer to baking dish and top with grated cheese.",
        time: "3"
    },
    {
        title: "Bake",
        description: "Bake at 180°C until golden and bubbly.",
        time: "15"
    }
],

tips: [
    "Use mix of cheeses for better flavor",
    "Do not overcook vegetables",
    "White sauce should be lump-free",
    "Serve hot for best taste"
]

},

{
    id: 15,
    name: "Aglio e Olio",
    nameHindi: "आलियो ए ओलियो पास्ता",
    image: "./images/aglioeolio.png",
    diet: "veg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "easy",
    cookTime: "20 mins",
    rating: 4.4,
    calories: 280,
    costCategory: "low",
    costRange: "₹80-150",
    tags: ["Dinner", "Quick", "Pasta", "Italian"],
    ingredients: [
        { name: "Spaghetti", amount: "200g", cost: "medium" },
        { name: "Garlic", amount: "6 cloves", cost: "low" },
        { name: "Olive Oil", amount: "3 tbsp", cost: "medium" },
        { name: "Chili Flakes", amount: "1 tsp", cost: "low" },
        { name: "Parsley", amount: "2 tbsp", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "9g",
        carbs: "40g",
        fat: "12g"
    },
    instructions: [
    {
        title: "Boil pasta",
        description: "Cook spaghetti in salted water until al dente.",
        time: "10"
    },
    {
        title: "Prepare garlic oil",
        description: "Heat olive oil and sauté sliced garlic until lightly golden.",
        time: "5"
    },
    {
        title: "Add chili flakes",
        description: "Add chili flakes and cook briefly.",
        time: "2"
    },
    {
        title: "Combine pasta",
        description: "Add pasta and toss well with oil mixture.",
        time: "3"
    },
    {
        title: "Garnish",
        description: "Add parsley and serve hot.",
        time: "1"
    }
],

tips: [
    "Do not burn garlic",
    "Use good quality olive oil",
    "Reserve pasta water for better texture",
    "Keep it simple for authentic taste"
]

},

{
    id: 16,
    name: "Arrabbiata",
    nameHindi: "अर्राबियाता पास्ता",
    image: "./images/arrabbiata.png",
    diet: "veg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "easy",
    cookTime: "25 mins",
    rating: 4.6,
    calories: 300,
    costCategory: "low",
    costRange: "₹90-160",
    tags: ["Dinner", "Spicy", "Pasta", "Italian"],
    ingredients: [
        { name: "Penne Pasta", amount: "200g", cost: "medium" },
        { name: "Tomato Puree", amount: "200ml", cost: "low" },
        { name: "Garlic", amount: "4 cloves", cost: "low" },
        { name: "Olive Oil", amount: "2 tbsp", cost: "medium" },
        { name: "Red Chili", amount: "1 tsp", cost: "low" },
        { name: "Basil", amount: "2 tbsp", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "10g",
        carbs: "45g",
        fat: "10g"
    },
    instructions: [
    {
        title: "Boil pasta",
        description: "Cook penne in salted water until al dente.",
        time: "10"
    },
    {
        title: "Prepare sauce",
        description: "Heat oil, sauté garlic and chili.",
        time: "5"
    },
    {
        title: "Add tomatoes",
        description: "Add tomato puree and cook until thick.",
        time: "10"
    },
    {
        title: "Combine pasta",
        description: "Mix cooked pasta with sauce.",
        time: "5"
    },
    {
        title: "Serve",
        description: "Garnish with basil and serve hot.",
        time: "2"
    }
],

tips: [
    "Use fresh tomatoes for best flavor",
    "Adjust spice level as per taste",
    "Do not overcook pasta",
    "Add basil for aroma"
]

},
{
    id: 17,
    name: "Margherita Pizza",
    nameHindi: "मार्घेरिटा पिज़्ज़ा",
    image: "./images/margheritapizza.png",
    diet: "veg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "45 mins",
    rating: 4.8,
    calories: 400,
    costCategory: "moderate",
    costRange: "₹150-250",
    tags: ["Dinner", "Cheesy", "Italian", "Baked"],
    ingredients: [
        { name: "Pizza Dough", amount: "1 base", cost: "medium" },
        { name: "Tomato Sauce", amount: "100ml", cost: "low" },
        { name: "Mozzarella Cheese", amount: "150g", cost: "medium" },
        { name: "Basil Leaves", amount: "10-12", cost: "low" },
        { name: "Olive Oil", amount: "1 tbsp", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "14g",
        carbs: "48g",
        fat: "18g"
    },
    instructions: [
    {
        title: "Prepare dough",
        description: "Knead flour, yeast, water into soft dough and let rise.",
        time: "60"
    },
    {
        title: "Prepare base",
        description: "Roll dough into pizza base.",
        time: "5"
    },
    {
        title: "Add toppings",
        description: "Spread tomato sauce, add mozzarella and basil.",
        time: "5"
    },
    {
        title: "Bake pizza",
        description: "Bake at high temperature until crust is golden.",
        time: "15"
    },
    {
        title: "Serve",
        description: "Slice and serve hot.",
        time: "2"
    }
],

tips: [
    "Use high heat for crispy crust",
    "Do not overload toppings",
    "Use fresh mozzarella",
    "Let dough rise properly"
]

},
{
    id: 18,
    name: "Caesar Salad (Eggless)",
    nameHindi: "सीज़र सलाद (बिना अंडा)",
    image: "./images/caesarsalad.png",
    diet: "veg",
    cuisine: "continental",
    mealType: "lunch",
    difficulty: "easy",
    cookTime: "15 mins",
    rating: 4.3,
    calories: 220,
    costCategory: "moderate",
    costRange: "₹100-180",
    tags: ["Lunch", "Healthy", "Salad", "Continental"],
    ingredients: [
        { name: "Lettuce", amount: "1 bunch", cost: "low" },
        { name: "Croutons", amount: "1 cup", cost: "low" },
        { name: "Parmesan Cheese", amount: "50g", cost: "medium" },
        { name: "Mayonnaise", amount: "3 tbsp", cost: "medium" },
        { name: "Garlic", amount: "2 cloves", cost: "low" },
        { name: "Lemon Juice", amount: "1 tbsp", cost: "low" },
        { name: "Olive Oil", amount: "1 tbsp", cost: "medium" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" }
    ],
    nutrition: {
        protein: "7g",
        carbs: "18g",
        fat: "14g"
    },
    instructions: [
    {
        title: "Prepare dressing",
        description: "Mix mayonnaise, garlic, lemon juice, olive oil, salt, and pepper.",
        time: "5"
    },
    {
        title: "Chop lettuce",
        description: "Wash and chop lettuce into bite-sized pieces.",
        time: "5"
    },
    {
        title: "Add croutons",
        description: "Add croutons and toss with lettuce.",
        time: "2"
    },
    {
        title: "Mix dressing",
        description: "Add dressing and toss well.",
        time: "2"
    },
    {
        title: "Add cheese",
        description: "Top with parmesan and serve.",
        time: "1"
    }
],

tips: [
    "Use fresh lettuce",
    "Do not overdress salad",
    "Add croutons just before serving",
    "Use chilled ingredients"
]

},
{
    id: 19,
    name: "Broccoli Broth",
    nameHindi: "ब्रोकोली सूप",
    image: "./images/broccolibroth.png",
    diet: "veg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "easy",
    cookTime: "25 mins",
    rating: 4.1,
    calories: 120,
    costCategory: "low",
    costRange: "₹60-120",
    tags: ["Dinner", "Healthy", "Soup", "Low-Calorie"],
    ingredients: [
        { name: "Broccoli", amount: "200g", cost: "medium" },
        { name: "Onion", amount: "1", cost: "low" },
        { name: "Garlic", amount: "2 cloves", cost: "low" },
        { name: "Vegetable Stock", amount: "500ml", cost: "low" },
        { name: "Olive Oil", amount: "1 tbsp", cost: "medium" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "5g",
        carbs: "10g",
        fat: "6g"
    },
    instructions: [
    {
        title: "Prepare vegetables",
        description: "Chop broccoli, onion, and garlic.",
        time: "5"
    },
    {
        title: "Sauté base",
        description: "Heat oil and sauté onion and garlic.",
        time: "5"
    },
    {
        title: "Cook broccoli",
        description: "Add broccoli and cook briefly.",
        time: "5"
    },
    {
        title: "Add stock",
        description: "Pour vegetable stock and simmer.",
        time: "10"
    },
    {
        title: "Blend and serve",
        description: "Blend to smooth consistency and serve hot.",
        time: "5"
    }
],

tips: [
    "Do not overcook broccoli",
    "Use fresh vegetables",
    "Adjust thickness with stock",
    "Add cream for richness if desired"
]

},
{
    id: 20,
    name: "Fish & Chips",
    nameHindi: "फिश एंड चिप्स",
    image: "./images/fishandchips.png",
    diet: "nonveg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "40 mins",
    rating: 4.6,
    calories: 550,
    costCategory: "moderate",
    costRange: "₹200-350",
    tags: ["Dinner", "Fried", "Seafood", "Classic"],
    ingredients: [
        { name: "Fish Fillet", amount: "300g", cost: "high" },
        { name: "Potatoes", amount: "3", cost: "low" },
        { name: "Flour", amount: "1 cup", cost: "low" },
        { name: "Egg", amount: "1", cost: "medium" },
        { name: "Breadcrumbs", amount: "1 cup", cost: "low" },
        { name: "Oil", amount: "for frying", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" }
    ],
    nutrition: {
        protein: "25g",
        carbs: "50g",
        fat: "28g"
    },
    instructions: [
    {
        title: "Prepare batter",
        description: "Mix flour, egg, salt, pepper, and water to make a smooth batter.",
        time: "5"
    },
    {
        title: "Prepare potatoes",
        description: "Cut potatoes into strips and soak in water, then pat dry.",
        time: "10"
    },
    {
        title: "Fry chips",
        description: "Deep fry potatoes until golden and crispy.",
        time: "10"
    },
    {
        title: "Coat and fry fish",
        description: "Dip fish fillets in batter and deep fry until crispy and cooked.",
        time: "10"
    },
    {
        title: "Serve",
        description: "Serve hot with fries and tartar sauce.",
        time: "2"
    }
],

tips: [
    "Use cold batter for crispy coating",
    "Dry potatoes before frying",
    "Use fresh fish for best taste",
    "Fry in hot oil for crispiness"
]

},
{
    id: 21,
    name: "Chicken Piccata",
    nameHindi: "चिकन पिकाटा",
    image: "./images/chickenpiccata.png",
    diet: "nonveg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "30 mins",
    rating: 4.5,
    calories: 420,
    costCategory: "moderate",
    costRange: "₹200-350",
    tags: ["Dinner", "Non-Veg", "Italian", "Pan-Fried"],
    ingredients: [
        { name: "Chicken Breast", amount: "250g", cost: "medium" },
        { name: "Flour", amount: "1/2 cup", cost: "low" },
        { name: "Butter", amount: "2 tbsp", cost: "medium" },
        { name: "Olive Oil", amount: "2 tbsp", cost: "medium" },
        { name: "Lemon Juice", amount: "2 tbsp", cost: "low" },
        { name: "Capers", amount: "2 tbsp", cost: "high" },
        { name: "Garlic", amount: "3 cloves", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" }
    ],
    nutrition: {
        protein: "30g",
        carbs: "12g",
        fat: "28g"
    },
    instructions: [
    {
        title: "Prepare chicken",
        description: "Flatten chicken breast and season with salt and pepper.",
        time: "5"
    },
    {
        title: "Coat with flour",
        description: "Lightly coat chicken in flour.",
        time: "3"
    },
    {
        title: "Cook chicken",
        description: "Heat butter and oil, cook chicken until golden.",
        time: "10"
    },
    {
        title: "Prepare sauce",
        description: "Add garlic, lemon juice, capers, and simmer.",
        time: "5"
    },
    {
        title: "Combine and serve",
        description: "Return chicken to pan, coat with sauce and serve.",
        time: "3"
    }
],

tips: [
    "Do not overcook chicken",
    "Use fresh lemon juice",
    "Capers add authentic flavor",
    "Serve immediately for best taste"
]

},
{
    id: 22,
    name: "Roast Turkey with Cranberry Sauce",
    nameHindi: "रोस्ट टर्की क्रैनबेरी सॉस के साथ",
    image: "./images/roastturkey.png",
    diet: "nonveg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "hard",
    cookTime: "3 hrs",
    rating: 4.7,
    calories: 600,
    costCategory: "high",
    costRange: "₹500-900",
    tags: ["Dinner", "Festive", "Non-Veg", "Roasted"],
    ingredients: [
        { name: "Whole Turkey", amount: "2-3 kg", cost: "high" },
        { name: "Butter", amount: "100g", cost: "medium" },
        { name: "Garlic", amount: "6 cloves", cost: "low" },
        { name: "Herbs (Rosemary, Thyme)", amount: "as required", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" },
        { name: "Black Pepper", amount: "2 tsp", cost: "low" },
        { name: "Cranberries", amount: "200g", cost: "high" },
        { name: "Sugar", amount: "3 tbsp", cost: "low" },
        { name: "Orange Juice", amount: "100ml", cost: "medium" }
    ],
    nutrition: {
        protein: "45g",
        carbs: "20g",
        fat: "35g"
    },
    instructions: [
    {
        title: "Prepare turkey",
        description: "Clean turkey and season with butter, garlic, herbs, salt, and pepper.",
        time: "15"
    },
    {
        title: "Preheat oven",
        description: "Preheat oven to 180°C.",
        time: "10"
    },
    {
        title: "Roast turkey",
        description: "Place turkey in oven and roast, basting occasionally.",
        time: "150"
    },
    {
        title: "Prepare cranberry sauce",
        description: "Cook cranberries with sugar and orange juice until thick.",
        time: "15"
    },
    {
        title: "Rest and serve",
        description: "Let turkey rest before carving and serve with cranberry sauce.",
        time: "10"
    }
],

tips: [
    "Baste turkey regularly to keep it moist",
    "Let turkey rest before cutting",
    "Use meat thermometer for perfect cooking",
    "Balance sweetness in cranberry sauce"
]

},
{
    id: 23,
    name: "Chicken and Cheese Salad",
    nameHindi: "चिकन और चीज़ सलाद",
    image: "./images/chickencheesesalad.png",
    diet: "nonveg",
    cuisine: "continental",
    mealType: "lunch",
    difficulty: "easy",
    cookTime: "20 mins",
    rating: 4.4,
    calories: 300,
    costCategory: "moderate",
    costRange: "₹150-250",
    tags: ["Lunch", "Healthy", "Salad", "High-Protein"],
    ingredients: [
        { name: "Chicken Breast", amount: "200g", cost: "medium" },
        { name: "Lettuce", amount: "1 bunch", cost: "low" },
        { name: "Cheese Cubes", amount: "100g", cost: "medium" },
        { name: "Cucumber", amount: "1", cost: "low" },
        { name: "Cherry Tomatoes", amount: "100g", cost: "medium" },
        { name: "Olive Oil", amount: "1 tbsp", cost: "medium" },
        { name: "Lemon Juice", amount: "1 tbsp", cost: "low" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "28g",
        carbs: "10g",
        fat: "18g"
    },
    instructions: [
    {
        title: "Cook chicken",
        description: "Grill or pan-cook seasoned chicken until fully cooked.",
        time: "10"
    },
    {
        title: "Chop vegetables",
        description: "Cut lettuce, cucumber, and tomatoes.",
        time: "5"
    },
    {
        title: "Prepare dressing",
        description: "Mix olive oil, lemon juice, salt, and pepper.",
        time: "3"
    },
    {
        title: "Combine salad",
        description: "Add chicken, vegetables, and cheese cubes. Toss well.",
        time: "3"
    },
    {
        title: "Serve",
        description: "Serve fresh and chilled.",
        time: "1"
    }
],

tips: [
    "Use fresh vegetables",
    "Do not overdress salad",
    "Use grilled chicken for better flavor",
    "Serve immediately for freshness"
]

},
{
    id: 24,
    name: "Loose Prawns",
    nameHindi: "लूज़ प्रॉन्स",
    image: "./images/looseprawns.png",
    diet: "nonveg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "30 mins",
    rating: 4.5,
    calories: 380,
    costCategory: "moderate",
    costRange: "₹200-350",
    tags: ["Dinner", "Spicy", "Seafood", "Starter"],
    ingredients: [
        { name: "Prawns", amount: "250g", cost: "high" },
        { name: "Corn Flour", amount: "3 tbsp", cost: "low" },
        { name: "Egg", amount: "1", cost: "medium" },
        { name: "Garlic", amount: "5 cloves", cost: "low" },
        { name: "Green Chilies", amount: "3", cost: "low" },
        { name: "Soy Sauce", amount: "1 tbsp", cost: "medium" },
        { name: "Vinegar", amount: "1 tsp", cost: "low" },
        { name: "Oil", amount: "for frying", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" }
    ],
    nutrition: {
        protein: "26g",
        carbs: "18g",
        fat: "20g"
    },
    instructions: [
    {
        title: "Prepare prawns",
        description: "Clean and devein prawns. Pat them dry.",
        time: "5"
    },
    {
        title: "Make coating",
        description: "Mix corn flour, egg, salt, and pepper into a thick batter.",
        time: "5"
    },
    {
        title: "Fry prawns",
        description: "Coat prawns and deep fry until crispy.",
        time: "8"
    },
    {
        title: "Prepare sauce",
        description: "Sauté garlic and green chilies, add soy sauce and vinegar.",
        time: "5"
    },
    {
        title: "Toss prawns",
        description: "Add fried prawns to sauce and toss well.",
        time: "3"
    }
],

tips: [
    "Do not overcook prawns",
    "Fry in hot oil for crispiness",
    "Use fresh prawns",
    "Serve immediately for best taste"
]

},
{
    id: 25,
    name: "Sweet Chilli Chicken",
    nameHindi: "स्वीट चिली चिकन",
    image: "./images/sweetchillichicken.png",
    diet: "nonveg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "30 mins",
    rating: 4.6,
    calories: 420,
    costCategory: "moderate",
    costRange: "₹180-300",
    tags: ["Dinner", "Spicy", "Sweet", "Chinese", "Starter"],
    ingredients: [
        { name: "Chicken", amount: "250g", cost: "medium" },
        { name: "Corn Flour", amount: "3 tbsp", cost: "low" },
        { name: "Egg", amount: "1", cost: "medium" },
        { name: "Garlic", amount: "4 cloves", cost: "low" },
        { name: "Sweet Chilli Sauce", amount: "3 tbsp", cost: "medium" },
        { name: "Soy Sauce", amount: "1 tbsp", cost: "medium" },
        { name: "Capsicum", amount: "1", cost: "low" },
        { name: "Onion", amount: "1", cost: "low" },
        { name: "Oil", amount: "for frying", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "27g",
        carbs: "22g",
        fat: "24g"
    },
    instructions: [
    {
        title: "Prepare chicken",
        description: "Cut chicken into pieces and season.",
        time: "5"
    },
    {
        title: "Coat and fry",
        description: "Coat with corn flour and egg, then deep fry.",
        time: "10"
    },
    {
        title: "Prepare sauce",
        description: "Sauté garlic, add sweet chili sauce and soy sauce.",
        time: "5"
    },
    {
        title: "Add vegetables",
        description: "Add capsicum and onion, cook briefly.",
        time: "5"
    },
    {
        title: "Combine chicken",
        description: "Add fried chicken and toss with sauce.",
        time: "3"
    }
],

tips: [
    "Keep chicken juicy by not over frying",
    "Balance sweet and spicy flavors",
    "Use fresh vegetables",
    "Serve hot for best texture"
]

},
{
    id: 26,
    name: "Hot Garlic Prawns",
    nameHindi: "हॉट गार्लिक प्रॉन्स",
    image: "./images/hotgarlicprawns.png",
    diet: "nonveg",
    cuisine: "continental",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "25 mins",
    rating: 4.7,
    calories: 390,
    costCategory: "moderate",
    costRange: "₹200-350",
    tags: ["Dinner", "Spicy", "Seafood", "Chinese", "Starter"],
    ingredients: [
        { name: "Prawns", amount: "250g", cost: "high" },
        { name: "Garlic", amount: "8 cloves", cost: "low" },
        { name: "Soy Sauce", amount: "1 tbsp", cost: "medium" },
        { name: "Red Chili Sauce", amount: "2 tbsp", cost: "medium" },
        { name: "Green Chilies", amount: "3", cost: "low" },
        { name: "Corn Flour", amount: "2 tbsp", cost: "low" },
        { name: "Oil", amount: "2 tbsp", cost: "medium" },
        { name: "Spring Onion", amount: "2 tbsp", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" }
    ],
    nutrition: {
        protein: "28g",
        carbs: "15g",
        fat: "22g"
    },
    instructions: [
    {
        title: "Prepare prawns",
        description: "Clean and devein prawns.",
        time: "5"
    },
    {
        title: "Sauté garlic",
        description: "Heat oil and sauté chopped garlic until fragrant.",
        time: "3"
    },
    {
        title: "Cook prawns",
        description: "Add prawns and cook until they turn pink.",
        time: "5"
    },
    {
        title: "Add sauces",
        description: "Add chili sauce, soy sauce, and mix well.",
        time: "5"
    },
    {
        title: "Finish",
        description: "Garnish with spring onions and serve hot.",
        time: "2"
    }
],

tips: [
    "Do not overcook prawns",
    "Use lots of garlic for flavor",
    "Cook on high heat",
    "Serve immediately"
]

},
{
    id: 27,
    name: "Goan Prawn Curry",
    nameHindi: "गोअन प्रॉन करी",
    image: "./images/goanprawncurry.png",
    diet: "nonveg",
    cuisine: "indian",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "35 mins",
    rating: 4.7,
    calories: 450,
    costCategory: "moderate",
    costRange: "₹200-350",
    tags: ["Dinner", "Spicy", "Seafood", "Indian", "Curry"],
    ingredients: [
        { name: "Prawns", amount: "300g", cost: "high" },
        { name: "Coconut Milk", amount: "200ml", cost: "medium" },
        { name: "Onion", amount: "1", cost: "low" },
        { name: "Tomato", amount: "2", cost: "low" },
        { name: "Garlic", amount: "4 cloves", cost: "low" },
        { name: "Ginger", amount: "1 inch", cost: "low" },
        { name: "Red Chili Powder", amount: "1 tsp", cost: "low" },
        { name: "Turmeric", amount: "1/2 tsp", cost: "low" },
        { name: "Oil", amount: "2 tbsp", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "30g",
        carbs: "18g",
        fat: "28g"
    },
    instructions: [
    {
        title: "Prepare masala",
        description: "Grind coconut, spices, and chilies into a paste.",
        time: "10"
    },
    {
        title: "Cook base",
        description: "Heat oil and sauté onions, garlic, and ginger.",
        time: "5"
    },
    {
        title: "Add masala",
        description: "Add ground paste and cook until aromatic.",
        time: "10"
    },
    {
        title: "Add prawns",
        description: "Add prawns and coconut milk.",
        time: "10"
    },
    {
        title: "Simmer",
        description: "Cook until prawns are done and curry thickens.",
        time: "5"
    }
],

tips: [
    "Use fresh coconut for authentic taste",
    "Do not overcook prawns",
    "Adjust spice level carefully",
    "Serve with rice"
]

},
{
    id: 28,
    name: "Kerala Prawn Roast",
    nameHindi: "केरल प्रॉन रोस्ट",
    image: "./images/keralaprawnroast.png",
    diet: "nonveg",
    cuisine: "indian",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "35 mins",
    rating: 4.8,
    calories: 430,
    costCategory: "moderate",
    costRange: "₹200-350",
    tags: ["Dinner", "Spicy", "Seafood", "South Indian", "Roasted"],
    ingredients: [
        { name: "Prawns", amount: "300g", cost: "high" },
        { name: "Onion", amount: "2", cost: "low" },
        { name: "Garlic", amount: "5 cloves", cost: "low" },
        { name: "Ginger", amount: "1 inch", cost: "low" },
        { name: "Curry Leaves", amount: "1 sprig", cost: "low" },
        { name: "Red Chili Powder", amount: "1.5 tsp", cost: "low" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" },
        { name: "Turmeric", amount: "1/2 tsp", cost: "low" },
        { name: "Coconut Oil", amount: "2 tbsp", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "32g",
        carbs: "14g",
        fat: "26g"
    },
    instructions: [
    {
        title: "Marinate prawns",
        description: "Mix prawns with spices and marinate briefly.",
        time: "10"
    },
    {
        title: "Cook onions",
        description: "Sauté onions, curry leaves, ginger, and garlic.",
        time: "8"
    },
    {
        title: "Add spices",
        description: "Add chili powder, turmeric, and mix well.",
        time: "5"
    },
    {
        title: "Cook prawns",
        description: "Add prawns and cook until dry and roasted.",
        time: "10"
    },
    {
        title: "Finish",
        description: "Drizzle coconut oil and serve.",
        time: "2"
    }
],

tips: [
    "Use coconut oil for authentic flavor",
    "Cook until slightly dry",
    "Do not overcook prawns",
    "Use curry leaves generously"
]

},
{
    id: 30,
    name: "Shorshe Ilish",
    nameHindi: "सरसों इलिश",
    image: "./images/shorshehilsa.png",
    diet: "nonveg",
    cuisine: "indian",
    mealType: "lunch",
    difficulty: "medium",
    cookTime: "30 mins",
    rating: 4.8,
    calories: 500,
    costCategory: "high",
    costRange: "₹300-600",
    tags: ["Lunch", "Spicy", "Seafood", "Bengali", "Curry"],
    ingredients: [
        { name: "Hilsa Fish", amount: "300g", cost: "high" },
        { name: "Mustard Seeds", amount: "2 tbsp", cost: "low" },
        { name: "Green Chilies", amount: "3", cost: "low" },
        { name: "Mustard Oil", amount: "2 tbsp", cost: "medium" },
        { name: "Turmeric", amount: "1/2 tsp", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "32g",
        carbs: "8g",
        fat: "36g"
    },
    instructions: [
    {
        title: "Prepare mustard paste",
        description: "Grind mustard seeds with green chilies and water.",
        time: "5"
    },
    {
        title: "Marinate fish",
        description: "Coat fish with turmeric and salt.",
        time: "5"
    },
    {
        title: "Prepare gravy",
        description: "Heat mustard oil and add mustard paste.",
        time: "5"
    },
    {
        title: "Cook fish",
        description: "Add fish pieces and cook gently.",
        time: "10"
    },
    {
        title: "Finish",
        description: "Add green chilies and simmer briefly.",
        time: "3"
    }
],

tips: [
    "Use fresh hilsa fish",
    "Do not overcook fish",
    "Mustard oil enhances flavor",
    "Balance bitterness of mustard"
]

},
{
    id: 31,
    name: "Bombil Fry",
    nameHindi: "बॉम्बिल फ्राई",
    image: "./images/bombilfry.png",
    diet: "nonveg",
    cuisine: "indian",
    mealType: "dinner",
    difficulty: "easy",
    cookTime: "25 mins",
    rating: 4.6,
    calories: 420,
    costCategory: "moderate",
    costRange: "₹200-350",
    tags: ["Dinner", "Fried", "Seafood", "Mumbai Street Food"],
    ingredients: [
        { name: "Bombil (Bombay Duck)", amount: "300g", cost: "medium" },
        { name: "Rice Flour", amount: "1/2 cup", cost: "low" },
        { name: "Red Chili Powder", amount: "1 tsp", cost: "low" },
        { name: "Turmeric", amount: "1/2 tsp", cost: "low" },
        { name: "Garlic Paste", amount: "1 tbsp", cost: "low" },
        { name: "Lemon Juice", amount: "1 tbsp", cost: "low" },
        { name: "Oil", amount: "for frying", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "28g",
        carbs: "18g",
        fat: "26g"
    },
    instructions: [
    {
        title: "Clean fish",
        description: "Clean and flatten bombil fish.",
        time: "5"
    },
    {
        title: "Marinate",
        description: "Apply spices, garlic paste, and lemon juice.",
        time: "10"
    },
    {
        title: "Coat fish",
        description: "Coat with rice flour for crispiness.",
        time: "3"
    },
    {
        title: "Fry fish",
        description: "Shallow fry until golden and crispy.",
        time: "10"
    },
    {
        title: "Serve",
        description: "Serve hot with lemon wedges.",
        time: "2"
    }
],

tips: [
    "Use fresh fish",
    "Do not overcrowd pan",
    "Cook on medium heat",
    "Serve immediately"
]

},
{
    id: 32,
    name: "Galouti Kebab",
    nameHindi: "गलौटी कबाब",
    image: "./images/galoutikebab.png",
    diet: "nonveg",
    cuisine: "indian",
    mealType: "dinner",
    difficulty: "hard",
    cookTime: "45 mins",
    rating: 4.8,
    calories: 450,
    costCategory: "high",
    costRange: "₹250-400",
    tags: ["Dinner", "Mughlai", "Non-Veg", "Kebab", "Starter"],
    ingredients: [
        { name: "Minced Mutton", amount: "300g", cost: "high" },
        { name: "Onion", amount: "1", cost: "low" },
        { name: "Garlic", amount: "5 cloves", cost: "low" },
        { name: "Ginger", amount: "1 inch", cost: "low" },
        { name: "Raw Papaya Paste", amount: "2 tbsp", cost: "medium" },
        { name: "Garam Masala", amount: "1 tsp", cost: "low" },
        { name: "Cloves & Cardamom", amount: "as required", cost: "medium" },
        { name: "Ghee", amount: "2 tbsp", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "28g",
        carbs: "10g",
        fat: "32g"
    },
    instructions: [
    {
        title: "Prepare mince",
        description: "Mix minced meat with spices and raw papaya paste.",
        time: "10"
    },
    {
        title: "Rest mixture",
        description: "Let mixture rest for better flavor.",
        time: "30"
    },
    {
        title: "Shape kebabs",
        description: "Shape into small patties.",
        time: "5"
    },
    {
        title: "Cook kebabs",
        description: "Shallow fry in ghee until soft and cooked.",
        time: "10"
    },
    {
        title: "Serve",
        description: "Serve hot with paratha or chutney.",
        time: "2"
    }
],

tips: [
    "Use fine mince for softness",
    "Do not overcook",
    "Use ghee for authentic taste",
    "Papaya tenderizes meat"
]

},

{
    id: 33,
    name: "Bengali Macher Jhol",
    nameHindi: "बंगाली माछेर झोल",
    image: "./images/macherjhol.png",
    diet: "nonveg",
    cuisine: "indian",
    mealType: "lunch",
    difficulty: "medium",
    cookTime: "35 mins",
    rating: 4.7,
    calories: 380,
    costCategory: "moderate",
    costRange: "₹180-300",
    tags: ["Lunch", "Bengali", "Non-Veg", "Fish Curry", "Comfort Food"],
    ingredients: [
        { name: "Rohu Fish", amount: "400g", cost: "medium" },
        { name: "Potato", amount: "2", cost: "low" },
        { name: "Tomato", amount: "2", cost: "low" },
        { name: "Onion", amount: "1", cost: "low" },
        { name: "Garlic", amount: "4 cloves", cost: "low" },
        { name: "Turmeric Powder", amount: "1 tsp", cost: "low" },
        { name: "Red Chili Powder", amount: "1 tsp", cost: "low" },
        { name: "Mustard Oil", amount: "3 tbsp", cost: "medium" },
        { name: "Green Chilies", amount: "3", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "30g",
        carbs: "18g",
        fat: "22g"
    },
    instructions: [
        {
            title: "Marinate fish",
            description: "Rub fish pieces with turmeric and salt. Let it rest.",
            time: "10"
        },
        {
            title: "Fry fish",
            description: "Heat mustard oil and lightly fry fish pieces until golden. Set aside.",
            time: "8"
        },
        {
            title: "Prepare base",
            description: "In the same oil, sauté potatoes until slightly golden, then add onions and garlic.",
            time: "8"
        },
        {
            title: "Cook gravy",
            description: "Add tomatoes, spices, and cook until soft. Add water to form curry.",
            time: "10"
        },
        {
            title: "Simmer fish",
            description: "Add fried fish and green chilies. Simmer until flavors blend.",
            time: "8"
        }
    ],
    tips: [
        "Use mustard oil for authentic Bengali flavor",
        "Do not overcook fish pieces",
        "Light frying enhances taste",
        "Serve hot with steamed rice"
    ]
},


{
    id: 34,
    name: "Paya Soup",
    nameHindi: "पाया सूप",
    image: "./images/payasoup.png",
    diet: "nonveg",
    cuisine: "indian",
    mealType: "breakfast",
    difficulty: "hard",
    cookTime: "3 hrs",
    rating: 4.6,
    calories: 300,
    costCategory: "moderate",
    costRange: "₹150-300",
    tags: ["Breakfast", "Soup", "Non-Veg", "Traditional", "High-Protein"],
    ingredients: [
        { name: "Goat Trotters (Paya)", amount: "500g", cost: "medium" },
        { name: "Onion", amount: "2", cost: "low" },
        { name: "Garlic", amount: "6 cloves", cost: "low" },
        { name: "Ginger", amount: "1 inch", cost: "low" },
        { name: "Turmeric", amount: "1/2 tsp", cost: "low" },
        { name: "Black Pepper", amount: "1 tsp", cost: "low" },
        { name: "Garam Masala", amount: "1 tsp", cost: "low" },
        { name: "Oil", amount: "2 tbsp", cost: "medium" },
        { name: "Coriander Leaves", amount: "as required", cost: "low" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "22g",
        carbs: "8g",
        fat: "20g"
    },
    instructions: [
    {
        title: "Clean paya",
        description: "Wash and clean goat trotters thoroughly.",
        time: "10"
    },
    {
        title: "Pressure cook",
        description: "Cook paya with water, turmeric, and salt until tender.",
        time: "40"
    },
    {
        title: "Prepare base",
        description: "Sauté onions, ginger, and garlic.",
        time: "10"
    },
    {
        title: "Add spices",
        description: "Add spices and cooked paya with stock.",
        time: "20"
    },
    {
        title: "Simmer",
        description: "Cook on low heat for rich flavor.",
        time: "30"
    }
],

tips: [
    "Slow cooking improves taste",
    "Use fresh spices",
    "Remove excess fat if needed",
    "Serve hot for best experience"
]

},
{
    id: 35,
    name: "Paneer Tikka",
    nameHindi: "पनीर टिक्का",
    image: "./images/paneertikka.png",
    diet: "veg",
    cuisine: "indian",
    mealType: "dinner",
    difficulty: "medium",
    cookTime: "30 mins",
    rating: 4.7,
    calories: 320,
    costCategory: "moderate",
    costRange: "₹150-250",
    tags: ["Dinner", "Grilled", "Veg", "Starter", "North Indian"],
    ingredients: [
        { name: "Paneer", amount: "250g", cost: "medium" },
        { name: "Curd", amount: "1/2 cup", cost: "low" },
        { name: "Capsicum", amount: "1", cost: "low" },
        { name: "Onion", amount: "1", cost: "low" },
        { name: "Ginger-Garlic Paste", amount: "1 tbsp", cost: "low" },
        { name: "Red Chili Powder", amount: "1 tsp", cost: "low" },
        { name: "Turmeric", amount: "1/2 tsp", cost: "low" },
        { name: "Garam Masala", amount: "1 tsp", cost: "low" },
        { name: "Lemon Juice", amount: "1 tbsp", cost: "low" },
        { name: "Oil", amount: "1 tbsp", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "18g",
        carbs: "12g",
        fat: "22g"
    },
    instructions: [
    {
        title: "Prepare marinade",
        description: "Mix curd, ginger-garlic paste, spices, lemon juice, and oil into a thick marinade.",
        time: "10"
    },
    {
        title: "Marinate paneer",
        description: "Coat paneer cubes, capsicum, and onion with marinade. Let it rest.",
        time: "30"
    },
    {
        title: "Preheat grill",
        description: "Preheat oven or tawa for cooking.",
        time: "5"
    },
    {
        title: "Cook tikka",
        description: "Grill or roast paneer until slightly charred and cooked.",
        time: "15"
    },
    {
        title: "Serve",
        description: "Serve hot with mint chutney and lemon wedges.",
        time: "2"
    }
],

tips: [
    "Do not overcook paneer",
    "Use thick curd for marinade",
    "Add mustard oil for smoky flavor",
    "Skewers help even cooking"
]

},
{
    id: 36,
    name: "Mirchi Ka Salan",
    nameHindi: "मिर्ची का सालन",
    image: "./images/mirchikasalan.png",
    diet: "veg",
    cuisine: "indian",
    mealType: "lunch",
    difficulty: "medium",
    cookTime: "40 mins",
    rating: 4.5,
    calories: 280,
    costCategory: "low",
    costRange: "₹80-150",
    tags: ["Lunch", "Spicy", "Veg", "Hyderabadi", "Curry"],
    ingredients: [
        { name: "Green Chilies (Large)", amount: "8-10", cost: "low" },
        { name: "Peanuts", amount: "3 tbsp", cost: "low" },
        { name: "Sesame Seeds", amount: "2 tbsp", cost: "low" },
        { name: "Coconut", amount: "2 tbsp", cost: "medium" },
        { name: "Onion", amount: "1", cost: "low" },
        { name: "Tamarind Pulp", amount: "2 tbsp", cost: "low" },
        { name: "Garlic", amount: "4 cloves", cost: "low" },
        { name: "Turmeric", amount: "1/2 tsp", cost: "low" },
        { name: "Oil", amount: "3 tbsp", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "8g",
        carbs: "20g",
        fat: "16g"
    },
    instructions: [
    {
        title: "Prepare chilies",
        description: "Wash and slit green chilies without cutting fully.",
        time: "5"
    },
    {
        title: "Roast base ingredients",
        description: "Dry roast peanuts, sesame seeds, and coconut, then grind into paste.",
        time: "10"
    },
    {
        title: "Fry chilies",
        description: "Shallow fry chilies until slightly soft.",
        time: "5"
    },
    {
        title: "Prepare gravy",
        description: "Heat oil, sauté onions and garlic, then add ground paste and cook.",
        time: "10"
    },
    {
        title: "Simmer curry",
        description: "Add tamarind pulp, spices, and chilies. Simmer until thick.",
        time: "10"
    }
],

tips: [
    "Balance spice with tamarind",
    "Do not overcook chilies",
    "Use fresh peanuts and sesame",
    "Consistency should be slightly thick"
]

},
{
    id: 37,
    name: "Bagara Baingan",
    nameHindi: "बगारा बैंगन",
    image: "./images/bagarabaingan.png",
    diet: "veg",
    cuisine: "indian",
    mealType: "lunch",
    difficulty: "medium",
    cookTime: "40 mins",
    rating: 4.6,
    calories: 260,
    costCategory: "low",
    costRange: "₹80-150",
    tags: ["Lunch", "Spicy", "Veg", "Hyderabadi", "Curry"],
    ingredients: [
        { name: "Baby Eggplant (Baingan)", amount: "250g", cost: "low" },
        { name: "Peanuts", amount: "3 tbsp", cost: "low" },
        { name: "Sesame Seeds", amount: "2 tbsp", cost: "low" },
        { name: "Dry Coconut", amount: "2 tbsp", cost: "medium" },
        { name: "Onion", amount: "1", cost: "low" },
        { name: "Tamarind Pulp", amount: "2 tbsp", cost: "low" },
        { name: "Garlic", amount: "4 cloves", cost: "low" },
        { name: "Turmeric", amount: "1/2 tsp", cost: "low" },
        { name: "Red Chili Powder", amount: "1 tsp", cost: "low" },
        { name: "Oil", amount: "3 tbsp", cost: "medium" },
        { name: "Salt", amount: "as required", cost: "low" }
    ],
    nutrition: {
        protein: "7g",
        carbs: "18g",
        fat: "15g"
    },
    instructions: [
    {
        title: "Prepare baingan",
        description: "Wash and slit baby eggplants without cutting fully.",
        time: "5"
    },
    {
        title: "Roast masala",
        description: "Dry roast peanuts, sesame seeds, and coconut, then grind into paste.",
        time: "10"
    },
    {
        title: "Fry baingan",
        description: "Shallow fry eggplants until partially cooked.",
        time: "8"
    },
    {
        title: "Cook gravy",
        description: "Heat oil, sauté onions and garlic, add ground paste and spices.",
        time: "10"
    },
    {
        title: "Simmer",
        description: "Add baingan and tamarind pulp, cook until soft and gravy thickens.",
        time: "12"
    }
],

tips: [
    "Use small tender baingan",
    "Do not overcook to avoid mushiness",
    "Roasted masala enhances flavor",
    "Serve with biryani for best pairing"
]

}
];

// Export for use in other files
//if (typeof module !== 'undefined' && module.exports) {
   // module.exports = { recipes };
//}