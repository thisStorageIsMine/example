import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", 'cyrillic'],
  variable: '--font-inter'
});
const nunito = Nunito_Sans({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-nunito'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
