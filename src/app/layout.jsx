import { ThemeProvider } from "@/components/provider/ThemeWrapper";
import "./globals.css";
import { Onest } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-onest",
});

export const metadata = {
  title: "Property Dashboard",
  description: "A property dashboard app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="max-w-[1920px] mx-auto bg-background dark:bg-darkBackground text-textLight dark:text-textDark antialiased text-sm md:text-base lg:text-lg xl:text-xl">
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </ThemeProvider>
    </html >
  );
}
