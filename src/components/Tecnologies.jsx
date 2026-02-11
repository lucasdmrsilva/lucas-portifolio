import htmlIcon from '../assets/tecnologies/html.svg';
import cssIcon from '../assets/tecnologies/css.svg';
import bootstrapIcon from '../assets/tecnologies/bootstrap.svg';
import javascriptIcon from '../assets/tecnologies/javascript.svg';
import reactIcon from '../assets/tecnologies/react.svg';
import typescriptIcon from '../assets/tecnologies/typescript.png';
import gitIcon from '../assets/tecnologies/git.svg';
import githubIcon from '../assets/tecnologies/github.svg';
import sqlIcon from '../assets/tecnologies/sql.svg';
import vscodeIcon from '../assets/tecnologies/vscode.svg';

import './Tecnologies.css';

const Tecnologies = () => {
  return (
    <section className='tecnologies' id='tecnologies'>
        <div className="container">
            <div className="header-section">
                <h1 className="title">Tecnologias</h1>
                <h2 className="subtitle">Ferramentas e linguagens que utilizo no meu dia a dia.
                </h2>
            </div>
            <div className="container-icons">
                <img src={htmlIcon} alt="HTML Lucas Silva" />
                <img src={cssIcon} alt="CSS Lucas Silva" />
                <img src={bootstrapIcon} alt="Bootstrap Lucas Silva" />
                <img src={javascriptIcon} alt="Javascript Lucas Silva" />
                <img src={reactIcon} alt="React Lucas Silva" />
                <img src={typescriptIcon} alt="Typescript Lucas Silva" />
                <img src={gitIcon} alt="GIT Lucas Silva" />
                <img src={githubIcon} alt="Github Lucas Silva" />
                <img src={sqlIcon} alt="SQL Lucas Silva" />
                <img src={vscodeIcon} alt="VSCode Lucas Silva" />
            </div>
            
        </div>
    </section>
  )
}

export default Tecnologies