'use client';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import useSWR from 'swr';
import { notFound } from 'next/navigation';
import PodcastImageCard from '../../Components/PodcastImageCard/PodcastImageCard';
import PodcastInformationCard from '../../Components/PodcastInformationCard/PodcastInformationCard';
import {} from 'react';
import AppContext from '../../Context/Context';
import './page.css';
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
    const value = useContext(AppContext);

    const handleSelectedTune = useCallback(
        (tuneId) => {
            if (podcastData.length > 0) {
                const findTune = podcastData.find(
                    (tune) => tune.trackId === tuneId
                );

                if (findTune) value?.setSelectedTune(findTune);
            }
        },
        [podcastData, value?.setSelectedTune]
    );

    useEffect(() => {
        if (data?.results) {
            setPoscastData(data.results);
        }
    }, [data]);

    if (isLoading) return <p>Loading...</p>;

    if (Object.keys(value?.selectedPodcast || {}).length === 0 || error)
        notFound();
    return (
        <main className='info-container mt-8 px-8'>
            <PodcastImageCard data={value?.selectedPodcast} />
            <PodcastInformationCard
                podcastData={podcastData}
                data={data}
                selectedPoscast={value?.selectedPodcast}
                handleSelectedTune={handleSelectedTune}
            />
        </main>
    );
}

export default PodcastPage;
