import { Poppins } from "next/font/google";

export const poppins = Poppins({
    style: "normal",
    display: "swap",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    preload: false,
});
