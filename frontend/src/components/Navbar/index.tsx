import {ReactComponent as GithubIcon} from 'assets/img/github.svg'
import './styles.css';
function Navbar(){

    return(
        <header>
    <nav className="container">
      <div className="dsmvoie-nav-content"> 
        <h1>DSMvoie</h1>
        <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
          <div className="dsmvoie-contact-container">
            <GithubIcon />
            <p className="dsmvoie-contact-link" >/devsuperior</p>
          </div>
        </a>
      </div>
    </nav>
  </header>
    );

}

export default Navbar;