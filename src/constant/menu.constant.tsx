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
