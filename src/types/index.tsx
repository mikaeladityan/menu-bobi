export enum STATUS {
    "active",
    "favourite",
    "draft",
    "delete",
}
export interface TypeMenuDTO {
    title: string;
    slug: string;
    categories: CategoryMenuDTO[];
}

export interface CategoryMenuDTO {
    title: string;
    slug: string;
    description: string;
    menus: MenuDTO[];
}

export interface MenuDTO {
    title: string;
    slug: string;
    description: string;
    price: string;
    rating: number;
    image: string | null;
    status: string;
}
