import type { Metadata } from "next";
import localFont from "next/font/local";
import '../styles/css/fontAwesome5Pro.css';
import '../styles/css/cdheadline.css';
import '../styles/css/swiper-bundle.min.css';
import '../styles/css/style.min.css';
import Scripts from "@/Components/layout/Scripts";
import MobileMenu from "@/Components/layout/MobileMenu";
import Sidebar from "@/Components/layout/Sidebar";
import Navbar from "@/Components/layout/Navbar";
import Mode from "@/Components/layout/Mode";

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

export const metadata: Metadata = {
  title: "Sparsh's Portfolio",
  description: "Get to know about my skills, experience, projects and connect with me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div id="preloader">
          <div className="loader_line"></div>
          <div
            className="absolute w-20 h-20 transition-all delay-300 -translate-x-1/2 -translate-y-1/2 rounded-full logo top-1/2 left-1/2 bg-nightBlack border-greyBlack flex-center">
            <img src="/img/site-logo.svg" alt="Minfo" />
          </div>
        </div>
        <div className="relative pt-10 minfo__app max-xl:pt-20">
          <div
            className="menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 opacity-0 invisible [&.is-menu-open]:visible [&.is-menu-open]:opacity-100">
          </div>
          <div className="max-lg:px-4">
            <MobileMenu />
            <Sidebar />
            <Navbar />
            <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem *:py-5 xl:*:py-3.5 *:max-w-content max-xl:*:mx-auto xl:*:ml-auto xl:max-2xl:*:max-w-50rem">
              {children}
            </div>
            <footer className="mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem">
              <div className="footer-container text-center py-6 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
                <p>
                  Copyright by
                  <a href="#" className="transition-colors">@sparsh pandya</a>
                </p>
              </div>
            </footer>
          </div>
        </div>
        <Mode />
        <Scripts />
      </body>
    </html>
  );
}
