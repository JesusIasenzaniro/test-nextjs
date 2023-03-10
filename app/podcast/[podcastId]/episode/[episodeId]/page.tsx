'use client';
import { notFound } from 'next/navigation';
import { useContext } from 'react';
import AppContext from '../../../../Context/Context';
import PodcastImageCard from '../../../../Components/PodcastImageCard/PodcastImageCard';
import PoscastTuneCard from '../../../../Components/PoscastTuneCard/PoscastTuneCard';
import './page.css';

function Episode() {
    const value = useContext(AppContext);

    if (
        Object.keys(value?.selectedPodcast || {}).length === 0 &&
        Object.keys(value?.selectedTune || {}).length === 0
    )
        notFound();
    return (
        <main className='track-container mt-8 px-8'>
            <PodcastImageCard data={value?.selectedPodcast} />
            <PoscastTuneCard tuneData={value?.selectedTune} />
        </main>
    );
}

export default Episode;
