import React from 'react';
import './PodcastInformationCard.css';
import { formatISO } from 'date-fns';

function PodcastInformationCard({ podcastData, data }) {
    return (
        <section className='episodes-container'>
            <article className='w-full px-4 py-2 text-lg border-solid border-2 border-slate-50 shadow-md'>
                <b>Episodes: {data?.resultCount - 1}</b>
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
                            <article className='text text-sky-500 w-72 '>
                                {episodes.trackName}
                            </article>

                            <section className='text episodes-dateTime'>
                                <article>
                                    {formatISO(new Date(episodes.releaseDate), {
                                        representation: 'date',
                                    })}
                                </article>
                                <article>{`${hours}:${minutes}`}</article>
                            </section>
                        </section>
                    );
            })}
        </section>
    );
}

export default PodcastInformationCard;
