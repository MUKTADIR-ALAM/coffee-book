import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

export default function MainLayout() {
  return (
    <div>
        <Toaster />
        {/* Navbar */}
        <div className='h-16'>
        <Navbar />
        </div>
        <div className='min-h-[calc(100vh-232px)] py-12 container mx-auto px-12'>
            {/* Dynamic Content */}
            <Outlet />
        </div>
        {/* Footer */}
        <Footer />
    </div>
  )
}
