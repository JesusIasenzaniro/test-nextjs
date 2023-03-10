import { Podcast } from './typings.d';
export interface GlobalContext {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    podcasts: Podcast[];
    setPodcasts: React.Dispatch<React.SetStateAction<Podcast[]>>;
    selectedPodcast: Podcast | null;
    setSelectedPodcast: React.Dispatch<React.SetStateAction<Podcast | null>>;
    selectedTune: PodcastEpisode | null;
    setSelectedTune: Dispatch<SetStateAction<{}>>;
}

export interface Podcast {
    category: {
        attributes: {
            'im:id': string;
            label: string;
            scheme: string;
            term: string;
        };
    };
    id: {
        attributes: {
            'im:id': string;
        };
        label: string;
    };
    'im:artist': {
        attributes: {
            href: string;
        };
        label: string;
    };
    'im:contentType': {
        attributes: {
            label: string;
            term: string;
        };
    };
    'im:image': {
        attributes: {
            height: string;
        };
        label: string;
    }[];
    'im:name': {
        label: string;
    };
    'im:price': {
        attributes: {
            amount: string;
            currency: string;
        };
        label: string;
    };
    'im:releaseDate': {
        attributes: {
            label: string;
        };
        label: string;
    };
    link: {
        attributes: {
            href: string;
            rel: string;
            type: string;
        };
    };
    rights: {
        label: string;
    };
    summary: {
        label: string;
    };
    title: {
        label: string;
    };
}

export interface PodcastEpisode {
    artistIds: number[];
    length: number;
    artworkUrl60: string;
    artworkUrl160: string;
    artworkUrl600: string;
    closedCaptioning: string;
    collectionId: number;
    collectionName: string;
    collectionViewUrl: string;
    contentAdvisoryRating: string;
    country: string;
    description: string;
    episodeContentType: string;
    episodeFileExtension: string;
    episodeGuid: string;
    episodeUrl: string;
    feedUrl: string;
    genres: { name: string; id: string }[];
    kind: string;
    previewUrl: string;
    releaseDate: string;
    shortDescription: string;
    trackId: number;
    trackName: string;
    trackTimeMillis: number;
    trackViewUrl: string;
    wrapperType: string;
}

export interface Data {
    feed: {
        author: {
            name: {
                label: string;
            };
        };
        name: string;
        label: string;
        uri: {
            label: string;
        };
        entry: {
            Podcast;
        }[];
        icon: {
            label: string;
        };
        id: {
            label: string;
        };
        link: {
            attributes: {
                rel: string;
                type: string;
                href: string;
            };
        }[];
        rights: {
            label: string;
        };
        title: {
            label: string;
        };
        updated: {
            label: string;
        };
    };
}

export interface PodcastData {
    resultCount: number;
    results: {
        artistName: string;
        artworkUrl30: string;
        artworkUrl60: string;
        artworkUrl100: string;
        artworkUrl600: string;
        collectionCensoredName: string;
        collectionExplicitness: string;
        collectionHdPrice: number;
        collectionId: number;
        collectionName: string;
        collectionPrice: number;
        collectionViewUrl: string;
        contentAdvisoryRating: string;
        country: string;
        currency: string;
        feedUrl: string;
        genreIds: string[];
        genres: string[];
        kind: string;
        primaryGenreName: string;
        releaseDate: string;
        trackCensoredName: string;
        trackCount: number;
        trackExplicitness: string;
        trackId: number;
        trackName: string;
        trackPrice: number;
        trackTimeMillis: number;
        trackViewUrl: string;
        wrapperType: string;
    }[];
}
