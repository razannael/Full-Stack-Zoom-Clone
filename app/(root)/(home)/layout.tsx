import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'


export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling App",
  icons:{
    icon : '/icons/logo.svg'
  }
};
const HomeLayout = ({children} : {children: ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
            <section className='flex min-h-screen flex-col flex-1 px-6 pb-6 pt-24 max-md:pb-10 sm:px-14'>
                <div className='w-full'>
                   {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout
