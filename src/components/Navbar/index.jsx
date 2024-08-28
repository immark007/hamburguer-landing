'use client';
import React, { useEffect, useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
export default function Navbar(){
    const [boxShadow, setBoxShadow] = useState('none');

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className='navigation'>
                <a href="#" className='logo'>
                    <FontAwesomeIcon className='iconHamburguer' icon={faHamburger}/> 
                </a>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Cardapio</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Localização</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}