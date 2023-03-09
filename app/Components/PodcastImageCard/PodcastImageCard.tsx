'use client';
import React from 'react';
import './PodcastImageCard.css';

function PodcastCard({ data }) {
    return (
        <section>
            <article className='w-56 border-solid border-2 border-slate-50 shadow-md'>
                <article className='py-4 px-8'>
                    <img
                        src={data?.results[0]?.artworkUrl600}
                        alt={data?.results[0]?.collectionName}
                    />
                </article>
                <article className='px-2'>
                    <hr />
                </article>
                <article className='px-2 mt-2'>
                    <b className='podcast'>
                        {data?.results[0]?.collectionName}
                    </b>
                </article>
                <article className='px-2 mb-2'>
                    <i className='author'>
                        By: <span>{data?.results[0]?.collectionName}</span>
                    </i>
                </article>

                <article className='px-2'>
                    <hr />
                </article>
                <article className='px-2 mt-2 mb-4'>
                    <b className='description-title'>Description: </b>
                    <p className='mt-2'>
                        <i className='description'>
                            {data?.results[1]?.shortDescription}
                        </i>
                    </p>
                </article>
            </article>
        </section>
    );
}

export default PodcastCard;
