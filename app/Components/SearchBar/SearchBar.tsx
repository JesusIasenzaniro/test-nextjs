'use client';
import { debounce } from 'lodash';
import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../Context/Context';

import './SearchBar.css';

function SearchBar() {
    const { setFilter, count } = useGlobalContext();
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const filterDebounce = debounce(() => {
            setFilter(inputText);
        }, 500);

        filterDebounce();
        return () => {
            filterDebounce.cancel();
        };
    }, [inputText]);

    return (
        <section className='flex justify-end items-end mt-8 mb-8 '>
            <article className='bg-sky-500 px-2 py-1 rounded-lg mr-2 mb-1'>
                <p className='text-white font-bold'>{count}</p>
            </article>
            <form className='search-container mr-8'>
                <input
                    type='text'
                    placeholder='Filter podcast...'
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                />
            </form>
        </section>
    );
}

export default SearchBar;
