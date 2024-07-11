import React, { useContext, useEffect, useRef } from 'react';
import {
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import './PlacementCards.scss';
import Svg from '@/components/commonComponents/Svg/Svg';
import { svgicons } from '@/components/assets/icons/svgassets';
import { GlobalContext } from '@/components/Context/GlobalContext';

const ImagePopup = ({ testimonialLink }) => {
  const { setImageDialog } = useContext(GlobalContext);
  const isMounted = useRef(false);

  const handleClose = () => {
    if (isMounted.current) {
      setImageDialog(false);
    }
  };

  useEffect(() => {
    isMounted.current = true;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      isMounted.current = false;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <AlertDialogContent
        className="sm:max-w-[62.5vw] h-[80vh] sm:px-[5.556vh] rounded-xl mobile:h-[50vh] mobile:w-[80vw] mobile:p-0"
        onOpenChange={(open) => {
          if (!open) {
            handleClose();
          }
        }}
      >
        <AlertDialogCancel
          className='border-none p-0 absolute right-0 mobile:right-0 mobile:-top-[0.5rem]'
          onClick={handleClose}
        >
          <Svg
            className='w-[1.953vw] h-[3.472vh] mobile:w-[5.953vw]'
            width={svgicons.cancelButtonIcon[0]}
            height={svgicons.cancelButtonIcon[1]}
            viewBox={svgicons.cancelButtonIcon[2]}
            icon={svgicons.cancelButtonIcon[3]}
            color={svgicons.cancelButtonIcon[4]}
          />
        </AlertDialogCancel>
        <img src={testimonialLink} className='imagePopup' />
      </AlertDialogContent>
    </div>
  );
};

export default ImagePopup;
