'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useContext } from 'react';
import AppContext from '../../Context/Context';
import SinglePodcast from '../SinglePodcast/SinglePodcast';

import './PodcastList.css';

function PodcastList() {
    const fetcher = (args: any) => fetch(args).then((res) => res.json());
    const [podcasts, setPoscasts] = useState([]);
    const { data, error, isLoading } = useSWR(
        'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
        fetcher,
        { refreshInterval: 86400 }
    );
    const value = useContext(AppContext);

    useEffect(() => {
        if (data?.feed?.entry?.length) {
            setPoscasts(data.feed.entry);
        }
    }, [data]);

    useEffect(() => {
        if (value?.filter) {
            setPoscasts((prev) => {
                return prev.filter((podcast) => {
                    return podcast['im:artist'].label
                        .toLowerCase()
                        .startsWith(value?.filter.toLowerCase());
                });
            });
        } else if (value?.filter === '' && data?.feed?.entry.length > 0) {
            setPoscasts(data.feed.entry);
        }
    }, [value?.filter]);

    useEffect(() => {
        value?.setCount(podcasts.length);
    }, [podcasts]);

    if (isLoading) return;
    if (error) throw new Error('Something went wrong');

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
                    key={podcast.id.attributes['im:id']}
                />
            ))}
        </main>
    );
}

export default PodcastList;
