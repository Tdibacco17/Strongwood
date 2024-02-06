import { useEffect, useState } from 'react';

export const NAVBAR_HEIGHT: number = 0;

export const useScrollPosition = () => {
    const [isAtTop, setIsAtTop] = useState<boolean>(true);

    useEffect(() => {
        const updatePosition = () => {
            const currentPosition = window.scrollY;

            if (currentPosition <= NAVBAR_HEIGHT) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        };

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return {
        isAtTop,
    };
};