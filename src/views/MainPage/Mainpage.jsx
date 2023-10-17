import React from 'react'
import Button from '../../components/MainPage/Button'

export default function Mainpage() {
    return (
        <div className='dark'>
            <div className='dark:text-white dark:bg-custom-bg-dark'>

                {/* Navigation bar */}
                <nav className='hidden md:block container mx-auto p-5 '>
                    <ul className='hidden md:flex flex-col md:flex-row gap-x-7 justify-center'>
                        <a href='#'>Projects</a>
                        <a href='#'>Knowledge Database</a>
                        <a href='#'>Work Experience</a>
                        <a href='#'>Services</a>
                        <a href='#'>Contacts</a>
                    </ul>
                </nav>
                {/* Hero Section */}
                <main className=' flex flex-col justify-center md:flex-row items-center h-screen'>
                    <div className='order-2 md:order-none p-7'>
                        <h2>Hi, I am Phone Pyae Sone Phyo <span className='text-2xl'>(Soney)</span> </h2>
                        <h1 className='text-3xl py-3'>Coding as a <span className='underline decoration-sky-500'>passion</span><br />
                            Designing as a <span className='underline decoration-pink-500'>craftsmanship</span></h1>
                            <div className='text-center'>

                        <Button text="Connect Now" />
                            </div>
                    </div>
                    <div className='order-1 md:order-none'>
                        <img src='/imgs/main_profile_img.svg' alt='Profile_img' className='w-5/6 max-w-md mx-auto' />
                    </div>
                </main>
            </div>
        </div>
    )
}
