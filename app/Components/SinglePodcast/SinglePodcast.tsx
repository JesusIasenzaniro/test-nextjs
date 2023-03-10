import React from 'react';
import Link from 'next/link';

function SinglePodcast({ podcast, data, handleSetSelectedPodcast }) {
    return (
        <section className='p-20'>
            <Link href={`podcast/${podcast.id.attributes['im:id']}`}>
                <article
                    className='relative'
                    onClick={() =>
                        handleSetSelectedPodcast(podcast.id.attributes['im:id'])
                    }
                >
                    <img
                        className='card-image'
                        src={podcast['im:image'][2].label}
                        alt={podcast['im:artist'].label}
                    />
                </article>
            </Link>
            <div className='text-center border-solid border-2 border-slate-50 shadow-md'>
                <article className='card-title'>
                    <p className='font-bold text-sm'>
                        {podcast['im:artist'].label}
                    </p>
                </article>
                <article className='m-2'>
                    <p className='text-sm text-slate-400'>
                        Author:
                        <span> {data?.feed?.author?.name?.label}</span>
                    </p>
                </article>
            </div>
        </section>
    );
}

export default SinglePodcast;
