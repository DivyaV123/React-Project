"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from "@/lib/Loading";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import('./homepage'), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  // console.log(router?.pathname,"beforepathname");
  useEffect(() => {
    const pathname = router?.pathname || "";
    let newTitle = "Qspiders";

    if (typeof pathname === 'string') {
      if (pathname.includes("qspiders")) {
        newTitle = "Qspiders";
      } else if (pathname.includes("jspiders")) {
        newTitle = "Jspiders";
      } else if (pathname.includes("pyspiders")) {
        newTitle = "Pyspiders";
      } else if (pathname.includes("prospiders")) {
        newTitle = "Prospiders";
      }
    }

    document.title = newTitle;
  }, [router]);
  console.log(router?.pathname, "afterpathname");

  return (
    <main className="">
      <DynamicHeader />
    </main>
  );
}
