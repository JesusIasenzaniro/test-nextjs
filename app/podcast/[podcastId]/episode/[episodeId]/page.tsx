'use client';
import { notFound } from 'next/navigation';

import { useGlobalContext } from '../../../../Context/Context';
import PodcastImageCard from '../../../../Components/PodcastImageCard/PodcastImageCard';
import PoscastTuneCard from '../../../../Components/PoscastTuneCard/PoscastTuneCard';
import './page.css';

function Episode() {
    const { selectedPodcast, selectedTune } = useGlobalContext();

    if (!selectedPodcast && !selectedTune) notFound();
    return (
        <main className='track-container mt-8 px-8'>
            <PodcastImageCard data={selectedPodcast} />
            <PoscastTuneCard
                tuneData={selectedTune}
                selectedPodcast={selectedPodcast}
            />
        </main>
    );
}

export default Episode;
