
'use client'
import React ,{useEffect} from 'react';
import './hiringModal.scss'
import HiringFromUsForm from '../HiringFromUsForm';

const HiringModal = ({ isModalOpen, selectedCity, activeTab, handleCloseModal, setActiveTab }) => {
    useEffect(() => {
        const body = document.body;
        const scrollbarWidth = window.innerWidth - body.clientWidth;
    
        if (isModalOpen) {
          body.style.overflow = 'hidden';
          body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
          body.style.overflow = '';
          body.style.paddingRight = '';
        }
    
        return () => {
          body.style.overflow = '';
          body.style.paddingRight = '';
        };
      }, [isModalOpen]);
    
      if (!isModalOpen) return null;

  return (
    <div className='hiringUS_modal'>
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header pb-[3.889vh] mobile:pb-[0.889vh] mobile:mx-[2vw]">
        <p className='font-semibold text-[1.875vw] mobile:text-[3.875vw]'>Request a call back</p>
          <button className="close-button" onClick={handleCloseModal}>
            &times;
          </button>
        </div>
       <div className='tabComponent flex justify-center'>
       <div className="tabs">
          <div
            className={`tab ${activeTab === 'Corporate Training' ? 'active' : ''}`}
            onClick={() => setActiveTab('Corporate Training')}
          >
            Corporate Training
          </div>
          <div
            className={`tab ${activeTab === 'Hire From Us' ? 'active' : ''}`}
            onClick={() => setActiveTab('Hire From Us')}
          >
            Hire From Us
          </div>
          <div
            className={`tab ${activeTab === 'General Enquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('General Enquiries')}
          >
            General Enquiries
          </div>
        </div>
       </div>
        <div className="tab-content">
          {activeTab === 'Corporate Training' && <div>
          <HiringFromUsForm activeTab={activeTab}/>
          </div>}
          {activeTab === 'Hire From Us' && <div>
          <HiringFromUsForm activeTab={activeTab}/>
          </div>}
          {activeTab === 'General Enquiries' && <div>
          <HiringFromUsForm activeTab={activeTab}/>
          </div>}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HiringModal;
