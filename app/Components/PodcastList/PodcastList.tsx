'use client';

import React, { useCallback, useEffect } from 'react';
import useSWR from 'swr';
import { useContext } from 'react';
import AppContext from '../../Context/Context';
import SinglePodcast from '../SinglePodcast/SinglePodcast';

import './PodcastList.css';
import { notFound } from 'next/navigation';

function PodcastList() {
    const fetcher = (args: any) => fetch(args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        fetcher,
        { refreshInterval: 86400 }
    );
    const value = useContext(AppContext);

    const handleSetSelectedPodcast = useCallback(
        (id) => {
            if (value?.podcasts?.length > 0) {
                const findPodcast = value?.podcasts.find(
                    (podcast) => podcast.id.attributes['im:id'] === id
                );

                if (findPodcast) value?.setSelectedPodcast(findPodcast);
            }
        },
        [value?.setSelectedPodcast, value?.podcasts]
    );

    useEffect(() => {
        if (data?.feed?.entry?.length) {
            value?.setPoscasts(data.feed.entry);
        }
    }, [data]);

    useEffect(() => {
        if (value?.filter) {
            value?.setPoscasts((prev) => {
                return prev.filter((podcast) => {
                    return podcast['im:artist'].label
                        .toLowerCase()
                        .startsWith(value?.filter.toLowerCase());
                });
            });
        } else if (value?.filter === '' && data?.feed?.entry.length > 0) {
            value?.setPoscasts(data.feed.entry);
        }
    }, [value?.filter]);

    useEffect(() => {
        value?.setCount(value?.podcasts.length);
    }, [value?.podcasts]);

    if (isLoading) return <p>Loading...</p>;
    if (!data && error) notFound();

    return (
        <main className='p-20 grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {value?.podcasts.length === 0 && (
                <article>
                    <p> There is no podcasts by that name</p>
                </article>
            )}
            {value?.podcasts.map((podcast: any) => (
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
