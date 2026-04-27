// ==================== DESSERT DATA ====================
const desserts = [
    {
        id: 'd1',
        name: "Gulab Jamun",
        nameHindi: "गुलाब जामुन",
        image: "./images/gulabjamun.png",
        origin: "indian",
        originLabel: "Indian",
        difficulty: "medium",
        rating: 4.9,
        prepTime: "40 mins",
        serves: "4 people",
        calories: 280,
        costCategory: "budget",
        costRange: "₹30-60",
        tags: ["Indian", "Festive", "Fried"],
        description: "Soft, spongy milk-solid dumplings deep-fried to a deep golden hue, then bathed in fragrant rose-cardamom sugar syrup. A celebration staple and an all-time Indian classic.",
        ingredients: [
            { name: "Khoya (Mawa)", amount: "200g", cost: "medium" },
            { name: "All-Purpose Flour", amount: "2 tbsp", cost: "low" },
            { name: "Baking Soda", amount: "a tiny pinch", cost: "low" },
            { name: "Ghee", amount: "1 tsp", cost: "medium" },
            { name: "Milk (if needed)", amount: "few drops", cost: "low" },
            { name: "Sugar", amount: "2 cups", cost: "low" },
            { name: "Water", amount: "1½ cups", cost: "low" },
            { name: "Rose Water", amount: "1 tsp", cost: "medium" },
            { name: "Cardamom Powder", amount: "¼ tsp", cost: "low" },
            { name: "Saffron Strands", amount: "a pinch", cost: "high" },
            { name: "Oil", amount: "for deep frying", cost: "medium" }
        ],
        instructions: [
            { title: "Make the sugar syrup", description: "Dissolve 2 cups sugar in 1½ cups water in a pan. Add cardamom, saffron, and rose water. Simmer 5 minutes until slightly sticky. Keep warm on the lowest heat.", time: "5" },
            { title: "Make the dough", description: "Crumble 200g khoya in a bowl. Add 2 tbsp flour, a tiny pinch of baking soda, and 1 tsp ghee. Knead gently into a smooth, soft dough. If it cracks, add a few drops of milk." },
            { title: "Shape the balls", description: "Divide into 20 equal portions. Roll each into a perfectly smooth, crack-free ball — any cracks will burst open during frying." },
            { title: "Fry on medium-low heat", description: "Deep-fry in oil at 150-160°C, turning constantly and gently, until deep golden-brown — about 7-8 minutes. Never rush — high heat browns outside before inside cooks.", time: "8" },
            { title: "Soak in warm syrup", description: "Drain briefly, then immediately slip into the warm (not hot) syrup. Soak for at least 30 minutes — they will plump up beautifully.", time: "30" },
            { title: "Serve", description: "Serve warm or at room temperature. Garnish with rose petals and chopped pistachios." }
        ],
        tips: [
            "Never fry on high heat — low and slow is the only way for evenly cooked gulab jamuns",
            "The syrup should be warm when you add the jamuns — hot syrup makes them shrink",
            "The dough should feel like soft clay — if it's sticky, add a pinch more flour",
            "Let them soak for at least an hour if possible — they absorb more syrup and become more flavourful"
        ],
        nutrition: { protein: "5g", carbs: "48g", fat: "12g" }
    },
    {
        id: 'd2',
        name: "Tiramisu",
        nameHindi: "तिरामिसू",
        image: "./images/tiramisu.png",
        origin: "continental",
        originLabel: "Continental",
        difficulty: "medium",
        rating: 4.8,
        prepTime: "30 mins + 4hr chill",
        serves: "6 people",
        calories: 320,
        costCategory: "moderate",
        costRange: "₹150-220",
        tags: ["Italian", "No-Bake", "Coffee"],
        description: "Layers of espresso-soaked savoiardi biscuits and airy mascarpone cream, dusted with bittersweet cocoa. Italy's most iconic dessert — elegant, rich, and deeply satisfying.",
        ingredients: [
            { name: "Mascarpone Cheese", amount: "250g", cost: "high" },
            { name: "Egg Yolks", amount: "4", cost: "medium" },
            { name: "Caster Sugar", amount: "80g", cost: "low" },
            { name: "Heavy Whipping Cream", amount: "200ml", cost: "medium" },
            { name: "Strong Espresso (cooled)", amount: "250ml", cost: "medium" },
            { name: "Savoiardi Biscuits (Ladyfingers)", amount: "24", cost: "medium" },
            { name: "Dark Rum or Marsala (optional)", amount: "2 tbsp", cost: "high" },
            { name: "Unsweetened Cocoa Powder", amount: "for dusting", cost: "medium" }
        ],
        instructions: [
            { title: "Make the base", description: "Whisk 4 egg yolks with 80g caster sugar in a bowl until the mixture turns pale, thick, and doubles in volume — about 5 minutes." },
            { title: "Add mascarpone", description: "Fold in 250g mascarpone with a spatula until completely smooth with no lumps." },
            { title: "Whip the cream", description: "In a separate cold bowl, whip 200ml heavy cream to stiff peaks. Gently fold into the mascarpone mixture in two additions." },
            { title: "Prepare the coffee", description: "Brew 250ml strong espresso and cool completely. Add rum or Marsala if using. Pour into a shallow bowl." },
            { title: "Layer the tiramisu", description: "Quickly dip each savoiardi in coffee (1-2 seconds — do NOT soak). Layer in a dish. Spread half the cream on top. Repeat with more biscuits and remaining cream." },
            { title: "Chill and dust", description: "Smooth the top, cover with cling film, and refrigerate at least 4 hours (overnight is best). Dust generously with cocoa powder just before serving.", time: "240" }
        ],
        tips: [
            "Dip biscuits quickly — soggy biscuits make a wet, heavy tiramisu",
            "Use full-fat mascarpone at room temperature — cold mascarpone lumps when mixed",
            "Overnight chilling gives a much better set and deeper flavour",
            "Dust cocoa only just before serving — it absorbs moisture and darkens if added too early"
        ],
        nutrition: { protein: "7g", carbs: "30g", fat: "22g" }
    },
    {
        id: 'd3',
        name: "Kheer",
        nameHindi: "खीर",
        image: "./images/kheer.png",
        origin: "indian",
        originLabel: "Indian",
        difficulty: "easy",
        rating: 4.7,
        prepTime: "45 mins",
        serves: "4 people",
        calories: 230,
        costCategory: "budget",
        costRange: "₹40-80",
        tags: ["Indian", "Creamy", "Comfort"],
        description: "A slow-cooked rice pudding of basmati, full-cream milk, saffron, and cardamom, garnished with pistachios and rose petals. Pure, homespun comfort in a bowl.",
        ingredients: [
            { name: "Basmati Rice", amount: "3 tbsp", cost: "low" },
            { name: "Full-Cream Milk", amount: "1 litre", cost: "low" },
            { name: "Sugar", amount: "4-5 tbsp", cost: "low" },
            { name: "Green Cardamom Powder", amount: "¼ tsp", cost: "low" },
            { name: "Saffron Strands", amount: "a pinch", cost: "high" },
            { name: "Cashews", amount: "2 tbsp", cost: "medium" },
            { name: "Raisins", amount: "1 tbsp", cost: "low" },
            { name: "Pistachios (sliced)", amount: "2 tbsp", cost: "high" },
            { name: "Rose Petals", amount: "for garnish", cost: "medium" }
        ],
        instructions: [
            { title: "Soak the rice", description: "Wash 3 tbsp basmati rice and soak in water for 20 minutes. Drain well.", time: "20" },
            { title: "Simmer milk and rice", description: "Bring 1 litre full-cream milk to a boil in a heavy-bottomed pan. Add the soaked, drained rice. Reduce to a simmer.", time: "5" },
            { title: "Cook slowly", description: "Simmer on very low heat for 30-35 minutes, stirring every 5 minutes, until rice is completely soft and milk reduces to a thick, creamy consistency.", time: "35" },
            { title: "Add sweetness and spice", description: "Stir in sugar, a pinch of saffron dissolved in 1 tbsp warm milk, and cardamom powder. Mix well." },
            { title: "Add nuts", description: "Stir in lightly toasted cashews and raisins. Cook 5 more minutes. Remove from heat.", time: "5" },
            { title: "Serve", description: "Serve warm or chilled. Garnish with sliced pistachios, rose petals, and a few strands of saffron." }
        ],
        tips: [
            "Never leave kheer unattended — it catches and burns at the bottom quickly on high heat",
            "The longer you cook it, the thicker and more flavourful it becomes",
            "Add a teaspoon of ghee at the end for a restaurant-style sheen",
            "Chilled kheer is equally divine — it thickens more as it cools"
        ],
        nutrition: { protein: "8g", carbs: "38g", fat: "8g" }
    },
    {
        id: 'd4',
        name: "Crème Brûlée",
        nameHindi: "क्रेम ब्रूले",
        image: "./images/cremebrulee.png",
        origin: "continental",
        originLabel: "Continental",
        difficulty: "medium",
        rating: 4.8,
        prepTime: "20 mins + 2hr bake",
        serves: "4 people",
        calories: 340,
        costCategory: "moderate",
        costRange: "₹120-180",
        tags: ["French", "Elegant", "Baked"],
        description: "A silken vanilla custard baked in a water bath until just set, then crowned with a thin pane of caramelised sugar that shatters satisfyingly at the first tap of a spoon.",
        ingredients: [
            { name: "Heavy Cream", amount: "500ml", cost: "medium" },
            { name: "Egg Yolks", amount: "5", cost: "medium" },
            { name: "Caster Sugar", amount: "80g", cost: "low" },
            { name: "Vanilla Bean", amount: "1 pod", cost: "high" },
            { name: "Demerara Sugar", amount: "4 tsp (for topping)", cost: "low" }
        ],
        instructions: [
            { title: "Infuse the cream", description: "Heat 500ml cream with a split vanilla bean and its scraped seeds until barely simmering. Remove from heat and steep 15 minutes.", time: "15" },
            { title: "Make the custard base", description: "Whisk 5 egg yolks with 80g caster sugar until pale and slightly thick — about 3 minutes." },
            { title: "Combine", description: "Remove vanilla bean from cream. Very slowly stream the warm cream into the egg mixture, whisking constantly to prevent scrambling." },
            { title: "Bake in water bath", description: "Strain through a fine sieve. Pour into 4 ramekins. Place in a deep baking tray and fill with hot water to halfway up the ramekins. Bake at 160°C for 40-45 minutes until set with a slight wobble in the centre.", time: "45" },
            { title: "Chill", description: "Cool to room temperature, then refrigerate at least 2 hours until firm.", time: "120" },
            { title: "Brûlée the top", description: "Sprinkle 1 tsp demerara sugar evenly on each. Use a kitchen torch in circular motions until amber and glassy. Serve within 5 minutes." }
        ],
        tips: [
            "The custard should wobble like jelly when shaken — if it's completely firm, it's overcooked",
            "Water bath (bain-marie) is essential — direct oven heat makes the custard grainy and rubbery",
            "Use a proper kitchen torch for the brûlée — oven grill doesn't give an even crust",
            "Cold custard + hot caramel is the whole magic — brûlée only just before serving"
        ],
        nutrition: { protein: "5g", carbs: "28g", fat: "26g" }
    },
    {
        id: 'd5',
        name: "Gajar Halwa",
        nameHindi: "गाजर का हलवा",
        image: "./images/gajarhalwa.png",
        origin: "indian",
        originLabel: "Indian",
        difficulty: "easy",
        rating: 4.6,
        prepTime: "50 mins",
        serves: "4 people",
        calories: 260,
        costCategory: "budget",
        costRange: "₹50-90",
        tags: ["Indian", "Winter", "Comfort"],
        description: "Grated winter carrots slow-cooked in ghee and full-cream milk until they absorb it all, sweetened with sugar, and perfumed with cardamom. A north-Indian winter ritual.",
        ingredients: [
            { name: "Red Winter Carrots", amount: "500g", cost: "low" },
            { name: "Full-Cream Milk", amount: "500ml", cost: "low" },
            { name: "Ghee", amount: "3 tbsp", cost: "medium" },
            { name: "Sugar", amount: "5-6 tbsp", cost: "low" },
            { name: "Cardamom Powder", amount: "½ tsp", cost: "low" },
            { name: "Khoya (Mawa)", amount: "2 tbsp (optional)", cost: "medium" },
            { name: "Cashews", amount: "2 tbsp", cost: "medium" },
            { name: "Almonds (sliced)", amount: "2 tbsp", cost: "medium" },
            { name: "Raisins", amount: "1 tbsp", cost: "low" }
        ],
        instructions: [
            { title: "Grate the carrots", description: "Wash, peel, and coarsely grate 500g red carrots using the large side of a box grater." },
            { title: "Sauté in ghee", description: "Heat 3 tbsp ghee in a heavy-bottomed kadai or pan. Add grated carrots and sauté on medium heat for 8-10 minutes until fragrant and slightly dry.", time: "10" },
            { title: "Cook with milk", description: "Pour in 500ml full-cream milk. Cook uncovered on medium-low heat, stirring every few minutes, until all the milk is absorbed — about 25-30 minutes.", time: "30" },
            { title: "Sweeten and spice", description: "Add 5-6 tbsp sugar and ½ tsp cardamom powder. Stir well and cook on medium heat for another 8-10 minutes until the halwa leaves the sides of the pan.", time: "10" },
            { title: "Add khoya and nuts", description: "Crumble in khoya if using and mix until melted. Add toasted cashews, almonds, and raisins." },
            { title: "Serve", description: "Serve warm, garnished with extra nuts and a small piece of silver leaf (varak) if celebrating." }
        ],
        tips: [
            "Red Delhi carrots (laal gajar) are far superior to orange carrots for halwa — sweeter and less fibrous",
            "Never rush the cooking — slow heat caramelises the natural sugars in the carrot",
            "Adding khoya at the end makes it richer and gives a traditional mithai-shop flavour",
            "Halwa keeps well in the fridge for 5-6 days and reheats beautifully"
        ],
        nutrition: { protein: "6g", carbs: "38g", fat: "12g" }
    },
    {
        id: 'd6',
        name: "Chocolate Lava Cake",
        nameHindi: "चॉकलेट लावा केक",
        image: "./images/chocolatelavacake.png",
        origin: "continental",
        originLabel: "Continental",
        difficulty: "medium",
        rating: 4.9,
        prepTime: "25 mins",
        serves: "2 people",
        calories: 420,
        costCategory: "moderate",
        costRange: "₹100-150",
        tags: ["French", "Chocolate", "Indulgent"],
        description: "A warm chocolate cake with a glossy, bitter-sweet liquid centre that cascades out when you break it open. Served with vanilla ice cream, it's pure theatre on a plate.",
        ingredients: [
            { name: "Dark Chocolate (70%)", amount: "100g", cost: "high" },
            { name: "Unsalted Butter", amount: "80g", cost: "medium" },
            { name: "Whole Eggs", amount: "2", cost: "medium" },
            { name: "Egg Yolks", amount: "2 extra", cost: "medium" },
            { name: "Icing Sugar", amount: "80g", cost: "low" },
            { name: "All-Purpose Flour", amount: "2 tbsp", cost: "low" },
            { name: "Cocoa Powder", amount: "for dusting", cost: "medium" },
            { name: "Vanilla Ice Cream", amount: "2 scoops, to serve", cost: "medium" }
        ],
        instructions: [
            { title: "Prep the ramekins", description: "Preheat oven to 200°C. Butter 2 ramekins generously, then dust with cocoa powder, tapping out any excess. Chill in freezer." },
            { title: "Melt chocolate and butter", description: "Melt 100g dark chocolate with 80g butter in a heatproof bowl over simmering water, stirring until glossy and smooth. Set aside to cool slightly.", time: "5" },
            { title: "Whisk eggs and sugar", description: "In a large bowl, whisk 2 whole eggs + 2 egg yolks with 80g icing sugar until the mixture turns pale, frothy, and slightly thick — about 3 minutes." },
            { title: "Combine", description: "Pour the cooled chocolate mixture into the egg mixture and fold together. Sift in 2 tbsp flour and fold gently until just combined — do not overmix." },
            { title: "Chill the batter", description: "Divide between the prepared ramekins. Refrigerate for 15 minutes minimum (or up to 24 hours — this helps the centre stay liquid while the outside sets).", time: "15" },
            { title: "Bake precisely and serve", description: "Bake for exactly 11-12 minutes — edges should be firm, centre should still wobble. Rest 1 minute. Run a thin knife around the edge, place a plate on top, and flip. Serve immediately with ice cream.", time: "12" }
        ],
        tips: [
            "Timing is everything — even 1 minute over and the centre sets solid",
            "Use the best dark chocolate you can find — the flavour is the whole point",
            "The batter can be made a day ahead and refrigerated in ramekins — perfect for entertaining",
            "If serving to a crowd, do a test cake first to calibrate your oven's exact timing"
        ],
        nutrition: { protein: "8g", carbs: "38g", fat: "28g" }
    }
];

// ==================== ADDITIONAL DESSERTS ====================
desserts.push(
    {
        id: 'd7',
        name: "Rasgulla",
        nameHindi: "रसगुल्ला",
        image: "./images/rasgulla.png",
        origin: "indian",
        originLabel: "Indian",
        difficulty: "medium",
        prepTime: "45 mins",
        serves: "4 people",
        calories: 180,
        costCategory: "budget",
        costRange: "₹30-50",
        tags: ["Indian", "Milk", "Syrup"],
        description: "Impossibly soft, spongy cottage cheese balls simmered in light sugar syrup until they puff up like pillows. Bengal's greatest gift to Indian sweets — delicate, airy, and cooling.",
        ingredients: [
            { name: "Full-Cream Milk", amount: "1 litre", cost: "low" },
            { name: "White Vinegar or Lemon Juice", amount: "2-3 tbsp", cost: "low" },
            { name: "All-Purpose Flour", amount: "1 tsp", cost: "low" },
            { name: "Sugar", amount: "1½ cups", cost: "low" },
            { name: "Water", amount: "4 cups", cost: "low" },
            { name: "Rose Water", amount: "1 tsp", cost: "medium" },
            { name: "Cardamom Pods", amount: "2", cost: "low" }
        ],
        instructions: [
            { title: "Make chenna (paneer)", description: "Bring 1 litre milk to a boil. Add vinegar or lemon juice gradually, stirring until the milk curdles completely. Strain through muslin cloth.", time: "10" },
            { title: "Wash and drain", description: "Rinse the chenna under cold water to remove the acidic taste. Squeeze out all water — the chenna should be moist but not wet.", time: "5" },
            { title: "Knead smooth", description: "Knead the chenna with 1 tsp flour for 8-10 minutes until perfectly smooth and soft. It should feel like plasticine.", time: "10" },
            { title: "Shape into balls", description: "Divide into 16 equal portions and roll into perfectly smooth, crack-free balls." },
            { title: "Simmer in syrup", description: "Bring sugar, water, and cardamom to a boil in a wide pan. Add the balls, cover, and simmer on medium heat for 20-25 minutes until they double in size.", time: "25" },
            { title: "Cool and serve", description: "Let cool in syrup. Add rose water. Refrigerate and serve chilled." }
        ],
        tips: [
            "Smooth kneading is everything — any cracks and the balls will break in the syrup",
            "Use a wide pan so the rasgullas have room to puff up",
            "The syrup should be at a vigorous simmer — not a rolling boil",
            "They keep well in refrigerator for 3-4 days, soaking up more syrup each day"
        ],
        nutrition: { protein: "5g", carbs: "34g", fat: "4g" }
    },
    {
        id: 'd8',
        name: "Shahi Tukda",
        nameHindi: "शाही टुकड़ा",
        image: "./images/shahitukda.png",
        origin: "indian",
        originLabel: "Indian",
        difficulty: "easy",
        prepTime: "25 mins",
        serves: "4 people",
        calories: 320,
        costCategory: "budget",
        costRange: "₹40-70",
        tags: ["Indian", "Mughlai", "Fried"],
        description: "Crispy golden-fried bread triangles soaked in rich saffron-scented rabri (condensed milk), garnished with pistachios and silver leaf. A Mughal-era royal dessert made simple.",
        ingredients: [
            { name: "White Bread Slices", amount: "6", cost: "low" },
            { name: "Ghee or Oil", amount: "for deep frying", cost: "medium" },
            { name: "Full-Cream Milk", amount: "1 litre", cost: "low" },
            { name: "Sugar", amount: "4 tbsp", cost: "low" },
            { name: "Saffron", amount: "a generous pinch", cost: "high" },
            { name: "Cardamom Powder", amount: "¼ tsp", cost: "low" },
            { name: "Pistachios (sliced)", amount: "2 tbsp", cost: "high" },
            { name: "Rose Water", amount: "1 tsp", cost: "medium" }
        ],
        instructions: [
            { title: "Make rabri", description: "Simmer 1 litre milk in a wide pan, stirring constantly, until reduced to one-third. Add sugar, saffron, cardamom, and rose water. The mixture should be thick and creamy.", time: "20" },
            { title: "Fry bread", description: "Cut bread slices into triangles. Deep fry in ghee or oil until deep golden and crispy on both sides.", time: "5" },
            { title: "Drain and arrange", description: "Drain fried bread on paper towels. Arrange in a single layer in a serving dish." },
            { title: "Pour and garnish", description: "Pour warm rabri generously over the bread. Garnish with pistachios and a pinch of saffron. Serve warm or chilled." }
        ],
        tips: [
            "Fry bread just before serving for the best contrast of crispy bread and creamy rabri",
            "Good-quality saffron makes all the difference — use Kashmiri saffron if possible",
            "Let bread soak in rabri for 10 minutes before serving for a softer texture",
            "For a shortcut, use condensed milk thinned with milk instead of making rabri from scratch"
        ],
        nutrition: { protein: "7g", carbs: "44g", fat: "14g" }
    },
    {
        id: 'd9',
        name: "Mango Kulfi",
        nameHindi: "आम की कुल्फ़ी",
        image: "./images/mangokulfi.png",
        origin: "indian",
        originLabel: "Indian",
        difficulty: "easy",
        prepTime: "15 mins + 6hr freeze",
        serves: "4 people",
        calories: 195,
        costCategory: "budget",
        costRange: "₹30-55",
        tags: ["Indian", "Frozen", "Mango"],
        description: "Intensely flavoured dense frozen dessert — concentrated mango pulp folded into reduced sweetened milk, frozen in traditional conical moulds. Richer and creamier than any ice cream.",
        ingredients: [
            { name: "Ripe Mango Pulp", amount: "1 cup", cost: "low" },
            { name: "Full-Cream Milk", amount: "500ml", cost: "low" },
            { name: "Condensed Milk", amount: "200ml", cost: "medium" },
            { name: "Heavy Cream", amount: "3 tbsp", cost: "medium" },
            { name: "Cardamom Powder", amount: "¼ tsp", cost: "low" },
            { name: "Pistachios (for garnish)", amount: "1 tbsp", cost: "high" }
        ],
        instructions: [
            { title: "Reduce milk", description: "Simmer full-cream milk in a wide pan, stirring frequently, until reduced to half. Let cool completely.", time: "15" },
            { title: "Combine", description: "Mix the cooled reduced milk with condensed milk, mango pulp, cream, and cardamom powder. Taste — adjust sweetness." },
            { title: "Pour into moulds", description: "Pour into kulfi moulds, popsicle moulds, or small cups. Insert sticks. Cover tightly." },
            { title: "Freeze until set", description: "Freeze for minimum 6 hours, preferably overnight, until completely solid.", time: "360" },
            { title: "Unmould and serve", description: "Run warm water over the outside of moulds for 10 seconds. Unmould onto a plate. Garnish with pistachios and serve immediately." }
        ],
        tips: [
            "The more you reduce the milk, the denser and creamier the kulfi — don't rush it",
            "Alphonso mango pulp gives the most intense flavour",
            "Add a few strands of saffron to the warm milk for extra richness",
            "Kulfi melts faster than ice cream — serve immediately after unmoulding"
        ],
        nutrition: { protein: "5g", carbs: "30g", fat: "9g" }
    },
    {
        id: 'd10',
        name: "Panna Cotta",
        nameHindi: "पन्ना कोट्टा",
        image: "./images/pannacotta.png",
        origin: "continental",
        originLabel: "Continental",
        difficulty: "easy",
        prepTime: "15 mins + 4hr chill",
        serves: "4 people",
        calories: 260,
        costCategory: "moderate",
        costRange: "₹100-160",
        tags: ["Italian", "No-Bake", "Creamy"],
        description: "Silky Italian set cream with just enough gelatine to hold its shape — it should tremble on the spoon. Served with a vivid berry coulis, it's the most elegant simple dessert there is.",
        ingredients: [
            { name: "Heavy Cream", amount: "400ml", cost: "medium" },
            { name: "Whole Milk", amount: "100ml", cost: "low" },
            { name: "Caster Sugar", amount: "4 tbsp", cost: "low" },
            { name: "Vanilla Bean or Extract", amount: "1 pod / 1 tsp", cost: "high" },
            { name: "Gelatine Powder", amount: "7g (1 sachet)", cost: "medium" },
            { name: "Cold Water", amount: "3 tbsp", cost: "low" },
            { name: "Mixed Berries", amount: "200g (for coulis)", cost: "medium" },
            { name: "Icing Sugar", amount: "2 tbsp (for coulis)", cost: "low" }
        ],
        instructions: [
            { title: "Bloom gelatine", description: "Sprinkle gelatine over 3 tbsp cold water in a small bowl. Let sit for 5 minutes until it swells and becomes spongy.", time: "5" },
            { title: "Heat cream mixture", description: "Warm cream, milk, sugar, and vanilla in a saucepan over medium heat, stirring until sugar dissolves. Do not boil.", time: "4" },
            { title: "Add gelatine", description: "Remove from heat. Add the bloomed gelatine and whisk until completely dissolved and smooth." },
            { title: "Pour and chill", description: "Strain into lightly oiled ramekins or glasses. Refrigerate for at least 4 hours until firmly set.", time: "240" },
            { title: "Make berry coulis", description: "Blend berries with icing sugar. Strain through a sieve. Spoon over panna cotta just before serving." }
        ],
        tips: [
            "Use just enough gelatine for a gentle wobble — too much makes it rubbery",
            "Lightly oiling the ramekins helps unmoulding — or serve directly in glasses",
            "The mixture should never boil — heat destroys the gelatine's setting ability",
            "Any berry coulis works — mango, passion fruit, or caramel are beautiful alternatives"
        ],
        nutrition: { protein: "4g", carbs: "22g", fat: "22g" }
    },
    {
        id: 'd11',
        name: "Churros with Chocolate Dip",
        nameHindi: "चुरोस विद चॉकलेट डिप",
        image: "./images/churros.png",
        origin: "continental",
        originLabel: "Continental",
        difficulty: "medium",
        prepTime: "30 mins",
        serves: "4 people",
        calories: 340,
        costCategory: "budget",
        costRange: "₹60-100",
        tags: ["Spanish", "Fried", "Chocolate"],
        description: "Crispy, ridged fried dough batons rolled in cinnamon sugar, served with a thick, glossy dark chocolate dipping sauce. Spain's most iconic street snack elevated for the home kitchen.",
        ingredients: [
            { name: "All-Purpose Flour", amount: "1 cup", cost: "low" },
            { name: "Water", amount: "1 cup", cost: "low" },
            { name: "Salt", amount: "½ tsp", cost: "low" },
            { name: "Butter", amount: "2 tbsp", cost: "medium" },
            { name: "Egg", amount: "1", cost: "low" },
            { name: "Oil", amount: "for deep frying", cost: "medium" },
            { name: "Caster Sugar", amount: "3 tbsp", cost: "low" },
            { name: "Cinnamon Powder", amount: "1 tsp", cost: "low" },
            { name: "Dark Chocolate", amount: "100g (for dip)", cost: "medium" },
            { name: "Heavy Cream", amount: "80ml (for dip)", cost: "medium" }
        ],
        instructions: [
            { title: "Make choux dough", description: "Bring water, butter, and salt to a boil. Add flour all at once and stir vigorously until the dough pulls away from the sides cleanly.", time: "3" },
            { title: "Add egg", description: "Let dough cool 5 minutes. Beat in the egg vigorously until glossy and smooth. Transfer to a piping bag fitted with a large star nozzle." },
            { title: "Fry churros", description: "Heat oil to 175°C. Pipe 10-12cm lengths directly into the oil, cutting with scissors. Fry 3-4 minutes per side until deep golden.", time: "8" },
            { title: "Coat in cinnamon sugar", description: "Drain briefly, then immediately roll in the mixed cinnamon sugar while still hot." },
            { title: "Make chocolate dip", description: "Heat cream until steaming, pour over chopped chocolate. Let sit 1 minute, then stir until glossy. Serve alongside." }
        ],
        tips: [
            "The dough must be stiff enough to hold its shape when piped — if too soft, add 1 tbsp more flour",
            "Oil temperature is critical — too cool makes greasy churros, too hot burns the outside before cooking through",
            "Eat churros immediately — they lose their crispiness quickly",
            "Add a pinch of nutmeg to the cinnamon sugar for extra warmth"
        ],
        nutrition: { protein: "5g", carbs: "42g", fat: "18g" }
    },
    {
        id: 'd12',
        name: "New York Cheesecake",
        nameHindi: "न्यू यॉर्क चीज़केक",
        image: "./images/cheesecake.png",
        origin: "continental",
        originLabel: "Continental",
        difficulty: "medium",
        prepTime: "30 mins + 5hr chill",
        serves: "8 people",
        calories: 420,
        costCategory: "moderate",
        costRange: "₹200-300",
        tags: ["American", "Baked", "Creamy"],
        description: "The iconic dense, creamy New York cheesecake with a buttery digestive biscuit base — finished with a whisper of vanilla and lemon zest. Rich, smooth, and deeply satisfying.",
        ingredients: [
            { name: "Digestive Biscuits", amount: "200g", cost: "low" },
            { name: "Melted Butter", amount: "80g", cost: "medium" },
            { name: "Cream Cheese", amount: "600g (room temperature)", cost: "high" },
            { name: "Caster Sugar", amount: "150g", cost: "low" },
            { name: "Eggs", amount: "3 large", cost: "low" },
            { name: "Sour Cream", amount: "150ml", cost: "medium" },
            { name: "Vanilla Extract", amount: "2 tsp", cost: "medium" },
            { name: "Lemon Zest", amount: "1 lemon", cost: "low" },
            { name: "All-Purpose Flour", amount: "2 tbsp", cost: "low" }
        ],
        instructions: [
            { title: "Make the base", description: "Crush biscuits to fine crumbs. Mix with melted butter. Press firmly into the base of a lined 20cm springform tin. Refrigerate 30 minutes.", time: "30" },
            { title: "Make the filling", description: "Beat cream cheese and sugar until completely smooth with no lumps — 3-4 minutes. Add flour, vanilla, and lemon zest." },
            { title: "Add eggs", description: "Add eggs one at a time, beating briefly after each. Fold in sour cream. Do not over-beat — this incorporates too much air and causes cracking." },
            { title: "Bake low and slow", description: "Preheat oven to 150°C. Pour filling over chilled base. Bake 55-65 minutes until the edges are set but the centre has a gentle wobble.", time: "60" },
            { title: "Cool slowly", description: "Turn the oven off, open the door slightly, and let the cheesecake cool inside for 1 hour. This prevents cracking. Refrigerate for at least 4 hours.", time: "60" }
        ],
        tips: [
            "Cream cheese must be at room temperature — cold cream cheese creates lumps that won't mix out",
            "The slow cool in the oven is essential — sudden temperature changes cause cracking",
            "A water bath (bain-marie) gives the most even, crack-free result for experienced bakers",
            "Cheesecake tastes significantly better the day after baking — make it ahead"
        ],
        nutrition: { protein: "8g", carbs: "36g", fat: "32g" }
    },
    {
    id: 'd13',
    name: "Patishapta",
    nameHindi: "पतिशप्त",
    image: "./images/patishapta.png",
    origin: "indian",
    originLabel: "Indian",
    difficulty: "medium",
    prepTime: "40 mins",
    serves: "8 pieces",
    calories: 210,
    costCategory: "budget",
    costRange: "₹80-140",
    tags: ["Bengali", "Festive", "Stuffed"],
    description: "A beloved Bengali dessert made with thin soft crepes filled with a fragrant coconut and khoya stuffing. Delicate, lightly sweet, and especially popular during Poush Sankranti.",
    ingredients: [
        { name: "All-Purpose Flour", amount: "1 cup", cost: "low" },
        { name: "Semolina", amount: "2 tbsp", cost: "low" },
        { name: "Rice Flour", amount: "2 tbsp", cost: "low" },
        { name: "Milk", amount: "2 cups", cost: "low" },
        { name: "Sugar", amount: "2 tbsp", cost: "low" },
        { name: "Grated Coconut", amount: "1 cup", cost: "medium" },
        { name: "Khoya", amount: "100g", cost: "medium" },
        { name: "Jaggery", amount: "1/2 cup", cost: "low" },
        { name: "Cardamom Powder", amount: "1/2 tsp", cost: "low" },
        { name: "Ghee", amount: "for greasing", cost: "medium" }
    ],
    instructions: [
        { title: "Prepare the batter", description: "Mix flour, semolina, rice flour, milk, and sugar into a smooth lump-free batter. Rest it for 15 minutes so the crepes turn soft.", time: "15" },
        { title: "Make the filling", description: "Cook grated coconut, khoya, jaggery, and cardamom in a pan on low heat until the mixture thickens and comes together.", time: "10" },
        { title: "Cook the crepes", description: "Lightly grease a non-stick pan with ghee. Pour a ladle of batter and spread into a thin pancake." },
        { title: "Add the stuffing", description: "Place a portion of coconut-khoya filling in the center while the crepe is still soft." },
        { title: "Roll and finish", description: "Gently fold or roll the crepe around the filling and cook briefly until set but not crisp." },
        { title: "Serve", description: "Serve warm or at room temperature, optionally drizzled with a little reduced milk or jaggery syrup." }
    ],
    tips: [
        "Keep the batter thin for soft, delicate crepes",
        "Cook on low to medium heat so the patishapta stays flexible and does not turn crispy",
        "Nolen gur gives the most authentic Bengali flavour when in season",
        "Do not overfill or the crepes may tear while rolling"
    ],
    nutrition: { protein: "4g", carbs: "28g", fat: "8g" }
},
{
    id: 'd14',
    name: "Khaja",
    nameHindi: "खाजा",
    image: "./images/khaja.png",
    origin: "indian",
    originLabel: "Indian",
    difficulty: "hard",
    prepTime: "50 mins",
    serves: "10 pieces",
    calories: 260,
    costCategory: "budget",
    costRange: "₹70-130",
    tags: ["Crispy", "Festive", "Layered"],
    description: "A crisp and flaky traditional Indian sweet made with layered dough, deep-fried until golden, and coated in light sugar syrup. Delicately crunchy with a melt-in-the-mouth finish.",
    ingredients: [
        { name: "All-Purpose Flour", amount: "2 cups", cost: "low" },
        { name: "Ghee", amount: "4 tbsp", cost: "medium" },
        { name: "Cornflour", amount: "2 tbsp", cost: "low" },
        { name: "Water", amount: "as needed", cost: "low" },
        { name: "Sugar", amount: "1 cup", cost: "low" },
        { name: "Cardamom Powder", amount: "1/2 tsp", cost: "low" },
        { name: "Lemon Juice", amount: "1/2 tsp", cost: "low" },
        { name: "Oil or Ghee", amount: "for frying", cost: "medium" }
    ],
    instructions: [
        { title: "Make the dough", description: "Mix flour and ghee until crumbly, then add water gradually to form a firm but smooth dough. Rest for 20 minutes.", time: "20" },
        { title: "Prepare the layers", description: "Divide the dough into portions and roll into thin sheets. Apply a paste of ghee and cornflour between layers, stack them, and roll tightly." },
        { title: "Cut and shape", description: "Slice the rolled log into pieces and gently flatten each piece to reveal the layers." },
        { title: "Deep fry", description: "Fry the shaped khaja on low to medium heat until crisp, flaky, and golden on all sides.", time: "12" },
        { title: "Make the syrup", description: "Boil sugar with a little water and cardamom until you get a light one-string syrup. Add a few drops of lemon juice to prevent crystallization.", time: "8" },
        { title: "Coat and cool", description: "Dip the fried khaja in warm syrup briefly, then remove and let it cool until the coating sets." }
    ],
    tips: [
        "Roll the dough thinly to get clear flaky layers",
        "Fry on low heat so the inside cooks and turns crisp evenly",
        "Do not soak too long in syrup or the khaja may lose its crunch",
        "Let it cool fully before storing to keep it crisp"
    ],
    nutrition: { protein: "3g", carbs: "34g", fat: "11g" }
},
{
    id: 'd15',
    name: "Puran Poli",
    nameHindi: "पुरण पोली",
    image: "./images/puranpoli.png",
    origin: "indian",
    originLabel: "Indian",
    difficulty: "medium",
    prepTime: "1 hr",
    serves: "8 polis",
    calories: 300,
    costCategory: "budget",
    costRange: "₹90-150",
    tags: ["Maharashtrian", "Festive", "Stuffed Bread"],
    description: "A festive Maharashtrian sweet flatbread stuffed with a rich filling of chana dal, jaggery, and cardamom. Soft, fragrant, and best enjoyed warm with ghee.",
    ingredients: [
        { name: "Whole Wheat Flour", amount: "1 cup", cost: "low" },
        { name: "All-Purpose Flour", amount: "1 cup", cost: "low" },
        { name: "Turmeric", amount: "a pinch", cost: "low" },
        { name: "Oil or Ghee", amount: "2 tbsp", cost: "medium" },
        { name: "Chana Dal", amount: "1 cup", cost: "low" },
        { name: "Jaggery", amount: "1 cup", cost: "low" },
        { name: "Cardamom Powder", amount: "1/2 tsp", cost: "low" },
        { name: "Nutmeg Powder", amount: "a pinch", cost: "low" },
        { name: "Ghee", amount: "for roasting and serving", cost: "medium" }
    ],
    instructions: [
        { title: "Prepare the dough", description: "Mix flours, turmeric, oil, and enough water to form a soft pliable dough. Cover and rest for 20 minutes.", time: "20" },
        { title: "Cook the dal", description: "Boil chana dal until soft but not mushy. Drain completely so the filling stays firm.", time: "20" },
        { title: "Make the puran", description: "Cook the dal with jaggery in a pan until thick. Mash or blend until smooth, then add cardamom and nutmeg. Cool completely.", time: "10" },
        { title: "Stuff the dough", description: "Divide dough and filling into equal portions. Flatten a dough ball, place filling inside, and seal carefully." },
        { title: "Roll gently", description: "Dust lightly with flour and roll into a medium-thin round without tearing the outer layer." },
        { title: "Roast and serve", description: "Cook on a hot tawa with ghee until golden spots appear on both sides. Serve warm with extra ghee." }
    ],
    tips: [
        "Drain the dal very well or the filling may become too wet",
        "The filling must be smooth for easy rolling without cracks",
        "Roll gently and evenly to keep the stuffing inside",
        "Serve hot with ghee or milk for the best festive experience"
    ],
    nutrition: { protein: "7g", carbs: "46g", fat: "9g" }
},
{
    id: 'd16',
    name: "Waffles (Belgian Style)",
    nameHindi: "बेल्जियन वॉफल्स",
    image: "./images/belgianwaffles.png",
    origin: "continental",
    originLabel: "Continental",
    difficulty: "medium",
    prepTime: "25 mins",
    serves: "4 waffles",
    calories: 340,
    costCategory: "moderate",
    costRange: "₹120-200",
    tags: ["Belgian", "Breakfast", "Crispy"],
    description: "Classic Belgian-style waffles with a crisp golden exterior and a soft, airy inside. Best served warm with butter, maple syrup, whipped cream, or fresh berries.",
    ingredients: [
        { name: "All-Purpose Flour", amount: "2 cups", cost: "low" },
        { name: "Sugar", amount: "2 tbsp", cost: "low" },
        { name: "Baking Powder", amount: "1 tbsp", cost: "low" },
        { name: "Salt", amount: "1/4 tsp", cost: "low" },
        { name: "Eggs", amount: "2", cost: "low" },
        { name: "Milk", amount: "1 3/4 cups", cost: "low" },
        { name: "Melted Butter", amount: "1/2 cup", cost: "medium" },
        { name: "Vanilla Extract", amount: "1 tsp", cost: "medium" },
        { name: "Whipped Cream", amount: "for serving", cost: "medium" },
        { name: "Maple Syrup / Berries", amount: "for topping", cost: "medium" }
    ],
    instructions: [
        { title: "Mix dry ingredients", description: "In a large bowl, whisk together flour, sugar, baking powder, and salt." },
        { title: "Prepare wet mixture", description: "In another bowl, beat eggs, then add milk, melted butter, and vanilla extract. Mix well." },
        { title: "Make the batter", description: "Pour the wet ingredients into the dry ingredients and mix until just combined. Do not overmix; a few lumps are fine." },
        { title: "Preheat waffle maker", description: "Heat the waffle iron and lightly grease it if needed.", time: "5" },
        { title: "Cook the waffles", description: "Pour batter into the waffle maker and cook until golden brown and crisp.", time: "4" },
        { title: "Serve warm", description: "Serve immediately with whipped cream, maple syrup, fresh berries, or butter." }
    ],
    tips: [
        "Do not overmix the batter or the waffles may turn dense",
        "For extra crisp waffles, let them rest on a wire rack instead of stacking",
        "Use warm waffles for the best texture and flavor",
        "You can add chocolate chips or cinnamon to the batter for variation"
    ],
    nutrition: { protein: "7g", carbs: "38g", fat: "18g" }
},
{
    id: 'd17',
    name: "Ice Cream Sundae",
    nameHindi: "आइस क्रीम संडे",
    image: "./images/icecreamsundae.png",
    origin: "continental",
    originLabel: "Continental",
    difficulty: "easy",
    prepTime: "10 mins",
    serves: "2 glasses",
    calories: 390,
    costCategory: "moderate",
    costRange: "₹100-180",
    tags: ["Cold", "Classic", "Creamy"],
    description: "A fun and indulgent dessert made with scoops of ice cream layered with syrup, nuts, whipped cream, and toppings. Cold, creamy, colorful, and perfect for all ages.",
    ingredients: [
        { name: "Vanilla / Chocolate Ice Cream", amount: "4 scoops", cost: "medium" },
        { name: "Chocolate Syrup / Strawberry Syrup", amount: "4 tbsp", cost: "medium" },
        { name: "Whipped Cream", amount: "1/2 cup", cost: "medium" },
        { name: "Chopped Nuts", amount: "2 tbsp", cost: "medium" },
        { name: "Cherry", amount: "2", cost: "medium" },
        { name: "Sprinkles", amount: "1 tbsp", cost: "medium" },
        { name: "Wafer Biscuit / Cookie", amount: "2 pieces", cost: "low" }
    ],
    instructions: [
        { title: "Prepare the serving glass", description: "Take tall dessert glasses or bowls and drizzle a little syrup at the base." },
        { title: "Add ice cream scoops", description: "Place 2 scoops of ice cream in each glass, layering with syrup if desired." },
        { title: "Add toppings", description: "Sprinkle chopped nuts and colorful sprinkles over the ice cream." },
        { title: "Top with whipped cream", description: "Pipe or spoon whipped cream generously on top." },
        { title: "Finish the sundae", description: "Drizzle more syrup, add a cherry on top, and place a wafer biscuit or cookie on the side." },
        { title: "Serve immediately", description: "Serve at once before the ice cream begins to melt." }
    ],
    tips: [
        "Chill the serving glass beforehand so the sundae stays cold longer",
        "Use multiple ice cream flavors for a richer presentation",
        "Assemble just before serving for the best look and texture",
        "Brownie chunks, bananas, or fresh berries make great add-ons"
    ],
    nutrition: { protein: "5g", carbs: "42g", fat: "22g" }
},
{
    id: 'd18',
    name: "Apple Pie",
    nameHindi: "एप्पल पाई",
    image: "./images/applepie.png",
    origin: "continental",
    originLabel: "Continental",
    difficulty: "medium",
    prepTime: "35 mins + 45 mins bake",
    serves: "8 slices",
    calories: 360,
    costCategory: "moderate",
    costRange: "₹180-260",
    tags: ["Baked", "Classic", "Fruit Dessert"],
    description: "A timeless dessert featuring a flaky buttery crust filled with tender cinnamon-spiced apples. Warm, fragrant, and perfect on its own or with a scoop of vanilla ice cream.",
    ingredients: [
        { name: "All-Purpose Flour", amount: "2 1/2 cups", cost: "low" },
        { name: "Cold Butter", amount: "200g", cost: "medium" },
        { name: "Salt", amount: "1/2 tsp", cost: "low" },
        { name: "Sugar", amount: "1 tbsp + 1/2 cup", cost: "low" },
        { name: "Cold Water", amount: "6-8 tbsp", cost: "low" },
        { name: "Apples", amount: "5-6 medium", cost: "medium" },
        { name: "Cinnamon Powder", amount: "1 tsp", cost: "low" },
        { name: "Lemon Juice", amount: "1 tbsp", cost: "low" },
        { name: "Cornflour", amount: "1 tbsp", cost: "low" },
        { name: "Egg Wash / Milk", amount: "for brushing", cost: "low" }
    ],
    instructions: [
        { title: "Make the pie dough", description: "Rub cold butter into flour, salt, and 1 tbsp sugar until crumbly. Add cold water gradually and bring together into a dough. Chill for 20 minutes.", time: "20" },
        { title: "Prepare the filling", description: "Peel and slice the apples, then toss with sugar, cinnamon, lemon juice, and cornflour until evenly coated." },
        { title: "Roll the base", description: "Roll out half the dough and line a pie dish with it, trimming any excess edges." },
        { title: "Add the filling", description: "Spread the apple mixture evenly into the prepared pie base." },
        { title: "Cover the pie", description: "Roll the remaining dough and place over the filling, or cut into strips for a lattice top. Seal the edges and brush with egg wash or milk." },
        { title: "Bake until golden", description: "Bake in a preheated oven at 190°C for 40-45 minutes until the crust is golden and the filling is bubbling.", time: "45" }
    ],
    tips: [
        "Use firm apples so the filling does not turn mushy",
        "Keep the butter and dough cold for the flakiest crust",
        "Let the pie cool slightly before slicing so the filling sets better",
        "Serve warm with vanilla ice cream or whipped cream for the best experience"
    ],
    nutrition: { protein: "4g", carbs: "48g", fat: "17g" }
},
);
