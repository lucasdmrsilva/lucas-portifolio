import NavLinks from './NavLinks'

import contatoIcon from '../assets/img_icons/email.png';
import iconHandset from '../assets/img_icons/handset.png';
import iconGitHub from '../assets/img_icons/github.png';
import iconLinkedin from '../assets/img_icons/linkedin.png';
import iconInstagram from '../assets/img_icons/instagram.png';

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <div className="container">
            <div className="first-info-footer">
                <div className="footer-contact-item">
                    <img src={iconHandset} alt="Telefone Lucas Silva" />
                    <span>(21) 9XXXX-XXXX</span>
                </div>

                <div className="footer-social-links">
                    <a href="mailto:lucasmrsilva1198@gmail.com" target='blank' >
                        <img src={contatoIcon} alt="" />
                        <span>E-mail</span>
                    </a>
                    <a href="" target='blank'>
                        <img src={iconGitHub} alt="Github Lucas Silva" />
                        <span>Github</span>
                    </a>
                    <a href="" target='blank' >
                        <img src={iconLinkedin} alt="Linkedin Lucas Silva" />
                        <span>Linkedin</span>
                    </a>
                    <a href="" target='blank'>
                        <img src={iconInstagram} alt="Instagram Lucas " />
                        <span>Instagram</span>
                    </a>
                </div>
                
            </div>
            <div className="second-info-footer">
                <NavLinks className="menu footer-adjust" />
                <p className="footer-copy">
                     {new Date().getFullYear()} &copy; 
                     Desenvolvido por<span>Lucas Silva</span>.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer