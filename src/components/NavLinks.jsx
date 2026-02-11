import './NavLinks.css';

const NavLinks = ( {className} ) => {
    const links = [
        {name: 'Home', href: '#'},
        {name: 'Sobre', href: '#About'},
        {name: 'Tecnologias', href: '#Tecnologies'},
        {name: 'Projetos', href: '#Projects'},
        {name: 'Contato', href: '#Contact'},
    ]
  return (
    <nav className={`nav-links-container ${className}`}>
        <ul>
            {links.map((link) => (
                <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                </li>
            ))} 
        </ul>
    </nav>
  );
};

export default NavLinks;