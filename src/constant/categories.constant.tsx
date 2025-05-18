import { STATUS } from "~/types";

export interface CategoryDTORes {
    name: string;
    slug: string;
    status: STATUS;
    include: boolean;
}

export const categories: CategoryDTORes[] = [
    {
        name: "Light Bites",
        slug: "light-bites",
        status: STATUS.active,
        include: false,
    },
    {
        name: "Rice Bowls",
        slug: "rice-bowls",
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
        name: "Special Menu",
        slug: "special-menu",
        status: STATUS.active,
        include: true,
    },
    {
        name: "Noodle Bowls",
        slug: "noodle-bowls",
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
        name: "Cold Beverages",
        slug: "cold-beverages",
        status: STATUS.active,
        include: false,
    },
    {
        name: "Fresh Juices",
        slug: "fresh-juices",
        status: STATUS.active,
        include: false,
    },
    {
        name: "Hot Beverages",
        slug: "hot-beverages",
        status: STATUS.active,
        include: false,
    },
];
