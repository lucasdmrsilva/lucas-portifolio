import { techIcons } from '../assets/tecnologies/tecnologies';
import MotionReveal from './MotionReveal';

import './Tecnologies.css';

const Tecnologies = () => {
  return (
    <section className='tecnologies' id='tecnologies'>
        <div className="container">
            <div className="header-section">
                <MotionReveal direction='down'>
                    <h1 className="title">Tecnologias</h1>
                    <h2 className="subtitle">Ferramentas e linguagens que utilizo no meu dia a  dia.
                    </h2>
                </MotionReveal>
            </div>
            <div className="container-icons">
                {Object.entries(techIcons).map(([key, value], index) => (
                    <MotionReveal
                        key={key}
                        direction='up'
                        delay={index * 0.1}
                        width='auto'
                        >
                            <img src={value} alt={`${key} Lucas Silva`} />
                        </MotionReveal>
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Tecnologies