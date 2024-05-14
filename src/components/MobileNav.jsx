import React from 'react';

const MobileNav = ({ closeMobileMenu }) => {
    return (
        <>
            <span onClick={() => closeMobileMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
            </span>
            <ul>
                <li><a onClick={() => closeMobileMenu()} href="#home">Home</a></li>
                <li><a onClick={() => closeMobileMenu()} href="#about">About</a></li>
                <li><a onClick={() => closeMobileMenu()} href="#projects">Projects</a></li>
                <li><a onClick={() => closeMobileMenu()} href="#contact">Contact</a></li>
            </ul>
        </>
    )
}

export default MobileNav;