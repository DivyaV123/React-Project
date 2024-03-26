import CarosalHome from "@/components/carosalHome/carosalHome";
import ChooseQspidersHome from "@/components/chooseQspiders/chooseQspidersHome";
import OurBranchesHome from "@/components/ourBranches/ourBranchesHome";
import OurCourse from "@/components/ourCourses/ourCourse";
import Homepage from "@/components/websiteHomePage/homepage";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Homepage />
      <CarosalHome />
      <OurCourse/>
      <OurBranchesHome />
      <ChooseQspidersHome/>
    </main>
  );
}
