import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
    filter: string | any;
    setFilter: Dispatch<SetStateAction<string>>;
    count: number | any;
    setCount: Dispatch<SetStateAction<number>>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;
