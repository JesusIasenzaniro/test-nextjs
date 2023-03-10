'use client';

import React, { useCallback, useEffect } from 'react';
import useSWR from 'swr';
import { useGlobalContext } from '../../Context/Context';
import SinglePodcast from '../SinglePodcast/SinglePodcast';
import './PodcastList.css';
import { notFound } from 'next/navigation';
import { Podcast } from '../../../types/typings';

function PodcastList() {
    const fetcher = (args: any) => fetch(args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        fetcher,
        { refreshInterval: 86400 }
    );
    const { podcasts, setPodcasts, setSelectedPodcast, filter, setCount } =
        useGlobalContext();

    const handleSetSelectedPodcast = useCallback(
        (id: string): void => {
            if (podcasts?.length > 0) {
                const findPodcast = podcasts.find(
                    (podcast) => podcast.id.attributes['im:id'] === id
                );

                if (findPodcast) setSelectedPodcast(findPodcast);
            }
        },
        [setSelectedPodcast, podcasts]
    );

    useEffect(() => {
        if (data?.feed?.entry?.length) {
            setPodcasts(data.feed.entry);
        }
    }, [data]);

    useEffect(() => {
        if (filter) {
            setPodcasts((prev: Podcast[]) => {
                return prev.filter((podcast) => {
                    return podcast['im:artist'].label
                        .toLowerCase()
                        .startsWith(filter.toLowerCase());
                });
            });
        } else if (filter === '' && data?.feed?.entry.length > 0) {
            setPodcasts(data.feed.entry);
        }
    }, [filter]);

    useEffect(() => {
        setCount(podcasts.length);
    }, [podcasts]);

    if (isLoading) return <p>Loading...</p>;
    if (!data && error) notFound();

    return (
        <main className='p-20 grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {podcasts.length === 0 && (
                <article>
                    <p> There is no podcasts by that name</p>
                </article>
            )}
            {podcasts.map((podcast: any) => (
                <SinglePodcast
                    podcast={podcast}
                    data={data}
                    handleSetSelectedPodcast={handleSetSelectedPodcast}
                    key={podcast.id.attributes['im:id']}
                />
            ))}
        </main>
    );
}

export default PodcastList;
