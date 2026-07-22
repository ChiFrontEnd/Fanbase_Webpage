const recipes = [
    {
        title: "Creamy Garlic Pasta",
        subtitle: "Inspired by Jungkook's Weverse Cooking Live 💜",
        description: "A rich creamy pasta with garlic, butter, mozzarella and parmesan cheese.",
        meta: "⏱️ Prep 5 min | 🔥 Cook 5 min | 👥 Serves 2",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        image: "https://vikalinka.com/wp-content/uploads/2023/05/Tagliatelle-with-Truffle-Sauce-5-Edit-2.jpg",
        ingredients: [
            "200 g pasta (spaghetti or fettuccine)",
            "2 cloves garlic, minced",
            "1 tbsp butter",
            "1 cup milk",
            "½ cup cooking cream",
            "½ cup mozzarella cheese",
            "¼ cup parmesan cheese",
            "Salt (to taste)",
            "Black pepper",
            "Parsley (optional)"
        ],
        instructions: [
            "Cook the pasta until al dente and reserve a little pasta water.",
            "Melt butter in a pan and sauté the garlic until fragrant.",
            "Pour in the milk and cooking cream, stirring continuously.",
            "Add mozzarella and parmesan cheese until melted into a creamy sauce.",
            "Season with salt and freshly ground black pepper.",
            "Add the cooked pasta and toss until well coated.",
            "If the sauce is too thick, mix in a little reserved pasta water.",
            "Garnish with parsley and serve hot."
        ]
    },
    {
        title: "Buldak Perilla Oil Mayo Noodles",
        subtitle: "Inspired by Jungkook's TikTok/Wverse Live 💜",
        description: "A smoky, nutty, sweet, and spicy viral noodle sensation.",
        meta: "⏱️ Prep 5 min | 🔥 Cook 5 min | 👥 Serves 1",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        image: "https://images.herzindagi.info/image/2023/Aug/Buldak-Mayo-Perilla-Oil-Noodle.jpg",
        ingredients: [
            "90g dry buckwheat noodles (makguksu)",
            "4 tbsp golden perilla oil",
            "2 tbsp Cham sauce (or soy sauce with a tiny bit of vinegar/sugar)",
            "1 tbsp Buldak hot chicken sauce",
            "1 tbsp Buldak mayo",
            "1 egg yolk",
            "Roasted seaweed flakes (gim)",
            "Sesame seeds"
        ],
        instructions: [
            "Cook the buckwheat noodles in boiling water, then rinse thoroughly in cold water and drain well.",
            "In a bowl, mix together the golden perilla oil, Cham sauce, Buldak sauce, and Buldak mayo.",
            "Add the drained noodles into the sauce and mix well.",
            "Top with an egg yolk, crushed roasted seaweed, and sesame seeds before eating."
        ]
    },
    {
        title: "Truffle Cream Pasta",
        subtitle: "Inspired by Jungkook's In the SOOP 💜",
        description: "A restaurant-quality luxury pasta combining rich creaminess and truffle notes.",
        meta: "⏱️ Prep 10 min | 🔥 Cook 15 min | 👥 Serves 2",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        image: "1.PNG",
        ingredients: [
            "160g Paccheri or Rigatoni pasta",
            "1 tbsp olive oil & 2 tbsp unsalted butter",
            "1 medium onion (sliced) & 200g champignon mushrooms (sliced)",
            "200ml milk (or heavy cream)",
            "125ml reserved pasta boiling water",
            "1 tbsp truffle oil (plus extra to drizzle)",
            "⅓ cup freshly grated Parmesan cheese",
            "Salt and black pepper"
        ],
        instructions: [
            "Boil pasta in salted water until al dente. Reserve some pasta water before draining.",
            "Heat olive oil in a pan, sauté onions until translucent, then add mushrooms and cook until golden brown.",
            "Add butter and a drizzle of truffle oil, cooking for 2 more minutes.",
            "Pour in reserved pasta water and milk, season with salt and pepper, and bring to a gentle simmer.",
            "Add cooked pasta, toss well, and stir in Parmesan cheese until glossy.",
            "Garnish with black pepper and an extra drizzle of truffle oil."
        ]
    },
    {
        title: "Goguma Mattang (Glazed Candied Sweet Potatoes)",
        subtitle: "Inspired by Jungkook's Run BTS 💜",
        description: "A crispy, sweet Korean traditional snack with a hard sugar shell.",
        meta: "⏱️ Prep 15 min | 🔥 Cook 15 min | 👥 Serves 2",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        image: "1.PNG",
        ingredients: [
            "2 medium sweet potatoes (goguma)",
            "Neutral cooking oil for frying",
            "2 tbsp sugar & 2 tbsp water",
            "1 tbsp grain syrup or corn syrup",
            "Black sesame seeds for garnish"
        ],
        instructions: [
            "Wash, peel, and chop sweet potatoes into chunks. Soak in water for 10 minutes, then pat completely dry.",
            "Fry chunks in hot oil over medium heat until golden brown and cooked through. Drain on paper towels.",
            "In a separate clean pan over low heat, combine water, sugar, and syrup without stirring to melt naturally.",
            "Once bubbling, add fried sweet potatoes and gently toss until completely coated.",
            "Transfer onto parchment paper, sprinkle with black sesame seeds, and let cool."
        ]
    },
    {
        title: "Viral Hangover Ramen",
        subtitle: "Inspired by SEVENTEEN Mingyu's In the SOOP",
        description: "An upgraded, deeply comforting spicy ramen packed with aromatics.",
        meta: "⏱️ Prep 5 min | 🔥 Cook 5 min | 👥 Serves 1-2",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        image: "1.PNG",
        ingredients: [
            "1 packet of Shin Ramyun",
            "1 tbsp vegetable oil",
            "2 cloves minced garlic",
            "1 stalk of green onion (chopped)",
            "1 large chili pepper (sliced)",
            "400ml water",
            "2 eggs"
        ],
        instructions: [
            "Heat vegetable oil in a pot, add minced garlic, green onions, and chili. Sauté until fragrant.",
            "Pour in 400ml water, add ramen soup powder and vegetable flakes, and bring to a boil.",
            "Add ramen noodles into the spicy broth.",
            "Crack both eggs directly into the soup and let them poach without stirring too much.",
            "Transfer to a bowl and serve hot."
        ]
    },
    {
        title: "Kimchi Fried Rice",
        subtitle: "Inspired by BLACKPINK Jennie",
        description: "A quick, comforting classic kimchi fried rice with crispy pork belly.",
        meta: "⏱️ Prep 5 min | 🔥 Cook 10 min | 👥 Serves 1",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        image: "1.PNG",
        ingredients: [
            "1 bowl of leftover cold cooked rice",
            "1 cup well-fermented kimchi (chopped)",
            "100g pork belly (samgyeopsal), cut into small pieces",
            "1 tbsp kimchi juice",
            "1 tsp sesame oil",
            "1 fried egg and roasted seaweed flakes for topping"
        ],
        instructions: [
            "Cook pork belly pieces in a pan over medium heat until golden brown and fat is rendered.",
            "Add chopped kimchi and kimchi juice, sautéing until the kimchi is soft.",
            "Turn heat to low, add cold cooked rice, and thoroughly mix with the pork and kimchi.",
            "Drizzle with sesame oil, mix one last time, and top with a sunny-side-up egg and seaweed flakes."
        ]
    },
    {
        title: "Truffle Jjajang Ramyeon",
        subtitle: "Inspired by MAMAMOO Hwasa",
        description: "Gourmet twist on instant black bean noodles infused with truffle oil.",
        meta: "⏱️ Prep 2 min | 🔥 Cook 5 min | 👥 Serves 1",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        image: "1.PNG",
        ingredients: [
            "1 packet of Jjajang ramyeon (like Chapagetti)",
            "Water for boiling",
            "1 tsp to 1 tbsp truffle oil",
            "Fried egg or sliced cucumber (optional garnish)"
        ],
        instructions: [
            "Boil instant jjajang noodles and dried flakes until soft.",
            "Drain almost all water, leaving about 2-3 tablespoons of liquid at the bottom.",
            "Add powdered jjajang seasoning and liquid oil packet, stirring well over low heat for 30 seconds.",
            "Turn off heat completely, generously drizzle truffle oil, and give it a final mix before serving."
        ]
    },
    {
        title: "Tomato Egg Ramyeon",
        subtitle: "Inspired by NCT Chenle",
        description: "A refreshing Chinese home-cooking inspired twist on instant noodles.",
        meta: "⏱️ Prep 5 min | 🔥 Cook 6 min | 👥 Serves 1",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        image: "1.PNG",
        ingredients: [
            "1 packet of spicy or beef instant ramyeon",
            "3-4 ripe tomatoes (chopped into wedges)",
            "1 tbsp Lao Gan Ma chili crisp",
            "1-2 eggs",
            "500ml water"
        ],
        instructions: [
            "Put chopped tomatoes and water into a pot and bring to a boil, mashing tomatoes slightly to release juices.",
            "Add ramyeon soup powder and Lao Gan Ma chili crisp into the tomato soup base.",
            "Drop in noodles and crack eggs directly into the bubbling soup without scrambling immediately.",
            "Cook for another 2 minutes until noodles reach your preferred texture, then serve hot."
        ]
    }
];