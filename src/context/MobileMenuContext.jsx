import React, { createContext, useEffect, useState } from "react";
import useWindowResize from '../hooks/useWindowResize/useWindowResize';

export const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileMenu = (delay) => {
        setTimeout(() => {
            setIsMobileNavOpen((prevState) => !prevState);
        }, delay);
    };

    // If screensize is 900px or larger, close mobile nav menu
    const handleResize = ({ width }) => {
        if (width >= 900 && isMobileNavOpen) {
            setIsMobileNavOpen(false);
        }
    };

    // check screensize
    const windowSize = useWindowResize();

    useEffect(() => {
        handleResize(windowSize);
    }, [windowSize]);

    return (
        <MobileMenuContext.Provider value={{ isMobileNavOpen, toggleMobileMenu }}>
            {children}
        </MobileMenuContext.Provider>
    );
};