import { STATUS } from "~/types";
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
    slug: string;
    items: MenuItem[];
    desc?: string;
}

export const menu: Array<CategoriesMenuDTORes> = [
    {
        category: "Light Bites",
        slug: "light-bites",
        items: [
            {
                name: "Chicken Satay (5 Pcs)",
                slug: "chicken-satay",
                price: 27,
                description: "Indonesian char-grilled chicken skewers with soy sauce marination.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Javanese%20Chicken%20Satay%205%20pcs_AhmadTar.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.favourite,
            },
            {
                name: "Chicken Karaage Nori",
                slug: "chicken-karaage-nori",
                price: 27,
                description: "Chicken karaage with nori topping with sweet chili mayo sauce.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Chicken%20Karaage%20Nori_AhmadTarakji0001.jpg/:/rs=w:720,h:541,cg:true,m/cr=w:720,h:541",
                status: STATUS.active,
            },
            {
                name: "Chili Cauliflower",
                slug: "chili-cauliflower",
                price: 27,
                description: "Sweet and spicy crispy cauliflower.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Chili%20Cauliflower_AhmadTarakji00023.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
            },
            {
                name: "Tartufina Fries",
                slug: "tartufina-fries",
                price: 27,
                description: "Fries with parmesan cheese topping with truffle mayo sauce.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Tartufina%20Fries_AhmadTarakji00018.jpg/:/rs=w:720,h:541,cg:true,m/cr=w:720,h:541",
                status: STATUS.active,
            },
            {
                name: "Bakwan Udang",
                slug: "bakwan-udang",
                price: 27,
                description: "Crispy, golden, savory shrimp and vegetable fritters.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/IMG_8237.jpg/:/cr=t:11.37%25,l:0%25,w:100%25,h:56.39%25/rs=w:720,h:541,cg:true",
                status: STATUS.favourite,
            },
            {
                name: "Satay Lilit (5 Pcs) ",
                slug: "satay-lilit",
                price: 27,
                description: "Minced chicken and coconut grated with Balinese sauce in a skewer.",
                image: "/menu/satay_lilit.JPG",
                status: STATUS.active,
            },
            {
                name: "Dan Dan Dumpling",
                slug: "dan-dan-dumpling",
                price: 27,
                description: "Stuffed dumplings with spicy Bobi Bowl Dan Dan peanut sauce.",
                image: "/menu/dan_dan_dumpling.JPG",
                status: STATUS.active,
            },
            {
                name: "Okonomi-Puffs",
                slug: "okonomi-puffs",
                price: 27,
                description: "Crispy hash brown puffs with okonomiyaki sauce, mayo, bonito nori toppings.",
                image: "/menu/okonomi_puff.JPG",
                status: STATUS.active,
            },
            {
                name: "Edamame Salt",
                slug: "edamame-salt",
                price: 15,
                description: "",
                image: "/menu/edamame_salt.JPG",
                status: STATUS.active,
            },
            {
                name: "Edamame Spicy",
                slug: "edamame-spict",
                price: 17,
                description: "",
                image: "/menu/edamame_spicy.JPG",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Rice Bowls",
        slug: "rice-bowls",
        desc: "All rice bowl includes one carbs of your choice + egg + side salad. Carbs Options: White Rice / Yellow Rice / Cauliflower Rice",
        items: [
            {
                name: "Salted Egg Chicken Bowl",
                slug: "salted-egg-chicken-bowl",
                price: 37,
                description: "Battered chicken glazed in creamy salted egg yolk sauce.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Prawn%20Woku%20Bowl_AhmadTarakji00061.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Soy Butter Chicken Bowl",
                slug: "soy-butter-chicken",
                price: 37,
                description: "Rich and savoury chicken with soy butter marination.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Soy%20Butter%20Chicken%20Bowl_AhmadTarakji0.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Beef Rendang Bowl",
                slug: "beef-rendang",
                price: 42,
                description: "Indonesian traditional slow-cooked beef curry.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Beef%20Rendang%20Bowl_AhmadTarakji00057.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.favourite,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Empal Gepuk Bowl",
                slug: "empal-gepuk",
                price: 42,
                description:
                    "Indonesian traditional slow cooked tenderized beef with sweet and savoury crispy toppings.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Nasi%20Kuning%20Empal%20Gepuk_AhmadTarakji0.jpg/:/cr=t:0%25,l:0%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.favourite,
            },
            {
                name: "Egg Tofu Fish XO Bowl",
                slug: "egg-tofu-fish-xo",
                price: 37,
                description: "Egg tofu and Dory fish with Bobi Bowl XO Sauce.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Egg%20Tofu%20Fish%20with%20XO%20Sauce%20Bowl_Ahma.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Prawn Woku Bowl",
                slug: "prawn-woku",
                price: 42,
                description: "Spicy and aromatic prawn with Indonesian woku sauce.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Salted%20Egg%20Karaage%20Nori%20Bowl_AhmadTar.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Tempe Orek & Tahu Wow",
                slug: "tempe-orek-tahu-wow",
                price: 34,
                description: "Stir-fry sweet soy sauce tempe and crispy salt and pepper tofu.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Tempe%20Orek%20And%20Tahu%20Wow%20Bowl_AhmadTar.jpg/:/rs=w:720,h:541,cg:true,m/cr=w:720,h:541",
                status: STATUS.favourite,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
            {
                name: "Indonesian Bibimbap",
                slug: "indonesian-bibimbap",
                price: 32,
                description:
                    "Korean-inspired rice bowl with steamed vegetables tossed in a rich and fragrant dressing.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/IMG_8143.JPG/:/cr=t:27.02%25,l:0%25,w:100%25,h:56.39%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
                    salad: ["With Salad", "No Salad"],
                },
            },
        ],
    },
    {
        category: "Special Menu",
        slug: "special-menu",
        items: [
            {
                name: "Nasi Goreng Katsu",
                slug: "nasi-goreng-katsu",
                price: 37,
                description: "Indonesian fried rice with chicken katsu.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Nasi%20Goreng%20Katsu_AhmadTarakji00051.jpg/:/cr=t:0%25,l:0%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.favourite,
            },
            {
                name: "Nasi Ayam Bali",
                slug: "nasi-ayam-bali",
                price: 40,
                description: "State lilit, ayam betutu, urap, telur, kacang",
                image: "/menu/nasi_ayam_bali.JPG",
                status: STATUS.active,
            },
            {
                name: "Soto Ayam BB",
                slug: "soto-ayam-bb",
                price: 37,
                description:
                    "Indonesian yellow chicken soup with tender chicken, beansprouts, tofu, egg and potato fritters.",
                image: "/menu/soto_ayam_bb.JPG",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Noodle Bowls",
        slug: "noodle-bowls",
        items: [
            {
                name: "I Fu Mie",
                slug: "i-fu-mie",
                price: 37,
                description: "Chinese-style crispy fried noodle with vegetables and soy oyster sauce.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_I%20Fu%20Mie_AhmadTarakji00063.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.favourite,
            },
            {
                name: "Bobi Bowl Laksa",
                slug: "bobi-bowl-laksa",
                price: 42,
                description:
                    "Silky rice noodles submerged in a fragrant coconut curry broth, topped with prawns, tofu, fish cake and fish balls.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/IMG_8122.JPG/:/cr=t:24.74%25,l:0%25,w:100%25,h:56.39%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
            },
            {
                name: "Mie Ayam Jamur",
                slug: "mie-ayam-jamur",
                price: 37,
                description: "Ramen noodle with chicken mushroom, steamed chicken and wonton soup.",
                image: "/menu/mie_ayam_jamur.JPG",
                status: STATUS.favourite,
            },
            {
                name: "Mie Goreng",
                slug: "mie-goreng",
                price: 37,
                description:
                    "A classic Indonesian favorite, stir-fried noodle dish topped with tender chicken, juicy shrimp, fresh vegetables, egg and crispy shallots.",
                image: "/menu/mie_goreng.JPG",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Kids Meal",
        slug: "kids-meal",
        desc: "All kids meal includes one carbs of your choice. Carbs Options: White Rice / French Fries",
        items: [
            {
                name: "Kids-Katsu Bonito",
                slug: "katsu-bonito",
                price: 22,
                description: "Crispy chicken katsu with mayo and bonito flakes topping.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Chicken%20katsu%20bonito_AhmadTarakji0003.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "French Fries"],
                },
            },
            {
                name: "Kids-Karaage Nori",
                slug: "karaage-nori",
                price: 22,
                description: "Chicken karaage with nori topping.",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Chicken%20karaage%20nori_AhmadTarakji0003.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
                options: {
                    carbs: ["White Rice", "French Fries"],
                },
            },
        ],
    },
    {
        category: "Cold Beverages",
        slug: "cold-beverages",
        items: [
            {
                name: "Jasmine Iced Tea",
                slug: "jasmine-iced-tea",
                price: 6,
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Sweetened%20iced%20tea_AhmadTarakji00010.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.favourite,
            },
            {
                name: "Lemongrass Iced Tea",
                slug: "lemongrass-iced-tea",
                price: 6,
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_lemon%20ice%20tea_AhmadTarakji00012.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.favourite,
            },
            {
                name: "Mineral Water",
                slug: "mineral-water",
                price: 5,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Soft Drinks",
                slug: "soft-drinks",
                price: 6,
                image: "",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Fresh Juices",
        slug: "fresh-juices",
        items: [
            {
                name: "Orange Juice",
                slug: "orange-juice",
                price: 12,
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Orange%20juice_AhmadTarakji00005.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
            },
            {
                name: "Watermelon Juice",
                slug: "watermelon-juice",
                price: 12,
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_water%20melon%20_AhmadTarakji00004.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
            },
            {
                name: "Green House",
                slug: "green-house",
                price: 17,
                description: "Celery, Kale, Cucumber, Apple",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_green%20house_AhmadTarakji00007.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
            },
            {
                name: "Bright Flavor",
                slug: "bright-flavor",
                price: 17,
                description: "Carrot, Turmeric, Ginger, Lemongrass, Orange",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Bright%20Flavour_AhmadTarakji00008.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
            },
            {
                name: "Mrs. Tropical",
                slug: "mrs-tropical",
                price: 17,
                description: "Pineapple, Mint, Apple, Orange",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Mrs.%20Tropical_AhmadTarakji00006.jpg/:/rs=w:720,h:541,cg:true,m/cr=w:720,h:541",
                status: STATUS.active,
            },
            {
                name: "Mr. Red",
                slug: "mr-red",
                price: 17,
                description: "Beetroot, Apple, Carrot, Lemon",
                image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Mr.%20Red_AhmadTarakji00009.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
                status: STATUS.active,
            },
        ],
    },
    {
        category: "Hot Beverages",
        slug: "hot-beverages",
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
                name: "Espresso (Double Shoot)",
                slug: "espresso-double",
                price: 16,
                image: "",
                status: STATUS.active,
            },
            {
                name: "Latte",
                slug: "latte",
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
            {
                name: "Matcha Latte",
                slug: "matcha-latte",
                price: 20,
                image: "",
                status: STATUS.active,
            },
        ],
    },
];

// {
//     category: "Signature Bowl - Beef",
//     items: [
//         {
//             name: "Beef Tongue Blackpepper",
//             slug: "beef-tongue-blackpepper",
//             price: 42,
//             description: "Ox-tongue cube with black pepper sauce.",
//             image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Black%20pepper%20Ox-Tongue%20Bowl_AhmadTara.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
//             status: STATUS.active,
//             options: {
//                 carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
//                 salad: ["With Salad", "No Salad"],
//             },
//         },
//     ],
// },
// {
//     category: "Signature Bowl - Seafood",
//     items: [
//         {
//             name: "Soft Shell Chili Crab",
//             slug: "soft-shell-chili-crab",
//             price: 53,
//             description: "Crispy fried soft shell crab coated with rich, tangy sweet chili sauce.",
//             image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/IMG_8269.jpg/:/cr=t:29.63%25,l:0%25,w:100%25,h:56.39%25/rs=w:720,h:541,cg:true",
//             status: STATUS.active,
//             options: {
//                 carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
//                 salad: ["With Salad", "No Salad"],
//             },
//         },
//     ],
// },
// {
//     category: "Signature Bowl - Vegetarian",
//     items: [
//         {
//             name: "Eggplant Mushroom Yuzu",
//             slug: "eggplant-mushroom-yuzu",
//             price: 34,
//             description: "Stir-fry eggplant and shiitake mushroom with yuzu juice.",
//             image: "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/blob-8d646de.png/:/cr=t:0%25,l:0%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true",
//             status: STATUS.active,
//             options: {
//                 carbs: ["White Rice", "Yellow Rice", "Cauliflower Rice"],
//                 salad: ["With Salad", "No Salad"],
//             },
//         },
//     ],
// },
