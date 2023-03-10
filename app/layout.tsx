'use client';
import '../styles/globals.css';
import AppContext from './Context/Context';
import { useState } from 'react';
import Header from './Header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [filter, setFilter] = useState('');
    const [count, setCount] = useState(0);
    const [podcasts, setPoscasts] = useState([]);
    const [selectedPodcast, setSelectedPodcast] = useState({});
    const [selectedData, setSelectedData] = useState({});
    const [selectedTune, setSelectedTune] = useState({});

    return (
        <html lang='en'>
            <body>
                <Header />
                <AppContext.Provider
                    value={{
                        filter,
                        setFilter,
                        count,
                        setCount,
                        selectedPodcast,
                        setSelectedPodcast,
                        podcasts,
                        setPoscasts,
                        selectedData,
                        setSelectedData,
                        selectedTune,
                        setSelectedTune,
                    }}
                >
                    {children}
                </AppContext.Provider>
            </body>
        </html>
    );
}
