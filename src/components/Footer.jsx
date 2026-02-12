

import NavLinks from './NavLinks'

import contatoIcon from '../assets/img_icons/email.png';
import iconHandset from '../assets/img_icons/handset.png';
import iconGitHub from '../assets/img_icons/github.png';
import iconLinkedin from '../assets/img_icons/linkedin.png';
import iconInstagram from '../assets/img_icons/instagram.png';

import './Footer.css'
import { socialLinksData } from '../assets/img_icons/imgIcons';

const Footer = () => {
    const PhoneIcon = socialLinksData[4]?.icon;

  return (
    <footer className='footer' id='footer'>
        <div className="container">
            <div className="first-info-footer">
                <div className="footer-contact-item">
                    {PhoneIcon && <PhoneIcon size={25} />}
                    <span>(21) 9XXXX-XXXX</span>
                </div>

                <div className="footer-social-links">
                    {socialLinksData.slice(0,4).map((link) => (
                        <a key={link.id} 
                        href={link.url}
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        >
                            <link.icon size={25} />
                        </a>
                    ))}
                </div>
                
            </div>
            <div className="second-info-footer">
                <NavLinks className="menu footer-adjust" />
                <p className="footer-copy">
                     {new Date().getFullYear()} &copy; 
                     Desenvolvido por<span>Lucas Silva.</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer