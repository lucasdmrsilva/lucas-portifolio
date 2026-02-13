    import { projectsList } from "./projectsData";

    import MotionReveal from "./MotionReveal";

    import imgUrl from '../assets/img_icons/link-icon.svg';
    import imgGithub from '../assets/img_icons/github-icon.svg';

    import  './Projects.css';

    const Projects = () => {
    return (
        <section className="projects" id='projects'>
            <div className="container">
                <div className="header-section">
                    <MotionReveal direction="down">
                        <h1 className="title">Projetos</h1>
                        <h2 className="subtitle">Alguns dos trabalhos que tenho desenvolvido</h2>
                    </MotionReveal>
                </div>
                <div className="info-projects">
                    {projectsList.map((projeto, index) => (
                        <MotionReveal
                        key={projeto.id}
                        direction="up"
                        delay={index * 0.2}
                        width="auto"
                        >
                        <div className="card-projects">
                        <img src={projeto.image} alt={projeto.title} className='img-projects'/>

                        <div className="info-cards-projects">
                            <h3>{projeto.title}</h3>
                            <p>{projeto.description}</p>

                            <div className="show-info">
                                <div className="description-projects">
                                    {projeto.techs.map((icon, index) => (
                                        <img key={index} src={icon} alt="Tecnologias usadas" />
                                    ))}
                                </div>

                                <div className="footer-projects">
                                    <div className="url-projects">
                                        <a href={projeto.deploy} className="btn-projects" target="_blank">
                                            <img src={imgUrl} alt="Link do projeto"/>Deploy
                                        </a>
                                    </div>
                                    <div className="code-project">
                                        <a href={projeto.repo}  className="btn-projects" target="_blank">
                                            <img src={imgGithub} alt="Deploy do projeto" />Repositório
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </MotionReveal>
                    ))}               
                </div>
            </div>
        </section>
    )
    }

    export default Projects