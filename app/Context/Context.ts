import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
    filter: string | any;
    setFilter: Dispatch<SetStateAction<string>>;
    count: number | any;
    setCount: Dispatch<SetStateAction<number>>;
    podcasts: [] | any;
    setPoscasts: Dispatch<SetStateAction<never[]>>;
    selectedPodcast: {} | any;
    setSelectedPodcast: Dispatch<SetStateAction<{}>>;
    selectedData: {} | any;
    setSelectedData: Dispatch<SetStateAction<{}>>;
    selectedTune: {} | any;
    setSelectedTune: Dispatch<SetStateAction<{}>>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;
