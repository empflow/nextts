import "./globals.css";
import Header from "./components/Header";

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
    <html lang="en" className="dark">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
