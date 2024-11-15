import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jonathan Rampersad's Portfolio",
  description: "Jonathan Rampersad's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
