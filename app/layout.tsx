import "./globals.css";
import Header from "./components/Header";
import Providers from "./providers";
import ThemeSwitch from "./components/ThemeSwitch";

export const metadata = {
  title: "Page",
  description: "This is a page of my NextJS web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black duration-300 dark:bg-black dark:text-white">
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
