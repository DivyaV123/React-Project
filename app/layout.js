'use client'
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalContextProvider from "@/components/Context/GlobalContext";
import { Provider } from "react-redux"; 
import store from "@/redux/store";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}> 
      <html lang="en">
        <body
          className=
          {cn(
            `relative h-full antialiased ${poppins.className}  myscrollbar overflow-y-auto`)}
        >
          <GlobalContextProvider>
            <main className="relative flex flex-col min-h-screen">{children}</main>
          </GlobalContextProvider>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </body>
      </html >
    </Provider>
  );
}
