import "./globals.css";
import Header from "./components/Header";
import Providers from "./providers";
import Footer from "./components/Footer";

export const metadata = {
  title: "Home",
  description: "This is a page of my NextJS web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-black duration-300 dark:bg-black dark:text-white">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
