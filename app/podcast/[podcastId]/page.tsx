'use client';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import './page.css';
import { formatISO } from 'date-fns';

type PageProps = {
    params: {
        podcastId: string;
    };
};

function PodcastPage({ params: { podcastId } }: PageProps) {
    const fetcher = (args: any) => fetch(args).then((res) => res.json());

    const [podcastData, setPoscastData] = useState([]);
    const { data, error, isLoading } = useSWR(
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
        fetcher
    );

    useEffect(() => {
        if (data?.results) {
            setPoscastData(data.results);
        }
    }, [data]);

    if (isLoading) return;
    if (error) throw new Error('Something went wrong');

    return (
        <main className='mt-8 px-8 flex justify-evenly'>
            <section>
                <article className='w-56 border-solid border-2 border-slate-50 shadow-md'>
                    <article className='py-4 px-8'>
                        <img
                            src={data.results[0].artworkUrl600}
                            alt={data.results[0].collectionName}
                        />
                    </article>
                    <article className='px-2'>
                        <hr />
                    </article>
                    <article className='px-2 mt-2'>
                        <b className='podcast'>
                            {data.results[0].collectionName}
                        </b>
                    </article>
                    <article className='px-2 mb-2'>
                        <i className='author'>
                            By: <span>{data.results[0].collectionName}</span>
                        </i>
                    </article>

                    <article className='px-2'>
                        <hr />
                    </article>
                    <article className='px-2 mt-2 mb-4'>
                        <b className='description-title'>Description: </b>
                        <p className='mt-2'>
                            <i className='description'>
                                {data.results[1].shortDescription}
                            </i>
                        </p>
                    </article>
                </article>
            </section>
            <section className='episodes-container'>
                <article className='w-full px-4 py-2 text-lg border-solid border-2 border-slate-50 shadow-md'>
                    <b>Episodes: {data.resultCount - 1}</b>
                </article>
                <article className='mt-8 w-full flex justify-between px-4 py-2  border-solid border-2 border-slate-50 shadow-md text-sm'>
                    <b>Title</b>
                    <article className='w-48 flex justify-between'>
                        <b>Date</b>
                        <b>Duration</b>
                    </article>
                </article>
                {podcastData.map((episodes: any, index) => {
                    const totalMilliseconds = episodes.trackTimeMillis;
                    const totalSeconds = Math.floor(totalMilliseconds / 1000);
                    const hours = Math.floor(totalSeconds / 3600);
                    const minutes = Math.floor((totalSeconds % 3600) / 60)
                        .toString()
                        .padStart(2, '0');
                    if (index > 0)
                        return (
                            <section
                                className='flex justify-between w-full px-4 py-2  border-solid border-2 border-b border-slate-50 shadow-md'
                                key={episodes.trackId}
                                style={{
                                    backgroundColor:
                                        index % 2 === 0 ? '#f5f5f5' : 'white',
                                }}
                            >
                                <article className='text-sky-500'>
                                    {episodes.trackName}
                                </article>

                                <section className='episodes-dateTime'>
                                    <article>
                                        {formatISO(
                                            new Date(episodes.releaseDate),
                                            {
                                                representation: 'date',
                                            }
                                        )}
                                    </article>
                                    <article>{`${hours}:${minutes}`}</article>
                                </section>
                            </section>
                        );
                })}
            </section>
        </main>
    );
}

export default PodcastPage;
