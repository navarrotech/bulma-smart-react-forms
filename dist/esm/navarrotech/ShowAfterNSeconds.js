// Copyright © 2024 Navarrotech

// Copyright © 2024 Navarrotech
// Core
import { useState, useEffect } from 'react';
// Misc
import { Nothing } from '@/constants';
export function ShowAfterNSeconds({ children, time = 500, }) {
    const [show, setShow,] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, time);
        return () => {
            clearTimeout(timeout);
        };
    }, [time,]);
    if (show) {
        return children;
    }
    return Nothing;
}
