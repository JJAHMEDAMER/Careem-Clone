import React from 'react'

export const Header = () => {
    return (
        <header className='flex px-4 h-20 justify-between items-center fixed z-10 bg-white w-full'>
            <img className='h-4' src="https://upload-cdn.careem.com/careem_logo_new_36c7f7d5bd.png" alt="Careem Logo" />
            <div className='flex p-4 items-center gap-2'>
                <button className='px-4 py-2 bg-limeGreen text-gray-800 rounded-lg'>Download the app</button>
                <div className='flex flex-col gap-1'>
                    <div className='w-8 h-1 bg-limeGreen'></div>
                    <div className='w-8 h-1 bg-limeGreen'></div>
                </div>
            </div>
        </header>
    )
}
