
import Homepage from "@/components/websiteHomePage/homepage";
import HomePageContextProvider from "@/components/Contexts/HomePageContext";
export default function Home() {
  return (
    <main className="">
      <HomePageContextProvider>
      <Homepage />
      </HomePageContextProvider>
    </main>
  );
}
