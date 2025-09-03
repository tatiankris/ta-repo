import {useEffect, useState} from "react";

const useResizeDetector = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const listener = () => {
            setWidth(window.outerWidth);
        };

        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, []);

    return width;
};

export { useResizeDetector };
