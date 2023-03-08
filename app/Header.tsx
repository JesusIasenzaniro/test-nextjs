import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='py-3 px-2 border-solid border-2 border-b-zinc-200'>
            <Link href='/'>
                <p className='font-bold text-sky-500'>Podcaster</p>
            </Link>
        </header>
    );
};

export default Header;
