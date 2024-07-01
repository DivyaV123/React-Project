import Homepage from "@/app/homepage";
import { GlobalContext } from "@/components/Context/GlobalContext";
import Loading from "@/lib/Loading";
import dynamic from "next/dynamic";
import { useContext } from "react";

const DynamicHeader = dynamic(() => import('./homepage'), {
  loading: (() => <Loading />),
  ssr: false,
})

export const metadata = {
  title: "Qspiders",
  description: ""
};

export default function Home() {
  return (
    <main className="">
      <DynamicHeader />
    </main>
  );
}
