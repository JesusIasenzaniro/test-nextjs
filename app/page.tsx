import React from 'react';
import PodcastList from './Components/PodcastList/PodcastList';
import SearchBar from './Components/SearchBar/SearchBar';

function Home() {
    return (
        <main>
            <SearchBar />
            {/* @ts-ignore */}
            <PodcastList />
        </main>
    );
}

export default Home;
