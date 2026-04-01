import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const courier = localFont({ src: "courier.woff2" });

export const main = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});
