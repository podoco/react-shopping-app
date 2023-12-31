import "./globals.css";
import { Inter } from "next/font/google";
import ToastProvider from "../components/toastProvider/ToastProvider";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import Provider from "../redux/provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <ToastProvider />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
