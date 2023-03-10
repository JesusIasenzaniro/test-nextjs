import React from 'react';
import './PodcastInformationCard.css';
import { formatISO } from 'date-fns';
import Link from 'next/link';
import { Podcast, PodcastData } from '../../../types/typings';
interface IProps {
    podcastData: PodcastData[];
    data: PodcastData;
    selectedPoscast: Podcast;
    handleSelectedTune: Function;
}

function PodcastInformationCard({
    podcastData,
    data,
    selectedPoscast,
    handleSelectedTune,
}: IProps) {
    return (
        <section className='episodes-container'>
            <article className='w-full px-4 py-2 text-lg border-solid border-2 border-slate-50 shadow-md'>
                <b>Episodes: {data?.resultCount - 1}</b>
            </article>
            <article className='column-title mt-8  border-solid border-2 border-slate-50 shadow-md text-sm'>
                <article className='title-container'>
                    <b className='title'>Title</b>
                </article>

                <article className='date-time'>
                    <b className='date-title'>Date</b>
                    <b className='title'>Duration</b>
                </article>
            </article>
            {podcastData.map((episodes: any, index: number) => {
                const totalMilliseconds = episodes.trackTimeMillis;
                const totalSeconds = Math.floor(totalMilliseconds / 1000);
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60)
                    .toString()
                    .padStart(2, '0');
                if (index > 0)
                    return (
                        <section
                            className='tracks-container  px-4 py-2  border-solid border-2 border-b border-slate-50 shadow-md'
                            key={episodes.trackId}
                            style={{
                                backgroundColor:
                                    index % 2 === 0 ? '#f5f5f5' : 'white',
                            }}
                        >
                            <Link
                                href={`podcast/${selectedPoscast.id.attributes['im:id']}/episode/${episodes.trackId}`}
                            >
                                <article
                                    className='text text-sky-500'
                                    onClick={() =>
                                        handleSelectedTune(episodes.trackId)
                                    }
                                >
                                    {episodes.trackName}
                                </article>
                            </Link>
                            <section className='episodes-dateTime text'>
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
