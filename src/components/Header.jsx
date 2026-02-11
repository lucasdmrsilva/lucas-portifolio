import NavLinks from './NavLinks';

import logoNotebook from '../assets/img_icons/logo_note.png';
import iconGitHub from '../assets/img_icons/github.png';
import iconLinkedin from '../assets/img_icons/linkedin.png';
import iconInstagram from '../assets/img_icons/instagram.png';

import './Header.css';

const Header = () => {
  return (
    <>
        <header className='header' id='header'>
            <div className="container">
                <div className="info-header">
                    <div className="logo">
                        <img src={logoNotebook} alt="imagem logo-notebook" />
                    </div>
                    <div className="info-menu">
                        <NavLinks className="menu" />
                        
                        <div className="icons-sociais">
                            <a href="#">
                                <img src={iconGitHub} alt="Github Lucas Silva" />
                            </a>
                            <a href="#">
                                <img src={iconLinkedin} alt="Linkedin Lucas Silva" />
                            </a>
                            <a href="#">
                                <img src={iconInstagram} alt="Instagram Lucas Silva" />
                            </a>
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