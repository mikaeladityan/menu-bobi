import { MainHeader } from "~/components/layouts/header/main.header";
import { BestSeller } from "~/components/layouts/home/bestSeller";
import { MenuLayout } from "~/components/layouts/home/menu";
import { CategoriesNavbar } from "~/components/layouts/navbar/categories.navbar";
import { MainNavbar } from "~/components/layouts/navbar/main.navbar";

export default function Home() {
    return (
        <>
            <section className="min-h-auto relative">
                <MainNavbar />
                <MainHeader />
                <BestSeller />
            </section>
            <main className="relative min-h-full">
                <CategoriesNavbar />
                <MenuLayout />
            </main>
        </>
    );
}
