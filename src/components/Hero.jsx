import MotionReveal from './MotionReveal';

import avatar from '../assets/avatar-Lucas.png';
import download from '../assets/img_icons/download.png';
import contatoIcon from '../assets/img_icons/email.png';

import './Hero.css'

const Hero = () => {
  return (
    <>
        <section className='hero' id='hero'>
            <div className="container">
                <div className="info-hero">
                    <MotionReveal cascade={true} direction='left' delay={0.3} width='100%'>
                        <h1>
                            Olá! <br />
                            Meu nome é <br />
                            <span>Lucas Silva</span> <br />
                            e eu sou <br />
                            <span className="typing-container">
                                <span className='msg'>Desenvolvedor Web.</span>
                            </span>
                        </h1>
                        <div className="btn-hero">
                            <button>
                                <img src={download} alt="Currículo Lucas Silva" />Download CV
                            </button>
                            <button>
                                <img src={contatoIcon} alt="Contato Lucas Silva" />Entre em contato
                            </button>
                        </div>
                        </MotionReveal>
                </div>
                
                <div className="foto-avatar">
                    <MotionReveal direction='right' delay={0.3}>
                        <img src={avatar} alt="Avatar Lucas Silva" />
                    </MotionReveal>
                </div>
            </div>    
        </section>
    </>
  )
}

export default Hero