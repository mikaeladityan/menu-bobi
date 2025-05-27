interface ContactDTORes {
    label: string;
    value: string;
}
interface OwnerDTORes {
    firstName: string;
    lastName: string;
    email: string | null;
}

export interface CompanyDTORes {
    name: string;
    logo: string | null;
    description: string | null;
    contacts: Array<ContactDTORes>;
    addresses: {
        name: string;
        street: string;
        district: string | null;
        subDistrict: string | null;
        city: string;
        province: string;
        country: string;
        postalCode: string;
        notes: string | null;
    };
    owners: Array<OwnerDTORes>;
}

export const company: CompanyDTORes = {
    name: "Bobi Bowl Restaurant",
    description:
        "Discover the best dining experience in town. We serve delicious food made with fresh ingredients and offer a cozy atmosphere for you to enjoy.",
    owners: [{ firstName: "Sylvana", lastName: "Sari", email: "sylvana@bobibowl.com" }],
    logo: "/web-app-manifest-512x512.png",
    addresses: {
        name: "Bobi Bowl Restaurant",
        street: "Wasl Port Views Building 5 - Shop No.12 Al Mina St",
        district: "Al Mina",
        subDistrict: null,
        city: "Dubai",
        country: "United Arab Emirates",
        notes: "opposite of Port Police HQ",
        province: "",
        postalCode: "",
    },
    contacts: [
        {
            label: "phone",
            value: "043515080",
        },
        {
            label: "phone",
            value: "0585167004",
        },
        {
            label: "whatsapp",
            value: "https://api.whatsapp.com/send/?phone=971585167004&text&type=phone_number&app_absent=0",
        },
        {
            label: "email",
            value: "mailto:info@bobibowl.com",
        },
        {
            label: "facebook",
            value: "https://www.facebook.com/bobibowl.dxb",
        },
        {
            label: "instagram",
            value: "https://www.instagram.com/bobibowl.dxb",
        },
        {
            label: "linkedin",
            value: "https://www.linkedin.com/company/bobi-bowl-restaurant/",
        },
    ],
};
