import NavLinks from './NavLinks';

import { socialLinksData } from '../assets/img_icons/imgIcons';

import './Header.css';

const Header = () => {
  return (
    <>
        <header className='header' id='header'>
            <div className="container">
                <div className="info-header">
                    <div className="logo">
                        <div className='logo-text'>
                            <span className="bracket">&lt;</span>
                            <span className="slash">/</span>
                            <span className="bracket">&gt;</span>
                        </div>
                    </div>
                    <div className="info-menu">
                        <NavLinks className="menu" />
                        
                        <div className="icons-sociais">
                            {socialLinksData.slice(0, 4).map((link) => (
                                <a key={link.id}
                                href={link.url} 
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                >
                                    <link.icon size={22} />
                            </a>    
                            ))}
                        </div>
                    </div>
                    <div className="mobile-menu-icon">&#9776;</div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header