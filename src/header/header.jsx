import { useRef } from 'react';
import './header.css';

function Header() {
    const navRef = useRef();
    const clickedRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        clickedRef.current.classList.toggle("isChecked");
    }

    return (
        <>
            <header>
                <div className="header-content">
                    <div className="logo">
                        <img src="logo.png" alt="Daniel Galetti pic" />
                    </div>
                    <div className="menu-nav">
                        <button ref={clickedRef} onClick={showNavbar} className="hamburguer">
                            <div className="bar1" />
                            <div className="bar2" />
                            <div className="bar3" />
                        </button>
                        <nav ref={navRef}>
                            <a href="/#"> About</a>
                            <a href="/#"> Experience</a>
                            <a href="/#"> Plans</a>
                        </nav>
                    </div>
                </div>
                <div className="separator"> </div>
            </header>
        </>
    )
}

export default Header;