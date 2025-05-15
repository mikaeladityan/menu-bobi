"use client";
import {
    IconBrandFacebookFilled,
    IconBrandGoogleFilled,
    IconBrandInstagramFilled,
    IconBrandLinkedinFilled,
    IconBrandWhatsappFilled,
    IconHeadset,
    IconMapPin,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import Link from "next/link";
import { Brand } from "~/components/ui/brand";
import { companyAtom } from "~/store/company.atom";

export function Footer() {
    const [{ data: company }] = useAtom(companyAtom);
    const addressParts = [
        company?.addresses.street,
        company?.addresses.district,
        company?.addresses.subDistrict,
        company?.addresses.city,
        company?.addresses.province,
        company?.addresses.country,
        company?.addresses.postalCode,
    ].filter((part) => !!part); // buang null/undefined/empty

    return (
        <footer className="w-max-md mx-auto bg-yellow px-3 py-5 grid grid-cols-1 gap-y-3 overflow-x-hidden">
            <div>
                <Brand />
                <p className="text-xs text-gray-700">{company?.description}</p>
            </div>
            <div className="text-xs text-red flex items-start justify-start gap-2">
                <IconMapPin size={18} />

                <p className="text-xs">{addressParts.join(", ")}.</p>
            </div>

            <div className="flex items-center justify-start gap-3 flex-wrap">
                {company?.contacts.map((c, i) => (
                    <Link
                        href={c.value}
                        target="_blank"
                        key={i}
                        className="text-red flex items-center justify-center bg-gray-100 w-10 h-10 rounded-lg"
                    >
                        {c.label === "phone" ? (
                            <IconHeadset size={25} stroke={2} />
                        ) : c.label === "whatsapp" ? (
                            <IconBrandWhatsappFilled size={25} stroke={1} />
                        ) : c.label === "instagram" ? (
                            <IconBrandInstagramFilled size={25} stroke={1} />
                        ) : c.label === "linkedin" ? (
                            <IconBrandLinkedinFilled size={25} stroke={1} />
                        ) : c.label === "email" ? (
                            <IconBrandGoogleFilled size={25} stroke={1} />
                        ) : (
                            <IconBrandFacebookFilled size={25} stroke={1} />
                        )}
                    </Link>
                ))}
            </div>
        </footer>
    );
}
