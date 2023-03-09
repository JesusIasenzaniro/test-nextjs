'use client';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { notFound } from 'next/navigation';
import PodcastImageCard from '../../Components/PodcastImageCard/PodcastImageCard';
import PodcastInformationCard from '../../Components/PodcastInformationCard/PodcastInformationCard';
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
        fetcher,
        { refreshInterval: 86400 }
    );

    useEffect(() => {
        if (data?.results) {
            setPoscastData(data.results);
        }
    }, [data]);

    if (isLoading) return;
    if (error) throw new Error('Something went wrong');
    if (!data) notFound;
    return (
        <main className='mt-8 px-8 flex justify-evenly'>
            <PodcastImageCard data={data} />
            <PodcastInformationCard podcastData={podcastData} data={data} />
        </main>
    );
}

export default PodcastPage;
