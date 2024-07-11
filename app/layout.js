'use client'
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalContextProvider, { GlobalContext } from "@/components/Context/GlobalContext";
import { Provider } from "react-redux"; 
import store from "@/redux/store";
import { useContext } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}> 
      <GlobalContextProvider>
        <RootComponent>{children}</RootComponent>
      </GlobalContextProvider>
    </Provider>
  );
}

function RootComponent({ children }) {
  const { hoverState } = useContext(GlobalContext);
  return (
    <html lang="en">
      <body
        className={cn(
          `relative h-full antialiased ${poppins.className} ${hoverState?.item === null && !hoverState?.content ? "overflow-y-auto myscrollbar  mr-0" :"overflow-hidden mr-[5px]"}`,
        )}
      >
        <main className="relative flex flex-col min-h-screen">{children}</main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </body>
    </html>
  );
}
