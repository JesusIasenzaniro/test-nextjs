'use client';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import useSWR from 'swr';
import { notFound } from 'next/navigation';
import PodcastImageCard from '../../Components/PodcastImageCard/PodcastImageCard';
import PodcastInformationCard from '../../Components/PodcastInformationCard/PodcastInformationCard';
import { PodcastEpisode } from '../../../types/typings';
import { useGlobalContext } from '../../Context/Context';
import './page.css';
import Loading from '../../Components/Loading/Loading';
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
    const { selectedPodcast, setSelectedTune } = useGlobalContext();

    const handleSelectedTune = useCallback(
        (tuneId: string) => {
            if (podcastData.length > 0) {
                const findTune = podcastData.find(
                    (tune: PodcastEpisode) => tune.trackId === +tuneId
                );

                if (findTune) setSelectedTune(findTune);
            }
        },
        [podcastData, setSelectedTune]
    );

    useEffect(() => {
        if (data?.results) {
            setPoscastData(data.results);
        }
    }, [data]);

    if (isLoading)
        return (
            <section className='text-center'>
                <Loading />
            </section>
        );

    if (!selectedPodcast) notFound();
    return (
        <main className='info-container mt-8 px-8'>
            <PodcastImageCard data={selectedPodcast} />
            <PodcastInformationCard
                podcastData={podcastData}
                data={data}
                selectedPoscast={selectedPodcast}
                handleSelectedTune={handleSelectedTune}
            />
        </main>
    );
}

export default PodcastPage;
