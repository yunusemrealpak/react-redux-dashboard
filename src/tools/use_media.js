import React, { useState, useEffect } from 'react';

///////
// e.g : let small = useMedia("(max-width: 400px)");
// e.g : let large = useMedia("(min-width: 800px)");
//////

const useMedia = (query) => {
    const [matches, setMatches] = useState(
        window.matchMedia(query).matches
    );

    useEffect(() => {
        let media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        let listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [query]);

    return matches;
}