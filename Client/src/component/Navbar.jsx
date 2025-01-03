import React from 'react'

const Navbar = () => {
  return (
    <header className=' max-w-7xl mx-auto p-5'>
        <nav className='mx-auto md:flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'><span className='text-orange-500'>BOD</span> SPHERE</h2>
            <ul className='hidden md:flex items-center justify-center list-none gap-6 text-lg '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Categories</li>
                <li className='cursor-pointer'>Notification</li>
                <li className='cursor-pointer'>AI Music</li>
                <li className='cursor-pointer'>Theme</li>
                <li className='cursor-pointer'>Profile</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
