export enum STATUS {
    "active",
    "favourite",
    "draft",
    "delete",
}

export interface CategoryDTORes {
    name: string;
    slug: string;
    status: STATUS;
    include: boolean;
}

export const categories: CategoryDTORes[] = [
    {
        name: "Appetizer / Sides",
        slug: "appetizer",
        status: STATUS.active,
        include: false,
    },
    {
        name: "Signature Bowl - Chicken",
        slug: "chicken",
        status: STATUS.active,
        include: true,
    },
    {
        name: "Signature Bowl - Beef",
        slug: "beef",
        status: STATUS.active,
        include: true,
    },
    {
        name: "Signature Bowl - Seafood",
        slug: "seafood",
        status: STATUS.active,
        include: true,
    },
    {
        name: "Signature Bowl - Vegetarian",
        slug: "vegetarian",
        status: STATUS.active,
        include: true,
    },
    {
        name: "Special Menu",
        slug: "special-menu",
        status: STATUS.active,
        include: false,
    },
    {
        name: "Kids Meal",
        slug: "kids-meal",
        status: STATUS.active,
        include: false,
    },
    {
        name: "Beverages",
        slug: "beverages",
        status: STATUS.active,
        include: false,
    },
];

// options untuk menu dengan pilihan carb & salad
export interface MenuOptions {
    carbs?: string[];
    salad?: string[];
}

// item umum untuk kategori utama
export interface MenuItem {
    name: string;
    slug?: string;
    price: number;
    description?: string;
    options?: MenuOptions;
    image: string;
    status: STATUS;
    rating?: number;
}

export interface CategoriesMenuDTORes {
    category: string;
    items: MenuItem[];
}

export const foodMenu: Array<CategoriesMenuDTORes> = [
    {
        category: "Appetizer / Sides",
        items: [
            {
                name: "Chicken Satay",
                slug: "chicken-satay",
                price: 27,
                description: "Indonesian char-grilled chicken skewers with soy sauce marination.",
                image: "",
                status: STATUS.favourite,
            },
            {
                name: "Chicken Karaage",
                slug: "chicken-karaage",
                price: 27,
                description: "Chicken karaage with nori topping with sweet chili mayo sauce.",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Chili Cauliflower",
                slug: "chili-cauliflower",
                price: 27,
                description: "Sweet and spicy crispy cauliflower.",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Tartufina Fries",
                slug: "tartufina-fries",
                price: 27,
                description: "Fries with parmesan cheese topping with truffle mayo sauce.",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Bakwan Udang",
                slug: "bakwan-udang",
                price: 22,
                description: "Crispy, golden, savory shrimp and vegetable fritters.",
                image: "",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Signature Bowl - Chicken",
        items: [
            {
                name: "Chicken Satay",
                slug: "chicken-satay",
                price: 37,
                description: "Indonesian char-grilled chicken skewers with soy sauce marination.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Salted Egg Chicken",
                slug: "salted-egg-chicken",
                price: 37,
                description: "Chicken karaage (Japanese style) with salted egg sauce.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Soy Butter Chicken",
                slug: "soy-butter-chicken",
                price: 37,
                description: "Rich and savoury chicken with soy butter marination.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
        ],
    },
    {
        category: "Signature Bowl - Beef",
        items: [
            {
                name: "Beef Rendang",
                slug: "beef-rendang",
                price: 42,
                description: "Indonesian traditional slow-cooked beef curry.",
                image: "",
                status: STATUS.favourite,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Beef Tongue Blackpepper",
                slug: "beef-tongue-blackpepper",
                price: 42,
                description: "Ox-tongue cube with black pepper sauce.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
        ],
    },
    {
        category: "Signature Bowl - Seafood",
        items: [
            {
                name: "Egg Tofu Fish XO",
                slug: "egg-tofu-fish-xo",
                price: 37,
                description: "Egg tofu and Dory fish with Bobi Bowl XO Sauce.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Prawn Woku",
                slug: "prawn-woku",
                price: 42,
                description: "Spicy and aromatic prawn with Indonesian woku sauce.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Soft Shell Chili Crab",
                slug: "soft-shell-chili-crab",
                price: 53,
                description: "Crispy fried soft shell crab coated with rich, tangy sweet chili sauce.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
        ],
    },
    {
        category: "Signature Bowl - Vegetarian",
        items: [
            {
                name: "Tempe Orek & Tahu Wow",
                slug: "tempe-orek-tahu-wow",
                price: 34,
                description: "Stir-fry sweet soy sauce tempe and crispy salt and pepper tofu.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Eggplant Mushroom Yuzu",
                slug: "eggplant-mushroom-yuzu",
                price: 34,
                description: "Stir-fry eggplant and shiitake mushroom with yuzu juice.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Indonesian Bibimbap",
                slug: "indonesian-bibimbap",
                price: 32,
                description:
                    "Korean-inspired rice bowl with steamed vegetables tossed in a rich and fragrant dressing.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
        ],
    },
    {
        category: "Special Menu",
        items: [
            {
                name: "Nasi Kuning Empal Gepuk",
                slug: "nasi-kuning-empal-gepuk",
                price: 42,
                description: "Indonesian yellow rice with tenderized beef and crispy toppings.",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Nasi Goreng Katsu",
                slug: "nasi-goreng-katsu",
                price: 37,
                description: "Indonesian fried rice with chicken katsu.",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Mie Goreng",
                slug: "mie-goreng",
                price: 37,
                description:
                    "A classic Indonesian favorite, stir-fried noodle dish topped with tender chicken, juicy shrimp, fresh vegetables, egg and crispy shallots.",
                image: "",
                status: STATUS.active,
            },
            {
                name: "I Fu Mie",
                slug: "i-fu-mie",
                price: 37,
                description: "Chinese-style crispy fried noodle with vegetables and soy oyster sauce.",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Bobi Bowl Laksa",
                slug: "bobi-bowl-laksa",
                price: 42,
                description:
                    "Silky rice noodles submerged in a fragrant coconut curry broth, topped with prawns, tofu, fish cake and fish balls.",
                image: "",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Kids Meal",
        items: [
            {
                name: "Katsu Bonito",
                slug: "katsu-bonito",
                price: 22,
                description: "Crispy chicken katsu with bonito flakes.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "French Fries"],
                },
            },
            {
                name: "Karaage Nori",
                slug: "karaage-nori",
                price: 22,
                description: "Chicken karaage with nori topping.",
                image: "",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "French Fries"],
                },
            },
        ],
    },
];
export const beveragesMenu: Array<CategoriesMenuDTORes> = [
    {
        category: "Cold Beverages",
        items: [
            {
                name: "Jasmine Iced Tea (Sweetened)",
                slug: "jasmine-iced-tea-sweetened",
                price: 6,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Jasmine Iced Tea (Unsweetened)",
                slug: "jasmine-iced-tea-unsweetened",
                price: 6,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Lemongrass Iced Tea",
                slug: "lemongrass-iced-tea",
                price: 6,
                image: "",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Fresh Juices",
        items: [
            {
                name: "Orange Juice",
                slug: "orange-juice",
                price: 12,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Watermelon Juice",
                slug: "watermelon-juice",
                price: 12,
                image: "",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Freshly Mixed Juices",
        items: [
            {
                name: "Green House",
                slug: "green-house",
                price: 17,
                description: "Celery, Kale, Cucumber, Apple",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Bright Flavor",
                slug: "bright-flavor",
                price: 17,
                description: "Carrot, Turmeric, Ginger, Lemongrass, Orange",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Mrs. Tropical",
                slug: "mrs-tropical",
                price: 17,
                description: "Pineapple, Mint, Apple, Orange",
                image: "",
                status: STATUS.active,
            },
            {
                name: "Mr. Red",
                slug: "mr-red",
                price: 17,
                description: "Beetroot, Apple, Carrot, Lemon",
                image: "",
                status: STATUS.favourite,
            },
        ],
    },
    {
        category: "Hot Beverages",
        items: [
            {
                name: "Jasmine Tea",
                slug: "jasmine-tea",
                price: 6,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Espresso",
                slug: "espresso",
                price: 13,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Coffee Latte",
                slug: "coffee-latte",
                price: 18,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Americano",
                slug: "americano",
                price: 16,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Cappucino",
                slug: "cappucino",
                price: 18,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Spanish Latte",
                slug: "spanish-latte",
                price: 20,
                image: "",
                status: STATUS.active,
            },
        ],
    },
];

export interface BestSellerMenuDTORes {
    slug: string;
    name: string;
    image: string;
    status: STATUS;
    price: string | number;
    description: string | null;
}

export const bestSellerMenu: BestSellerMenuDTORes[] = [
    {
        name: "Chicken Satay",
        slug: "chicken-satay",
        image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Javanese%20Chicken%20Satay%205%20pcs_AhmadTar.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
        price: "27",
        status: STATUS.favourite,
        description: "Indonesian char-grilled chicken skewers with soy sauce marination.",
    },
    {
        name: "Beef Rendang",
        slug: "beef-rendang",
        image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Beef%20Rendang%20Bowl_AhmadTarakji00057.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
        price: "42",
        status: STATUS.favourite,
        description: "Indonesian traditional slow-cooked beef curry.",
    },
    {
        name: "Mr. Red",
        slug: "mr-red",
        image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Mr.%20Red_AhmadTarakji00009.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
        price: "17",
        status: STATUS.favourite,
        description: "Beetroot, Apple, Carrot, Lemon",
    },
];
