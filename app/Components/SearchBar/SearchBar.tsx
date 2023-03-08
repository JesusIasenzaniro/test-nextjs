'use client';
import React from 'react';
import AppContext from '../../Context/Context';
import { useContext } from 'react';

import './SearchBar.css';

function SearchBar() {
    const value = useContext(AppContext);

    return (
        <section className='flex justify-end items-end mt-8 mb-8'>
            <article className='bg-sky-500 px-2 py-1 rounded-lg mr-2 mb-1'>
                <p className='text-white font-bold'>{value?.count}</p>
            </article>
            <form className='search-container'>
                <input
                    type='text'
                    placeholder='Filter podcast...'
                    onChange={(e) => value?.setFilter(e.target.value)}
                    value={value?.filter}
                />
            </form>
        </section>
    );
}

export default SearchBar;
