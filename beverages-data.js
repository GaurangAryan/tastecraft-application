// ==================== BEVERAGE DATA ====================
const beverages = [
    {
        id: 'b1',
        name: "Masala Chai",
        nameHindi: "मसाला चाय",
        image: "./images/masalachai.png",
        type: "hot",
        typeLabel: "Hot Drink",
        cuisine: "indian",
        rating: 4.9,
        prepTime: "10 mins",
        serves: "2 cups",
        calories: 80,
        costCategory: "budget",
        costRange: "₹15-30",
        tags: ["Hot", "Spiced", "Indian"],
        description: "A bold, aromatic brew of black tea simmered with ginger, cardamom, cinnamon, and cloves — finished with frothy full-cream milk. India's most beloved everyday drink.",
        ingredients: [
            { name: "Black Tea Leaves", amount: "2 tsp", cost: "low" },
            { name: "Whole Milk", amount: "1 cup", cost: "low" },
            { name: "Fresh Ginger", amount: "1 inch piece", cost: "low" },
            { name: "Green Cardamom", amount: "3 pods", cost: "low" },
            { name: "Cinnamon Stick", amount: "1 small", cost: "low" },
            { name: "Cloves", amount: "2", cost: "low" },
            { name: "Black Pepper", amount: "4 corns", cost: "low" },
            { name: "Sugar", amount: "2 tsp", cost: "low" }
        ],
        instructions: [
            { title: "Crush the spices", description: "Lightly crush 3 cardamom pods, 2 cloves, a small cinnamon piece, and 4 peppercorns using a mortar and pestle.", time: "1" },
            { title: "Boil spice water", description: "Add 1 cup water to a saucepan with the crushed spices and grated ginger. Bring to a rolling boil.", time: "3" },
            { title: "Steep the tea", description: "Add 1½ tsp loose-leaf black tea and simmer on medium heat for 2 minutes until the water turns deep brown.", time: "2" },
            { title: "Add milk and simmer", description: "Pour in 1 cup full-cream milk. Bring back to a gentle boil, then simmer 2-3 minutes until deeply amber.", time: "3" },
            { title: "Sweeten and strain", description: "Add sugar to taste. Strain into cups through a fine mesh sieve. Serve piping hot." }
        ],
        tips: [
            "Use thick full-cream milk — skimmed milk gives a thin, watery chai",
            "Simmer longer for a stronger, more intense brew",
            "Kashmiri chai uses pink salt and milk only — try it for a different experience",
            "Fresh ginger gives a sharper flavour than dried ginger powder"
        ],
        nutrition: { protein: "4g", carbs: "12g", fat: "3g" }
    },
    {
        id: 'b2',
        name: "Mango Lassi",
        cuisine: "indian",
        nameHindi: "आम की लस्सी",
        image: "./images/mangolassi.png",
        type: "cold",
        typeLabel: "Cold Drink",
        rating: 4.7,
        prepTime: "5 mins",
        serves: "2 glasses",
        calories: 190,
        costCategory: "budget",
        costRange: "₹40-70",
        tags: ["Cold", "Fruity", "Creamy"],
        description: "Velvety thick yoghurt blended with ripe Alphonso mango pulp, a whisper of cardamom, and a drizzle of honey. Cooling, sweet, and utterly refreshing.",
        ingredients: [
            { name: "Ripe Mango Pulp", amount: "1 cup", cost: "low" },
            { name: "Thick Full-Fat Yoghurt", amount: "1 cup", cost: "low" },
            { name: "Milk", amount: "½ cup", cost: "low" },
            { name: "Cardamom Powder", amount: "¼ tsp", cost: "low" },
            { name: "Honey", amount: "1 tbsp", cost: "medium" },
            { name: "Rose Water", amount: "1 tsp (optional)", cost: "medium" },
            { name: "Ice Cubes", amount: "6-8", cost: "low" }
        ],
        instructions: [
            { title: "Prep the mango", description: "Use fresh Alphonso mango pulp or good-quality canned Alphonso pulp. Scoop 1 cup into the blender." },
            { title: "Add yoghurt and milk", description: "Add 1 cup thick full-fat yoghurt and ½ cup chilled milk to the blender." },
            { title: "Season", description: "Add a pinch of cardamom powder, 1 tbsp honey, and a splash of rose water if using." },
            { title: "Blend until frothy", description: "Blend on high for 30-40 seconds until completely smooth and frothy. Taste and adjust sweetness.", time: "1" },
            { title: "Serve over ice", description: "Pour over ice cubes into tall glasses. Garnish with a slice of mango and a sprinkle of cardamom." }
        ],
        tips: [
            "Alphonso (Hapus) mango gives the best flavour — avoid raw or fibrous varieties",
            "Chill the yoghurt and milk beforehand for the coldest lassi",
            "For a salty lassi, skip honey and add a pinch of roasted cumin powder instead",
            "Adjust thickness with more or less milk"
        ],
        nutrition: { protein: "6g", carbs: "32g", fat: "5g" }
    },
    {
        id: 'b3',
        name: "Cucumber Mint Cooler",
        cuisine: "indian",
        nameHindi: "खीरा पुदीना कूलर",
        image: "./images/cucumbercooler.png",
        type: "healthy",
        typeLabel: "Healthy",
        rating: 4.5,
        prepTime: "8 mins",
        serves: "2 glasses",
        calories: 35,
        costCategory: "budget",
        costRange: "₹20-40",
        tags: ["Cold", "Healthy", "Detox"],
        description: "A light, hydrating blend of fresh cucumber, fragrant mint leaves, lime juice, and chilled water. Zero guilt, maximum refreshment — perfect for scorching summer afternoons.",
        ingredients: [
            { name: "Fresh Cucumber", amount: "1 medium", cost: "low" },
            { name: "Mint Leaves", amount: "large handful", cost: "low" },
            { name: "Lime Juice", amount: "juice of 1 lime", cost: "low" },
            { name: "Chilled Water", amount: "1 cup", cost: "low" },
            { name: "Honey or Sugar", amount: "1 tsp", cost: "low" },
            { name: "Black Salt", amount: "a pinch", cost: "low" },
            { name: "Ice Cubes", amount: "8-10", cost: "low" }
        ],
        instructions: [
            { title: "Prep cucumber", description: "Peel and roughly chop 1 medium cucumber into chunks. No need to deseed." },
            { title: "Blend everything", description: "Add cucumber to blender with a generous handful of fresh mint leaves, lime juice, honey, black salt, and 1 cup chilled water.", time: "1" },
            { title: "Strain", description: "Pour through a fine mesh sieve or muslin cloth, pressing firmly to extract all the juice." },
            { title: "Taste and adjust", description: "Adjust lime and sweetness to preference. Add more water if too strong." },
            { title: "Serve immediately", description: "Pour over plenty of ice. Garnish with a mint sprig, cucumber slice, and a wedge of lime." }
        ],
        tips: [
            "Use black salt (kala namak) — it adds a distinctive sulphuric depth that regular salt can't match",
            "For a sparkling version, top with chilled soda water instead of still water",
            "Fresh mint is essential — dried mint won't work for this",
            "Drink within 30 minutes of making for the freshest flavour"
        ],
        nutrition: { protein: "1g", carbs: "7g", fat: "0g" }
    },
    {
        id: 'b4',
        name: "Cold Coffee",
        cuisine: "continental",
        nameHindi: "कोल्ड कॉफ़ी",
        image: "./images/coldcoffee.png",
        type: "cold",
        typeLabel: "Cold Drink",
        rating: 4.6,
        prepTime: "7 mins",
        serves: "2 glasses",
        calories: 180,
        costCategory: "budget",
        costRange: "₹30-60",
        tags: ["Cold", "Coffee", "Creamy"],
        description: "The beloved Indian café-style cold coffee — thick, frothy, perfectly sweetened, and blended with ice cream for that extra richness. Better than any café version.",
        ingredients: [
            { name: "Instant Coffee", amount: "2 heaped tsp", cost: "medium" },
            { name: "Hot Water", amount: "3 tbsp", cost: "low" },
            { name: "Sugar", amount: "2 tbsp", cost: "low" },
            { name: "Full-Cream Milk", amount: "1½ cups (chilled)", cost: "low" },
            { name: "Vanilla Ice Cream", amount: "2 scoops", cost: "medium" },
            { name: "Ice Cubes", amount: "8-10", cost: "low" },
            { name: "Chocolate Sauce", amount: "for drizzle (optional)", cost: "medium" }
        ],
        instructions: [
            { title: "Dissolve coffee", description: "Dissolve 2 tsp instant coffee and 2 tbsp sugar in 3 tbsp hot water. Stir until completely dissolved. Let it cool 2 minutes.", time: "2" },
            { title: "Blend with milk", description: "Add the coffee mixture, 1½ cups chilled milk, 2 scoops vanilla ice cream, and ice cubes to a blender.", time: "1" },
            { title: "Blend until frothy", description: "Blend on high for 45 seconds until thick, frothy, and well-combined.", time: "1" },
            { title: "Serve immediately", description: "Pour into tall chilled glasses. Drizzle with chocolate sauce if desired. Serve with a straw." }
        ],
        tips: [
            "Freeze leftover coffee as ice cubes — use them instead of plain ice for an even stronger flavour",
            "Use good-quality instant coffee — Bru Gold or Nescafé Gold work best",
            "For a healthier version, skip ice cream and use an extra ½ cup milk with a banana for thickness",
            "Add a pinch of cinnamon on top for a café-style finish"
        ],
        nutrition: { protein: "6g", carbs: "28g", fat: "8g" }
    },
    {
        id: 'b5',
        name: "Rose Sharbat",
        cuisine: "indian",
        nameHindi: "गुलाब शर्बत",
        image: "./images/rosesharbat.png",
        type: "cold",
        typeLabel: "Cold Drink",
        rating: 4.4,
        prepTime: "5 mins",
        serves: "2 glasses",
        calories: 110,
        costCategory: "budget",
        costRange: "₹20-40",
        tags: ["Cold", "Floral", "Summer"],
        description: "A delicate, cooling drink made with rose syrup, chilled milk, and basil seeds (sabja). Sweet, fragrant, and deeply nostalgic — India's answer to summer in a glass.",
        ingredients: [
            { name: "Rose Syrup (Rooh Afza)", amount: "3 tbsp", cost: "low" },
            { name: "Chilled Milk", amount: "1½ cups", cost: "low" },
            { name: "Basil Seeds (Sabja)", amount: "1 tsp", cost: "low" },
            { name: "Cold Water", amount: "½ cup", cost: "low" },
            { name: "Ice Cubes", amount: "8", cost: "low" }
        ],
        instructions: [
            { title: "Soak sabja seeds", description: "Soak 1 tsp basil seeds in ¼ cup cold water for 10 minutes until they swell into jelly-like beads.", time: "10" },
            { title: "Mix rose syrup", description: "Add 3 tbsp rose syrup (Rooh Afza or homemade) to a large glass or pitcher." },
            { title: "Add milk", description: "Pour in 1½ cups chilled milk and stir well until evenly coloured pink." },
            { title: "Add seeds and ice", description: "Stir in the soaked and drained sabja seeds. Add plenty of ice cubes." },
            { title: "Stir and serve", description: "Stir gently, pour into glasses, and serve immediately while ice cold." }
        ],
        tips: [
            "Rooh Afza is the classic brand — it has the perfect balance of rose and kewra",
            "Sabja seeds (sweet basil seeds) are different from chia seeds — they swell faster and have a more neutral taste",
            "For a dairy-free version, use chilled coconut water instead of milk — equally refreshing",
            "Add a squeeze of lemon for a slight tartness that balances the sweetness"
        ],
        nutrition: { protein: "4g", carbs: "20g", fat: "3g" }
    },
    {
        id: 'b6',
        name: "Nimbu Pani",
        cuisine: "indian",
        nameHindi: "नींबू पानी",
        image: "./images/nimbupani.png",
        type: "healthy",
        typeLabel: "Healthy",
        rating: 4.8,
        prepTime: "5 mins",
        serves: "2 glasses",
        calories: 45,
        costCategory: "budget",
        costRange: "₹10-20",
        tags: ["Cold", "Healthy", "Classic"],
        description: "India's original electrolyte drink — fresh lime juice with black salt, roasted cumin, and a touch of sugar. Simple, restorative, and more refreshing than any bottled drink.",
        ingredients: [
            { name: "Fresh Limes", amount: "3 large", cost: "low" },
            { name: "Black Salt (Kala Namak)", amount: "½ tsp", cost: "low" },
            { name: "Roasted Cumin Powder", amount: "¼ tsp", cost: "low" },
            { name: "Sugar or Honey", amount: "2 tsp", cost: "low" },
            { name: "Chilled Water", amount: "2 cups", cost: "low" },
            { name: "Ice Cubes", amount: "10", cost: "low" },
            { name: "Mint Leaves", amount: "few leaves", cost: "low" }
        ],
        instructions: [
            { title: "Juice the limes", description: "Roll limes on the counter pressing firmly before cutting — this releases more juice. Squeeze all 3 limes into a pitcher." },
            { title: "Add seasoning", description: "Add black salt, roasted cumin powder, and sugar/honey. Stir until the sugar dissolves completely." },
            { title: "Add water", description: "Pour in 2 cups of chilled water and stir well. Taste and adjust — it should be tangy, slightly salty, with a hint of sweetness." },
            { title: "Serve over ice", description: "Pour into tall glasses filled with ice cubes. Garnish with a mint sprig and a slice of lime on the rim." }
        ],
        tips: [
            "Black salt is the secret ingredient — it adds a mineral depth that makes this truly special",
            "For a masala soda version: use chilled soda water instead of still water",
            "Roast cumin seeds yourself and grind them for the freshest flavour",
            "Add a thin slice of ginger if you want extra warmth and zing"
        ],
        nutrition: { protein: "0g", carbs: "10g", fat: "0g" }
    }
];

// ==================== ADDITIONAL CONTINENTAL BEVERAGES ====================
beverages.push(
    {
        id: 'b7',
        name: "Classic Lemonade",
        nameHindi: "क्लासिक लेमोनेड",
        image: "./images/lemonade.png",
        type: "cold",
        typeLabel: "Cold Drink",
        cuisine: "continental",
        prepTime: "5 mins",
        serves: "2 glasses",
        calories: 90,
        costCategory: "budget",
        costRange: "₹30-50",
        tags: ["Cold", "Citrus", "Refreshing"],
        description: "Bright, zingy fresh-squeezed lemon juice balanced with just enough sugar and chilled water. The timeless classic that needs nothing but the best lemons and cold water.",
        ingredients: [
            { name: "Fresh Lemons", amount: "4 large", cost: "low" },
            { name: "Caster Sugar", amount: "3 tbsp", cost: "low" },
            { name: "Chilled Water", amount: "2 cups", cost: "low" },
            { name: "Ice Cubes", amount: "10-12", cost: "low" },
            { name: "Mint Leaves", amount: "small handful", cost: "low" }
        ],
        instructions: [
            { title: "Make simple syrup", description: "Dissolve 3 tbsp caster sugar in 3 tbsp warm water, stirring until completely clear. Let cool.", time: "2" },
            { title: "Juice the lemons", description: "Roll lemons firmly before cutting to maximise juice. Squeeze all 4 lemons through a strainer into a pitcher." },
            { title: "Combine", description: "Add the cooled syrup to the lemon juice and stir well. Pour in 2 cups of chilled water." },
            { title: "Taste and serve", description: "Taste — adjust sweetness or tartness. Pour over ice into tall glasses. Garnish with a lemon slice and mint." }
        ],
        tips: [
            "Warm the lemons for 10 seconds in the microwave before squeezing — you get 30% more juice",
            "Simple syrup dissolves better than granulated sugar in cold drinks",
            "Add a sprig of rosemary to the syrup while it cools for a herby twist",
            "For sparkling lemonade, swap still water for chilled soda water"
        ],
        nutrition: { protein: "0g", carbs: "22g", fat: "0g" }
    },
    {
        id: 'b8',
        name: "Hot Chocolate",
        nameHindi: "हॉट चॉकलेट",
        image: "./images/hotchocolate.png",
        type: "hot",
        typeLabel: "Hot Drink",
        cuisine: "continental",
        prepTime: "8 mins",
        serves: "2 mugs",
        calories: 210,
        costCategory: "budget",
        costRange: "₹40-70",
        tags: ["Hot", "Chocolate", "Comfort"],
        description: "Rich, velvety hot chocolate made with real dark chocolate melted into steamed whole milk — topped with whipped cream. A luxurious hug in a mug.",
        ingredients: [
            { name: "Dark Chocolate (60-70%)", amount: "60g", cost: "medium" },
            { name: "Whole Milk", amount: "2 cups", cost: "low" },
            { name: "Sugar", amount: "1 tbsp", cost: "low" },
            { name: "Vanilla Extract", amount: "¼ tsp", cost: "medium" },
            { name: "Whipped Cream", amount: "to top", cost: "medium" },
            { name: "Cocoa Powder", amount: "for dusting", cost: "medium" }
        ],
        instructions: [
            { title: "Chop chocolate", description: "Finely chop 60g dark chocolate into small pieces so it melts quickly and evenly." },
            { title: "Warm milk", description: "Heat 2 cups whole milk in a saucepan over medium heat until just steaming — do not boil.", time: "3" },
            { title: "Melt and whisk", description: "Add chopped chocolate and sugar to the warm milk. Whisk continuously until completely smooth and glossy.", time: "3" },
            { title: "Finish and serve", description: "Remove from heat, add vanilla extract. Pour into mugs. Top with whipped cream and a dusting of cocoa powder." }
        ],
        tips: [
            "Use real dark chocolate bars — cocoa powder gives a weaker, less silky result",
            "Don't let the milk boil — boiling destroys the cocoa flavour compounds",
            "Add a pinch of sea salt and a pinch of cinnamon to deepen the chocolate flavour",
            "For a Mexican twist, add a tiny pinch of chilli powder"
        ],
        nutrition: { protein: "7g", carbs: "26g", fat: "14g" }
    },
    {
        id: 'b9',
        name: "Virgin Mojito",
        nameHindi: "वर्जिन मोजिटो",
        image: "./images/virginmojito.png",
        type: "cold",
        typeLabel: "Cold Drink",
        cuisine: "continental",
        prepTime: "5 mins",
        serves: "2 glasses",
        calories: 65,
        costCategory: "budget",
        costRange: "₹30-55",
        tags: ["Cold", "Mocktail", "Mint"],
        description: "Muddled fresh mint and lime juice topped with sparkling soda water and crushed ice. Cuba's most beloved cocktail — in its elegant non-alcoholic form.",
        ingredients: [
            { name: "Fresh Limes", amount: "2", cost: "low" },
            { name: "Fresh Mint Leaves", amount: "20-25 leaves", cost: "low" },
            { name: "Caster Sugar", amount: "2 tbsp", cost: "low" },
            { name: "Sparkling Water / Club Soda", amount: "1½ cups (chilled)", cost: "low" },
            { name: "Crushed Ice", amount: "2 cups", cost: "low" }
        ],
        instructions: [
            { title: "Muddle mint and lime", description: "Add mint leaves and lime wedges to a glass. Add sugar and muddle firmly with a muddler or back of a spoon — press to release oils and juice." },
            { title: "Add crushed ice", description: "Fill the glass with crushed ice up to about two-thirds." },
            { title: "Top with soda", description: "Pour in chilled sparkling water or club soda slowly, letting it cascade over the ice.", time: "1" },
            { title: "Stir gently and serve", description: "Give a gentle stir from the bottom. Garnish with extra mint sprigs and a lime wheel." }
        ],
        tips: [
            "Muddle mint gently — over-muddling releases bitter compounds from the stems",
            "Crushed ice is key — it chills faster and dilutes at the right rate",
            "Use fresh lime juice only — bottled lime juice makes a pale imitation",
            "Add a splash of coconut water instead of soda for a tropical variation"
        ],
        nutrition: { protein: "0g", carbs: "14g", fat: "0g" }
    },
    {
        id: 'b10',
        name: "Iced Matcha Latte",
        nameHindi: "आइस्ड माचा लट्टे",
        image: "./images/matchalatte.png",
        type: "cold",
        typeLabel: "Cold Drink",
        cuisine: "continental",
        prepTime: "5 mins",
        serves: "1 glass",
        calories: 120,
        costCategory: "moderate",
        costRange: "₹80-130",
        tags: ["Cold", "Matcha", "Healthy"],
        description: "Ceremonial-grade matcha whisked smooth with a splash of hot water, poured over cold oat milk and ice. Earthy, creamy, and deeply energising.",
        ingredients: [
            { name: "Ceremonial Matcha Powder", amount: "1½ tsp", cost: "high" },
            { name: "Hot Water (70°C)", amount: "3 tbsp", cost: "low" },
            { name: "Oat Milk (or regular milk)", amount: "200ml (chilled)", cost: "medium" },
            { name: "Honey or Sugar Syrup", amount: "1 tsp", cost: "low" },
            { name: "Ice Cubes", amount: "8-10", cost: "low" }
        ],
        instructions: [
            { title: "Sift and whisk matcha", description: "Sift 1½ tsp matcha powder into a bowl to remove lumps. Add 3 tbsp hot water (70°C — not boiling) and whisk in a brisk W-motion until frothy and smooth.", time: "2" },
            { title: "Sweeten", description: "Stir in honey or sugar syrup to the matcha mixture while still warm." },
            { title: "Assemble", description: "Fill a tall glass with ice. Pour in 200ml chilled oat milk." },
            { title: "Layer the matcha", description: "Slowly pour the matcha mixture over the milk — it will create a beautiful green layer. Stir gently before drinking." }
        ],
        tips: [
            "Use water at 70°C — boiling water makes matcha bitter and destroys its antioxidants",
            "Ceremonial grade matcha is sweeter and smoother — culinary grade is fine but more bitter",
            "Oat milk complements matcha's earthiness better than regular cow's milk",
            "For extra froth, shake the matcha mixture in a small jar before pouring"
        ],
        nutrition: { protein: "3g", carbs: "16g", fat: "3g" }
    },
    {
        id: 'b11',
        name: "Strawberry Smoothie",
        nameHindi: "स्ट्रॉबेरी स्मूदी",
        image: "./images/strawberrysmoothie.png",
        type: "healthy",
        typeLabel: "Healthy",
        cuisine: "continental",
        prepTime: "5 mins",
        serves: "2 glasses",
        calories: 150,
        costCategory: "budget",
        costRange: "₹50-90",
        tags: ["Cold", "Fruity", "Healthy"],
        description: "Thick, vibrant strawberry smoothie blended with Greek yogurt, a ripe banana, and a squeeze of honey. Naturally sweet, gloriously pink, and nutritious.",
        ingredients: [
            { name: "Fresh Strawberries", amount: "200g", cost: "medium" },
            { name: "Ripe Banana", amount: "1 medium", cost: "low" },
            { name: "Greek Yogurt", amount: "½ cup", cost: "medium" },
            { name: "Honey", amount: "1 tbsp", cost: "medium" },
            { name: "Milk or Oat Milk", amount: "½ cup (chilled)", cost: "low" },
            { name: "Ice Cubes", amount: "6-8", cost: "low" }
        ],
        instructions: [
            { title: "Prep fruit", description: "Hull and halve the strawberries. Peel and break the banana into chunks. If strawberries are frozen, skip the ice." },
            { title: "Blend everything", description: "Add strawberries, banana, Greek yogurt, honey, chilled milk, and ice to a blender.", time: "1" },
            { title: "Blend until smooth", description: "Blend on high for 45-60 seconds until completely smooth and thick. Taste and adjust sweetness.", time: "1" },
            { title: "Serve immediately", description: "Pour into chilled glasses. Garnish with a halved strawberry on the rim." }
        ],
        tips: [
            "Frozen strawberries give an even thicker, icier smoothie — and they're available year-round",
            "The banana provides natural sweetness — a very ripe banana needs no extra honey",
            "Greek yogurt adds protein and thickness — plain yogurt works too",
            "Add a tablespoon of chia seeds for extra fibre and texture"
        ],
        nutrition: { protein: "6g", carbs: "30g", fat: "2g" }
    }
);

// ==================== ADDITIONAL INDIAN BEVERAGE ====================
beverages.push(
    {
        id: 'b12',
        name: "Thandai",
        nameHindi: "ठंडाई",
        image: "./images/thandai.png",
        type: "cold",
        typeLabel: "Cold Drink",
        cuisine: "indian",
        prepTime: "15 mins + 2hr chill",
        serves: "4 glasses",
        calories: 160,
        costCategory: "budget",
        costRange: "₹30-55",
        tags: ["Cold", "Festive", "Indian"],
        description: "A royal chilled milk drink infused with almonds, fennel, rose petals, cardamom, and saffron — traditionally served during Holi. Aromatic, creamy, and deeply refreshing.",
        ingredients: [
            { name: "Full-Cream Milk", amount: "1 litre", cost: "low" },
            { name: "Almonds (soaked)", amount: "15", cost: "medium" },
            { name: "Cashews", amount: "10", cost: "medium" },
            { name: "Melon Seeds (Magaz)", amount: "2 tbsp", cost: "medium" },
            { name: "Fennel Seeds", amount: "1 tsp", cost: "low" },
            { name: "Green Cardamom", amount: "4 pods", cost: "low" },
            { name: "Black Peppercorns", amount: "4", cost: "low" },
            { name: "Dried Rose Petals", amount: "1 tbsp", cost: "medium" },
            { name: "Saffron Strands", amount: "a generous pinch", cost: "high" },
            { name: "Sugar", amount: "4 tbsp", cost: "low" },
            { name: "Ice Cubes", amount: "to serve", cost: "low" }
        ],
        instructions: [
            { title: "Soak the nuts", description: "Soak almonds, cashews, and melon seeds in water for 2 hours. Drain and peel the almonds.", time: "120" },
            { title: "Make the paste", description: "Blend soaked nuts with fennel seeds, cardamom, peppercorns, rose petals, and 3 tbsp milk into a very smooth, fine paste." },
            { title: "Warm saffron milk", description: "Warm ¼ cup milk and steep the saffron strands for 5 minutes until golden.", time: "5" },
            { title: "Combine and sweeten", description: "Whisk the nut paste into the remaining cold milk. Add saffron milk and sugar. Stir until sugar dissolves completely." },
            { title: "Strain and chill", description: "Strain through a fine muslin cloth, pressing firmly. Refrigerate for at least 2 hours.", time: "120" },
            { title: "Serve cold", description: "Pour into glasses over ice. Garnish with rose petals, a pinch of saffron, and crushed pistachios." }
        ],
        tips: [
            "Blend the nut paste as fine as possible — a coarse paste makes the drink gritty",
            "Soaking the nuts overnight makes them blend smoother and improves flavour",
            "Good-quality Kashmiri saffron gives the most vivid colour and aroma",
            "The longer it chills, the better the flavours meld — overnight is ideal"
        ],
        nutrition: { protein: "6g", carbs: "22g", fat: "9g" }
    },

    {
        id: 'b13',
        name: "Irani Chai",
        nameHindi: "ईरानी चाय",
        image: "./images/iranichai.png",
        type: "hot",
        typeLabel: "Hot Beverage",
        cuisine: "indian",
        prepTime: "20 mins",
        serves: "2 cups",
        calories: 180,
        costCategory: "budget",
        costRange: "₹20-40",
        tags: ["Hot", "Tea", "Hyderabadi"],
        description: "A rich and creamy Hyderabadi-style tea made with slow-brewed tea decoction, thick milk, and sugar. Smooth, fragrant, and best enjoyed with Osmania biscuits.",
        ingredients: [
            { name: "Full-Cream Milk", amount: "2 cups", cost: "low" },
            { name: "Water", amount: "1 cup", cost: "low" },
            { name: "Tea Leaves", amount: "2 tbsp", cost: "low" },
            { name: "Sugar", amount: "3 tbsp", cost: "low" },
            { name: "Condensed Milk", amount: "2 tbsp", cost: "medium" },
            { name: "Fresh Cream (optional)", amount: "1 tbsp", cost: "medium" }
        ],
        instructions: [
            { title: "Boil the tea decoction", description: "In a saucepan, boil water and tea leaves on medium heat for 8–10 minutes until strong and reduced slightly.", time: "10" },
            { title: "Simmer the milk", description: "In another pan, boil the milk and simmer it for 5–7 minutes until slightly thick and creamy.", time: "7" },
            { title: "Sweeten the milk", description: "Add sugar and condensed milk to the simmering milk. Stir well until fully dissolved." },
            { title: "Strain the tea", description: "Strain the strong tea decoction into the sweetened milk." },
            { title: "Mix and froth", description: "Stir well and pour between two cups once or twice for a frothy texture." },
            { title: "Serve hot", description: "Pour into cups and serve hot with biscuits or bun maska." }
        ],
        tips: [
            "Use strong tea leaves for the authentic Irani chai flavour",
            "Simmering the milk longer gives a richer and creamier taste",
            "Condensed milk adds body and sweetness just like café-style Irani chai",
            "Serve immediately while hot and frothy"
        ],
        nutrition: { protein: "5g", carbs: "24g", fat: "7g" }
    },
    {
        id: 'b14',
        name: "South Indian Filter Coffee",
        nameHindi: "साउथ इंडियन फ़िल्टर कॉफी",
        image: "./images/filtercoffee.png",
        type: "hot",
        typeLabel: "Hot Beverage",
        cuisine: "indian",
        prepTime: "15 mins",
        serves: "2 cups",
        calories: 120,
        costCategory: "budget",
        costRange: "₹15-35",
        tags: ["Hot", "Coffee", "South Indian"],
        description: "A bold and aromatic traditional coffee made with fresh decoction and hot milk, served frothy in a steel tumbler and dabarah. Strong, comforting, and iconic.",
        ingredients: [
            { name: "Filter Coffee Powder", amount: "4 tbsp", cost: "medium" },
            { name: "Hot Water", amount: "¾ cup", cost: "low" },
            { name: "Full-Cream Milk", amount: "2 cups", cost: "low" },
            { name: "Sugar", amount: "2-3 tbsp", cost: "low" }
        ],
        instructions: [
            { title: "Prepare the decoction", description: "Add filter coffee powder to the upper chamber of the coffee filter. Pour hot water over it, cover, and let the decoction drip slowly for 10 minutes.", time: "10" },
            { title: "Boil the milk", description: "Heat the milk until hot and slightly frothy, but do not overboil.", time: "5" },
            { title: "Add sugar", description: "Place sugar into serving tumblers or cups according to taste." },
            { title: "Pour decoction", description: "Add 2–3 tbsp strong coffee decoction into each tumbler." },
            { title: "Mix with milk", description: "Pour hot milk over the decoction and sugar." },
            { title: "Froth and serve", description: "Pour back and forth between a tumbler and dabarah to create froth. Serve hot." }
        ],
        tips: [
            "Use freshly ground filter coffee powder for best aroma",
            "A mix of coffee and chicory gives authentic South Indian flavour",
            "Do not make the decoction too weak — it should be bold and concentrated",
            "Frothing by pouring between vessels improves both taste and presentation"
        ],
        nutrition: { protein: "4g", carbs: "14g", fat: "5g" }
    },
    {
        id: 'b15',
        name: "Kashmiri Gulabi Chai",
        nameHindi: "कश्मीरी गुलाबी चाय",
        image: "./images/gulabichai.png",
        type: "hot",
        typeLabel: "Hot Beverage",
        cuisine: "indian",
        prepTime: "30 mins",
        serves: "3 cups",
        calories: 140,
        costCategory: "budget",
        costRange: "₹25-50",
        tags: ["Hot", "Tea", "Kashmiri", "Festive"],
        description: "A beautiful pink tea from Kashmir made with green tea leaves, baking soda, milk, and aromatic spices. Creamy, delicate, and lightly salted or sweetened for a unique warming drink.",
        ingredients: [
            { name: "Kashmiri Green Tea Leaves", amount: "2 tbsp", cost: "medium" },
            { name: "Water", amount: "3 cups", cost: "low" },
            { name: "Cold Water", amount: "1 cup", cost: "low" },
            { name: "Baking Soda", amount: "a pinch", cost: "low" },
            { name: "Full-Cream Milk", amount: "2 cups", cost: "low" },
            { name: "Sugar", amount: "2 tbsp", cost: "low" },
            { name: "Crushed Cardamom", amount: "2 pods", cost: "low" },
            { name: "Saffron Strands", amount: "a pinch", cost: "high" },
            { name: "Chopped Pistachios/Almonds", amount: "1 tbsp", cost: "medium" }
        ],
        instructions: [
            { title: "Boil the tea leaves", description: "In a saucepan, boil green tea leaves with 3 cups water for 10 minutes until reduced and strong.", time: "10" },
            { title: "Add baking soda", description: "Add a pinch of baking soda and continue boiling. The tea will deepen to a reddish shade." },
            { title: "Shock with cold water", description: "Add cold water and whisk or stir vigorously for 1–2 minutes to help develop the pink colour.", time: "2" },
            { title: "Strain the kahwa base", description: "Strain the tea base into another pan, pressing well to extract maximum flavour." },
            { title: "Add milk and flavouring", description: "Add milk, cardamom, saffron, and sugar. Simmer gently for 5–7 minutes until the tea turns creamy pink.", time: "7" },
            { title: "Serve hot", description: "Pour into cups and garnish with chopped pistachios or almonds." }
        ],
        tips: [
            "The pink colour develops from the reaction of tea and baking soda, so do not skip it",
            "Whisking after adding cold water helps enhance the signature rosy shade",
            "You can make it lightly salted instead of sweet for a more traditional variation",
            "Simmer gently after adding milk to keep the texture smooth and creamy"
        ],
        nutrition: { protein: "4g", carbs: "16g", fat: "6g" }
    },
    {
        id: 'b16',
        name: "Cappuccino",
        nameHindi: "कैपुचीनो",
        image: "./images/cappuccino.png",
        type: "hot",
        typeLabel: "Hot Beverage",
        cuisine: "continental",
        prepTime: "10 mins",
        serves: "1 cup",
        calories: 130,
        costCategory: "budget",
        costRange: "₹25-50",
        tags: ["Hot", "Coffee", "Creamy"],
        description: "A classic Italian coffee made with strong espresso, steamed milk, and a thick layer of milk foam. Rich, smooth, and comforting with a café-style finish.",
        ingredients: [
            { name: "Espresso Coffee", amount: "1 shot", cost: "medium" },
            { name: "Milk", amount: "1 cup", cost: "low" },
            { name: "Sugar", amount: "1-2 tsp", cost: "low" },
            { name: "Cocoa Powder", amount: "a pinch", cost: "low" },
            { name: "Coffee Powder for garnish", amount: "a pinch", cost: "low" }
        ],
        instructions: [
            { title: "Prepare the coffee", description: "Brew one strong shot of espresso or make a very strong instant coffee base." },
            { title: "Heat the milk", description: "Warm the milk in a pan or microwave until hot but not boiling.", time: "3" },
            { title: "Froth the milk", description: "Whisk or froth the hot milk until it becomes airy and foamy.", time: "2" },
            { title: "Assemble the cappuccino", description: "Pour the coffee into a cup, add sugar if desired, then pour in the steamed milk." },
            { title: "Top with foam", description: "Spoon the thick milk foam on top to create the signature cappuccino layer." },
            { title: "Serve hot", description: "Dust with cocoa powder or coffee powder and serve immediately." }
        ],
        tips: [
            "Use full-fat milk for thicker and creamier foam",
            "Do not boil the milk or it may lose its smooth texture",
            "A handheld frother gives the best café-style result",
            "Serve immediately before the foam settles"
        ],
        nutrition: { protein: "5g", carbs: "12g", fat: "5g" }
    },
    {
        id: 'b17',
        name: "Iced Tea",
        nameHindi: "आइस्ड टी",
        image: "./images/icedtea.png",
        type: "cold",
        typeLabel: "Cold Drink",
        cuisine: "continental",
        prepTime: "15 mins + chill",
        serves: "2 glasses",
        calories: 70,
        costCategory: "budget",
        costRange: "₹20-40",
        tags: ["Cold", "Refreshing", "Tea"],
        description: "A light and refreshing chilled tea drink infused with lemon and served over ice. Crisp, cooling, and perfect for hot afternoons.",
        ingredients: [
            { name: "Tea Bags / Black Tea", amount: "2 bags / 2 tsp", cost: "low" },
            { name: "Water", amount: "2 cups", cost: "low" },
            { name: "Sugar or Honey", amount: "2 tbsp", cost: "low" },
            { name: "Lemon Juice", amount: "2 tbsp", cost: "low" },
            { name: "Ice Cubes", amount: "as needed", cost: "low" },
            { name: "Lemon Slices", amount: "for garnish", cost: "low" },
            { name: "Mint Leaves", amount: "a few", cost: "low" }
        ],
        instructions: [
            { title: "Brew the tea", description: "Boil water and steep the tea bags or tea leaves for 3-4 minutes.", time: "4" },
            { title: "Sweeten it", description: "Add sugar or honey while the tea is still warm and stir until dissolved." },
            { title: "Cool the tea", description: "Let the tea come to room temperature, then refrigerate until chilled.", time: "30" },
            { title: "Add lemon", description: "Stir in fresh lemon juice once the tea is cool." },
            { title: "Assemble the drink", description: "Fill glasses with ice cubes and pour the chilled tea over them." },
            { title: "Serve cold", description: "Garnish with lemon slices and mint leaves before serving." }
        ],
        tips: [
            "Do not over-steep the tea or it can turn bitter",
            "Add lemon only after cooling to keep the taste fresh",
            "You can add peach or berry syrup for flavored iced tea",
            "Use plenty of ice for the best refreshing effect"
        ],
        nutrition: { protein: "0g", carbs: "17g", fat: "0g" }
    },
    {
        id: 'b18',
        name: "Milkshake",
        nameHindi: "मिल्कशेक",
        image: "./images/milkshake.png",
        type: "cold",
        typeLabel: "Cold Drink",
        cuisine: "continental",
        prepTime: "10 mins",
        serves: "2 glasses",
        calories: 220,
        costCategory: "budget",
        costRange: "₹30-60",
        tags: ["Cold", "Sweet", "Creamy"],
        description: "A thick, creamy, and indulgent chilled drink made with milk, ice cream, and flavoring ingredients like chocolate, vanilla, or fruit. Smooth, rich, and loved by all ages.",
        ingredients: [
            { name: "Chilled Milk", amount: "2 cups", cost: "low" },
            { name: "Vanilla Ice Cream", amount: "3 scoops", cost: "medium" },
            { name: "Sugar", amount: "1-2 tbsp", cost: "low" },
            { name: "Chocolate Syrup / Fruit / Vanilla Essence", amount: "as desired", cost: "medium" },
            { name: "Ice Cubes", amount: "4-5", cost: "low" },
            { name: "Whipped Cream (optional)", amount: "for topping", cost: "medium" }
        ],
        instructions: [
            { title: "Add ingredients to blender", description: "Combine chilled milk, ice cream, sugar, flavoring of choice, and ice cubes in a blender." },
            { title: "Blend until smooth", description: "Blend for 30-40 seconds until thick, creamy, and frothy.", time: "1" },
            { title: "Check consistency", description: "Add a little more milk if too thick, or more ice cream if too thin." },
            { title: "Pour into glasses", description: "Transfer the milkshake into tall serving glasses." },
            { title: "Decorate", description: "Top with whipped cream, chocolate drizzle, or fruit pieces if desired." },
            { title: "Serve chilled", description: "Serve immediately while cold and creamy." }
        ],
        tips: [
            "Use very cold milk for a thicker milkshake",
            "Banana, mango, chocolate, and strawberry all work well as flavor options",
            "Do not over-blend or the shake may become too thin",
            "Serve immediately for best texture and taste"
        ],
        nutrition: { protein: "6g", carbs: "28g", fat: "9g" }
    }
);
