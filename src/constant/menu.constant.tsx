enum STATUS {
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

    price: number;
    description?: string;
    options?: MenuOptions; // jika tidak ada options, bisa dihilangkan atau set jadi {}
    image: string; // URL gambar, nanti Anda isi manual
}

// item khusus untuk beverages (tanpa options)
export interface BeverageItem {
    name: string;
    slug?: string;
    price: number;
    description?: string;
    image: string; // URL gambar, nanti Anda isi manual
}

// struktur subkategori di beverages
export interface Subcategory {
    subcat: string;
    items: BeverageItem[];
}

// kategori umum (Appetizer, Signature Bowl, Special Menu, Kids Meal, dll.)
export interface Category {
    category: string;
    items: MenuItem[];
}

// kategori khusus Beverages Menu
export interface BeveragesMenu {
    category: "Beverages Menu";
    subcategories: Subcategory[];
}

// gabungan semua kategori
export type CategoriesMenuDTORes = Array<Category | BeveragesMenu>;

export const categoriesMenu: CategoriesMenuDTORes = [
    {
        category: "Appetizer / Sides",
        items: [
            {
                name: "Chicken Satay",
                price: 27,
                description: "Indonesian char-grilled chicken skewers with soy sauce marination.",
                image: "",
            },
            {
                name: "Chicken Karaage",
                price: 27,
                description: "Chicken karaage with nori topping with sweet chili mayo sauce.",
                image: "",
            },
            {
                name: "Chili Cauliflower",
                price: 27,
                description: "Sweet and spicy crispy cauliflower.",
                image: "",
            },
            {
                name: "Tartufina Fries",
                price: 27,
                description: "Fries with parmesan cheese topping with truffle mayo sauce.",
                image: "",
            },
            {
                name: "Bakwan Udang",
                price: 22,
                description: "Crispy, golden, savory shrimp and vegetable fritters.",
                image: "",
            },
        ],
    },
    {
        category: "Signature Bowl - Chicken",
        items: [
            {
                name: "Chicken Satay",
                price: 37,
                description: "Indonesian char-grilled chicken skewers with soy sauce marination.",
                image: "",
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Salted Egg Chicken",
                price: 37,
                description: "Chicken karaage (Japanese style) with salted egg sauce.",
                image: "",
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Soy Butter Chicken",
                price: 37,
                description: "Rich and savoury chicken with soy butter marination.",
                image: "",
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
                price: 42,
                description: "Indonesian traditional slow-cooked beef curry.",
                image: "",
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Beef Tongue Blackpepper",
                price: 42,
                description: "Ox-tongue cube with black pepper sauce.",
                image: "",
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
                price: 37,
                description: "Egg tofu and Dory fish with Bobi Bowl XO Sauce.",
                image: "",
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Prawn Woku",
                price: 42,
                description: "Spicy and aromatic prawn with Indonesian woku sauce.",
                image: "",
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Soft Shell Chili Crab",
                price: 53,
                description: "Crispy fried soft shell crab coated with rich, tangy sweet chili sauce.",
                image: "",
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
                price: 34,
                description: "Stir-fry sweet soy sauce tempe and crispy salt and pepper tofu.",
                image: "",
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Eggplant Mushroom Yuzu",
                price: 34,
                description: "Stir-fry eggplant and shiitake mushroom with yuzu juice.",
                image: "",
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Couscous", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Indonesian Bibimbap",
                price: 32,
                description:
                    "Korean-inspired rice bowl with steamed vegetables tossed in a rich and fragrant dressing.",
                image: "",
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
                price: 42,
                description: "Indonesian yellow rice with tenderized beef and crispy toppings.",
                image: "",
            },
            {
                name: "Nasi Goreng Katsu",
                price: 37,
                description: "Indonesian fried rice with chicken katsu.",
                image: "",
            },
            {
                name: "Mie Goreng",
                price: 37,
                description:
                    "A classic Indonesian favorite, stir-fried noodle dish topped with tender chicken, juicy shrimp, fresh vegetables, egg and crispy shallots.",
                image: "",
            },
            {
                name: "I Fu Mie",
                price: 37,
                description: "Chinese-style crispy fried noodle with vegetables and soy oyster sauce.",
                image: "",
            },
            {
                name: "Bobi Bowl Laksa",
                price: 42,
                description:
                    "Silky rice noodles submerged in a fragrant coconut curry broth, topped with prawns, tofu, fish cake and fish balls.",
                image: "",
            },
        ],
    },
    {
        category: "Kids Meal",
        items: [
            {
                name: "Katsu Bonito",
                price: 22,
                description: "Crispy chicken katsu with bonito flakes.",
                image: "",
                options: {
                    carbs: ["White Rice", "French Fries"],
                },
            },
            {
                name: "Karaage Nori",
                price: 22,
                description: "Chicken karaage with nori topping.",
                image: "",
                options: {
                    carbs: ["White Rice", "French Fries"],
                },
            },
        ],
    },
    {
        category: "Beverages Menu",
        subcategories: [
            {
                subcat: "Cold Beverages",
                items: [
                    {
                        name: "Jasmine Iced Tea (Sweetened)",
                        price: 6,

                        image: "",
                        description: "",
                    },
                    {
                        name: "Jasmine Iced Tea (Unsweetened)",
                        price: 6,

                        image: "",
                        description: "",
                    },
                    {
                        name: "Lemongrass Iced Tea",
                        price: 6,

                        image: "",
                        description: "",
                    },
                ],
            },
            {
                subcat: "Fresh Juices",
                items: [
                    {
                        name: "Orange Juice",
                        price: 12,
                        image: "",
                        description: "",
                    },
                    {
                        name: "Watermelon Juice",
                        price: 12,
                        image: "",
                        description: "",
                    },
                ],
            },
            {
                subcat: "Freshly Mixed Juices",
                items: [
                    {
                        name: "Green House",
                        price: 17,
                        image: "",
                        description: "Celery, Kale, Cucumber, Apple",
                    },
                    {
                        name: "Bright Flavor",
                        price: 17,
                        image: "",
                        description: "Carrot, Turmeric, Ginger, Lemongrass, Orange",
                    },
                    {
                        name: "Mrs. Tropical",
                        price: 17,
                        image: "",
                        description: "Pineapple, Mint, Apple, Orange",
                    },
                    {
                        name: "Mr. Red",
                        price: 17,
                        image: "",
                        description: "Beetroot, Apple, Carrot, Lemon",
                    },
                ],
            },
            {
                subcat: "Hot Beverages",
                items: [
                    {
                        name: "Jasmine Tea",
                        price: 6,

                        image: "",
                        description: "",
                    },
                    {
                        name: "Espresso",
                        price: 13,
                        image: "",
                        description: "",
                    },
                    {
                        name: "Coffee Latte",
                        price: 18,
                        image: "",
                        description: "",
                    },
                    {
                        name: "Americano",
                        price: 16,
                        image: "",
                        description: "",
                    },
                    {
                        name: "Cappucino",
                        price: 18,
                        image: "",
                        description: "",
                    },
                    {
                        name: "Spanish Latte",
                        price: 20,
                        image: "",
                        description: "",
                    },
                ],
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
}

export const bestSellerMenu: BestSellerMenuDTORes[] = [
    {
        name: "Chicken Satay",
        slug: "chicken-satay",
        image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Javanese%20Chicken%20Satay%205%20pcs_AhmadTar.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
        price: "27",
        status: STATUS.favourite,
    },
    {
        name: "Chicken Satay",
        slug: "chicken-satay",
        image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Javanese%20Chicken%20Satay%205%20pcs_AhmadTar.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
        price: "27",
        status: STATUS.favourite,
    },
    {
        name: "Beef Rendang",
        slug: "beef-rendang",
        image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Beef%20Rendang%20Bowl_AhmadTarakji00057.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
        price: "42",
        status: STATUS.favourite,
    },
];
