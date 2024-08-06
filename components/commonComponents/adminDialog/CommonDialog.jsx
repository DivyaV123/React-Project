import React, { Children } from 'react'
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Button from '../button/Button';
import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

function CommonDialog({ header = "", footerBtnTitle = "", formfn = () => { }, footerBtnClick = () => { }, dialogCloseClick = () => { } }) {
    return (
        <DialogContent className="w-[31.25vw] max-h-[100vh]">
            <div className='flex justify-between'>
                <DialogHeader className='pb-[4.444vh]'>
                    <DialogTitle className=''>{header}</DialogTitle>
                </DialogHeader>
                <DialogClose>
                    <X className="mt-0 w-4" onClick={dialogCloseClick} />
                </DialogClose>
            </div>
            <div>
                {formfn()}
            </div>
            <DialogFooter>
                <div className='pt-[45%]'>
                    <Button
                        type='submit'
                        onClick={footerBtnClick}
                        className='px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium bg-gradient rounded-md text-white'
                        title={footerBtnTitle}
                    />
                </div>
            </DialogFooter>
        </DialogContent>
    )
}

export default CommonDialog