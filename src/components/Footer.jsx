import MotionReveal from './MotionReveal';

import NavLinks from './NavLinks'

import './Footer.css'
import { socialLinksData } from '../assets/img_icons/imgIcons';

const Footer = () => {
    const PhoneIcon = socialLinksData[4]?.icon;

  return (
    <footer className='footer' id='footer'>
        <div className="container">
            <MotionReveal direction='up' delay={0.3}>
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
            </MotionReveal>
            <MotionReveal direction='up' delay={0.5}>
                <div className="second-info-footer">
                    <NavLinks className="menu footer-adjust" />
                    <p className="footer-copy">
                        {new Date().getFullYear()} &copy; 
                        Desenvolvido por<span>Lucas Silva.</span>
                    </p>
                </div>
            </MotionReveal>
        </div>
    </footer>
  )
}

export default Footer