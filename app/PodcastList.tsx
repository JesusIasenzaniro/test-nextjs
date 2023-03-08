'use client';

import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

import './Podcastlist.css';

function PodcastList() {
    const fetcher = (args: any) => fetch(args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        fetcher
    );

    if (isLoading) return;
    if (error) throw new Error('Something went wrong');

    console.log('data', data);

    return (
        <main className='p-20 grid grid-cols-4 gap-4'>
            {data?.feed?.entry?.map((podcast: any, index: any) => (
                <section className='p-20' key={podcast.id.attributes['im:id']}>
                    <article className='relative'>
                        <img
                            className='card-image'
                            src={podcast['im:image'][2].label}
                            alt={podcast['im:artist'].label}
                        />
                    </article>
                    <div className='px-8 text-center border-solid border-2 border-slate-50 shadow-md'>
                        <article className='card-title'>
                            <p className='font-bold'>
                                {podcast['im:artist'].label}
                            </p>
                        </article>
                        <article className='m-2'>
                            <p className='text-sm text-slate-400'>
                                Author:
                                <span> {data?.feed?.author?.name?.label}</span>
                            </p>
                        </article>
                    </div>
                </section>
            ))}
        </main>
    );
}

export default PodcastList;
