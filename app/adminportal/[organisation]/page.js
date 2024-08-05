'use client'
import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import Homepage from '@/app/homepage';

const OragnisationLanding = () => {
  const [storedToken, setStoredToken] = useState(null);

  useEffect(() => {
    // Ensure this code runs only in the browser
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('Role');
      setStoredToken(token);
    }
  }, []);

  if (storedToken === null) {
    return null; // Or a loading spinner
  }

  return (
    <>
      {storedToken === "COURSEADDER" ? <AdminSidebar /> : <Homepage />}
    </>
  );
};

export default OragnisationLanding;
