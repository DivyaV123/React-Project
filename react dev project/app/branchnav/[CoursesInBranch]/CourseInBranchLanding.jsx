"use client";
import React, { useMemo ,useContext} from "react";
import { usePathname } from "next/navigation";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { BRANCH_NAV_BAR } from "@/lib/RouteConstants";
import Link from "next/link";
import { GlobalContext } from "@/components/Context/GlobalContext";
const CourseInBranchLanding = () => {
    const { domainVariable } = useContext(GlobalContext);
      let domain = domainVariable === "Qspiders" ? "qspiders" : domainVariable === "Jspiders" ? "jspiders" : domainVariable === "Pyspiders" ? "pyspiders" : "bspiders"
  const pathname = usePathname();
  const branchName = pathname.split("/").pop();
  const {
    data: BranchResponse,
    error: branchError,
    isLoading: branchIsLoading,
  } = useGetAllBranchesQuery(domain);

  const filteredBranch = useMemo(() => {
    if (!BranchResponse?.data) return null;
    return BranchResponse.data?.[0]?.cities?.find(
      (branch) => String(branch.cityName) === String(branchName)
    );
  }, [BranchResponse, branchName]);
  const getBranchTitle = filteredBranch?.cityName;
  const getBranchesResponse = filteredBranch?.courses || [];
  return (
    <section className="my-[1.717vh]">
      <Link
        className="flex gap-2.5 pl-[1.628vw] bg-[#F9F9F9] py-[1.502vh] items-center"
        href={BRANCH_NAV_BAR}
      >
        <img src="/icon_arrow_left.svg" />
        <div className="text-[3.256vw] font-semibold text-[#454545]">
          {getBranchTitle}
        </div>
      </Link>
      <section className="mx-[3.721vw] my-[0.858vh]">
        {getBranchesResponse.length > 0 &&
          getBranchesResponse.map((response) => (
            <Link
              key={response?.courseId}
              className="flex justify-between py-[1.073vh]"
              href={`/branchnav/${branchName}/${response?.courseId}`}
            >
              <div className="text-[2.791vw] font-bold text-[#454545]">
                {response?.courseName}
              </div>
              <img src="/arrow_right.svg" alt="arrow right" />
            </Link>
          ))}
      </section>
    </section>
  );
};

export default CourseInBranchLanding;
