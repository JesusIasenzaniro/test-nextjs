import React from 'react';
import './PoscastTuneCard.css';
import { PodcastEpisode } from '../../../types/typings';

interface IProps {
    tuneData: PodcastEpisode | null;
}

function PoscastTuneCard({ tuneData }: IProps) {
    return (
        <section className='tune-container h-fit px-4 py-4 border-solid border-2 border-slate-50 shadow-md'>
            <article className='trackName w-full'>
                <b>{tuneData?.trackName}</b>
            </article>
            <article className='mt-4'>
                <i>{tuneData?.description}</i>
            </article>
            <article className='audio-container mt-8'>
                <audio controls className='audio-control w-full'>
                    <source src={`${tuneData?.episodeUrl}`} type='audio/mpeg' />
                </audio>
            </article>
        </section>
    );
}

export default PoscastTuneCard;
