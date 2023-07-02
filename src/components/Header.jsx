import { useEffect, useState } from 'react';
import { Button } from "./subComponent/Button"


export const Header = () => {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${scrollTop ? "shadow-md" : ""} flex px-4 lg:px-36 h-20 justify-between items-center fixed z-10 bg-white w-full`}>
            <div className='flex items-center gap-12'>
                <img className='h-4 md:h-6' src="https://upload-cdn.careem.com/careem_logo_new_36c7f7d5bd.png" alt="Careem Logo" />
                <ul className='lg:flex gap-4 font-semibold hidden'>
                    <li>Services</li>
                    <li>Partners</li>
                    <li>Careem Plus</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className='flex p-4 items-center gap-2'>
                <Button text="Download the app" />
                <div className='flex flex-col gap-1'>
                    <div className='w-8 h-1 bg-limeGreen'></div>
                    <div className='w-8 h-1 bg-limeGreen'></div>
                </div>
            </div>
        </header>
    )
}
