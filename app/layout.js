import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./components/Navbar";
import GlobalContextProvider from "./context/Globalcontext";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stock Tutor",
  description: "Stock market is not a Game learn Then earn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ResponsiveAppBar />
      <GlobalContextProvider>
      {children}
      </GlobalContextProvider>
      <Footer />
        </body>
    </html>
  );
}
