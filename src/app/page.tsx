import { IconFlame } from "@tabler/icons-react";
import { MainHeader } from "~/components/layouts/header/main.header";

export default function Home() {
    return (
        <main className="flex flex-col gap-3">
            <MainHeader />

            <section className="px-3 w-full">
                <h2 className="font-semibold text-lg flex items-center justify-start gap-2">
                    <IconFlame className="text-red" />
                    <span>Best Seller!</span>
                </h2>
                <p className="text-xs text-gray-600 w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate!
                </p>
            </section>
        </main>
    );
}
