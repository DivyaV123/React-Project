
import Homepage from "@/app/homepage";
import Loading from "@/lib/Loading";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import('./homepage'), {
  loading: (() => <Loading />),
  ssr: false,
})

export default function Home() {
  return (
    <main className="">
      <DynamicHeader />
    </main>
  );
}
