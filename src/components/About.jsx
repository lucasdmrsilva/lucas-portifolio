import programmingImg from '../assets/programming.svg';
import  './About.css';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
             <div className="header-section">
                    <h1 className="title">Sobre mim</h1>
                    <h2 className="subtitle">Programando a realidade.</h2>
                </div>
            <div className="info-about">
                <div className="about-content">
                    <div className="about-image">
                        <img src={programmingImg} alt="Ilustração Dev" />
                    </div>
                    <div className="about-text">
                        <p>
                            Olá! Sou <span>Lucas de Melo</span>, um <span>Desenvolvedor Web</span> apaixonado por tecnologia <br /> e movido pela busca    constante por novos conhecimentos.
                        </p>
                        <p>
                            Com pouco mais de um ano de dedicação à programação, foco minhas habilidades em desenvolvimento web utilizando <span>Javascript, React, Typescript e NodeJS</span> construindo interfaces dinâmicas e funcionais.
                        </p>
                        <p>
                            Atualmente, sou estudante de <span>Ciência da Computação</span> na Faculdade Descomplica e estou em busca da minha primeira oportunidade como <span>Estagiário ou Desenvolvedor Júnior</span>, pronto para aplicar e expandir minhas capacidades em um ambiente desafiador. Meu objetivo é contribuir com soluções eficientes e de qualidade para projetos inovadores
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About