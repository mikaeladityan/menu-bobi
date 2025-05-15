import { MainHeader } from "~/components/layouts/header/main.header";
import { BestSeller } from "~/components/layouts/home/bestSeller";
import { MenuLayout } from "~/components/layouts/home/menu";

export default function Home() {
    return (
        <main className="flex flex-col">
            <MainHeader />
            <BestSeller />
            <MenuLayout />
        </main>
    );
}
