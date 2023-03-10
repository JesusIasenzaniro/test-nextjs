import React, { createContext, useContext, useState } from 'react';
import { GlobalContext, Podcast, PodcastEpisode } from '../../types/typings';

const context = createContext<GlobalContext | undefined>(undefined);

export type GlobalContextProviderProps = GlobalContext & {
    children: React.ReactElement | null;
};

export function GlobalContextProvider(
    props: GlobalContextProviderProps
): React.ReactElement {
    const [filter, setFilter] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(
        null
    );
    const [selectedTune, setSelectedTune] = useState<PodcastEpisode | null>(
        null
    );

    return (
        <context.Provider
            value={{
                filter,
                setFilter,
                count,
                setCount,
                podcasts,
                setPodcasts,
                selectedPodcast,
                setSelectedPodcast,
                selectedTune,
                setSelectedTune,
            }}
        >
            {props.children}
        </context.Provider>
    );
}

export function useGlobalContext(): GlobalContext {
    const globalContext = useContext(context);

    if (globalContext === undefined) {
        throw new Error(
            'You must use `useGlobalContext` hook within a component that is a descendant of a <GlobalContextProvider />'
        );
    }

    return globalContext;
}

// import { createContext, Dispatch, SetStateAction } from 'react';

// interface AppContextInterface {
//     filter: string | any;
//     setFilter: Dispatch<SetStateAction<string>>;
//     count: number | any;
//     setCount: Dispatch<SetStateAction<number>>;
//     podcasts: [] | any;
//     setPoscasts: Dispatch<SetStateAction<never[]>>;
//     selectedPodcast: {} | any;
//     setSelectedPodcast: Dispatch<SetStateAction<{}>>;
//     selectedTune: {} | any;
//     setSelectedTune: Dispatch<SetStateAction<{}>>;
// }

// const AppContext = createContext<AppContextInterface | null>(null);

// export default AppContext;
