import React from 'react'
import {
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog"
import './PlacementCards.scss';
import Svg from '@/components/commonComponents/Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'
const ImagePopup = ({testimonialLink}) => {
  return (
    <div className=''>
            <AlertDialogContent className="max-w-[62.5vw] px-[5.556vh] rounded-xl mobile:px-0 mobile:transform mobile:translate-x-[-100%] mobile:left-[58%] mobile:w-[92.558vw] mobile:max-w-[92.558vw] mobile:h-[53.978vh]">
      
                        <AlertDialogCancel className='border-none hover:bg-white p-0 absolute right-0'>
                            <Svg
                            className='w-[1.953vw] h-[3.472vh] mobile:w-[10.953vw] mobile:h-[4.472vh]'
                                width={svgicons.cancelButtonIcon[0]}
                                height={svgicons.cancelButtonIcon[1]}
                                viewBox={svgicons.cancelButtonIcon[2]}
                                icon={svgicons.cancelButtonIcon[3]}
                                color={svgicons.cancelButtonIcon[4]}
                            />
                        </AlertDialogCancel>
                     <img src={testimonialLink} className='imagePopup'/>   
            </AlertDialogContent>
        </div>
  )
}

export default ImagePopup