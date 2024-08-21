"use client";
import React, { useState } from "react";
import Input from "@/components/commonComponents/input/Input";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
const CreateEditSubject = () => {
  const [addDetailDialog, setAddDetailDialog] = useState(false);
  return (
    <>
      <Dialog>
        <article className="flex justify-between items-center">
          <div className="flex gap-3 pt-[2.222vh] items-center">
            <div className="pl-[1.875vw] w-[29.688vw]">
              <Input
                inputStyle="rounded-md"
                placeholder="search"
                iconPath="/images/icon_outline_search.png"
              />
            </div>
          </div>
          <DialogTrigger>
            <button
              onClick={() => setAddDetailDialog(true)}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw]  text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              Add Details
            </button>
          </DialogTrigger>
        </article>
        {addDetailDialog && (
          <CommonDialog
            header="Add New Subject"
            footerBtnTitle="Add New Subject"
          />
        )}
      </Dialog>
      <div className="py-[3.333vh] px-[1.875vw]">
      <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
        <p className="pl-4 text-[#434343] font-bold text-[1.25vw] pb-2">Subject-</p>
      </div>
      </div>
    </>
  );
};

export default CreateEditSubject;
