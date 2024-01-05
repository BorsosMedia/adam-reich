import "./globals.css";
import "./burger.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
// import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "RNVNTU Coaching",
  description:
    "Train with the best fitness professional in St. Boca Raton, Florida.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-[#181818] scrollbar-thumb-[#00AEEF]"
      suppressHydrationWarning
    >
      <head>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <script async src="https://link.msgsndr.com/js/form_embed.js"></script>
      </head>
      <body>
        {/* <NextUIProvider> */}
        <Navbar />
        {children}
        <Footer />
        {/* </NextUIProvider> */}
      </body>
    </html>
  );
}
