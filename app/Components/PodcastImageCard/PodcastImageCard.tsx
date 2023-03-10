'use client';
import React from 'react';
import './PodcastImageCard.css';

function PodcastCard({ data }) {
    return (
        <section>
            <article className='w-56 border-solid border-2 border-slate-50 shadow-md'>
                <article className='py-4 px-8'>
                    <img
                        src={data?.['im:image'][2]?.label}
                        alt={data?.['im:name']?.label}
                    />
                </article>
                <article className='px-2'>
                    <hr />
                </article>
                <article className='px-2 mt-2'>
                    <b className='podcast'>{data?.['im:name']?.label}</b>
                </article>
                <article className='px-2 mb-2'>
                    <i className='author'>
                        By: <span>{data?.['im:artist']?.label}</span>
                    </i>
                </article>

                <article className='px-2'>
                    <hr />
                </article>
                <article className='px-2 mt-2 mb-4'>
                    <b className='description-title'>Description: </b>
                    <p className='mt-2'>
                        <i className='description'>{data?.summary?.label}</i>
                    </p>
                </article>
            </article>
        </section>
    );
}

export default PodcastCard;
