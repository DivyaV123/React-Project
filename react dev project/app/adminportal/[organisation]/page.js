'use client'
import React, { useEffect, useState } from 'react';
import Loading from '@/lib/Loading';
import dynamic from 'next/dynamic';

const AdminSidebar = dynamic(() => import('./AdminSidebar'), { ssr: false });
const Homepage = dynamic(() => import('@/app/homepage'), { ssr: false });
const AdminContent = dynamic(() => import('./AdminContent'), { ssr: false });

const OragnisationLandning = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    const storedToken = localStorage.getItem('Role');
    setRole(storedToken);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader"><Loading /></div>;
  }

  return (
    <>
      {
        role === "COURSEADDER" || role === "ADMIN"
          ? <section className="flex w-full h-[100vh]"><AdminSidebar /><AdminContent /></section>
          : <Homepage />
      }
    </>
  );
}

export default OragnisationLandning;
