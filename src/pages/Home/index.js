import { Link, Redirect } from "react-router-dom";
import logo from '../../assets/Vector.svg';
import "./index.css";
import "./navbar.css"


function Home() {
    let lang = localStorage.getItem('lang');

    if(lang === null){
        return <Redirect to="/lang" />
    }

    
   return(
        <div className="Home">
            <header className="header-area overlay">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand"><img src={logo} alt="Logo" className="logo"/></Link>
                        
                        <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                            <span className="menu-icon-bar"></span>
                            <span className="menu-icon-bar"></span>
                            <span className="menu-icon-bar"></span>
                        </button>
                        
                        <div id="main-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li><Link href="#" className="nav-item nav-link active">Geoturismo</Link></li>
                                <li><Link href="#" className="nav-item nav-link">Explorar</Link></li>
                                <li className="dropdown">
                                    <Link href="#" class="nav-item nav-link" data-toggle="dropdown">Nosso Território</Link>
                                    <div class="dropdown-menu">
                                        <Link href="#" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link href="#" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link href="#" className="dropdown-item">Dropdown Item 3</Link>
                                    </div>
                                </li>
                                <li class="dropdown">
                                    <Link className="nav-item nav-link" data-toggle="dropdown">Publicações</Link>
                                    <div class="dropdown-menu">
                                        <Link href="#" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link href="#" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link href="#" className="dropdown-item">Dropdown Item 3</Link>
                                        <Link href="#" className="dropdown-item">Dropdown Item 4</Link>
                                        <Link href="#" className="dropdown-item">Dropdown Item 5</Link>
                                    </div>
                                </li>
                                <li><Link href="#" className="nav-item nav-link">Sobre o projeto</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <div className="banner">
                    <div className="container">
                        <h1>Roteiro Geoturistico do Centro Histórico do João Pessoa</h1>
                    </div>
                </div>
            </header>
            
            <div className="container">
                <div className="blocos">
                    <div className="bloco-1">
                        <h2>Locais de Interesse</h2>
                        <p>Capital do Estado da Paraíba, João Pessoa possui um dos centros históricos mais antigos do país, repleto de igrejas, monumentos, praças históricas, obeliscos e fontes.</p>
                        <Link to="/en">
                            <strong>Visitar</strong>
                        </Link>
                    </div>
                    <div className="bloco-2">
                        <h2>Sobre o Centro Histórico</h2>
                        <p>Capital do Estado da Paraíba, João Pessoa possui um dos centros históricos mais antigos do país, repleto de igrejas, monumentos, praças históricas, obeliscos e fontes.</p>
                        <Link to="/en">
                            <strong>Visitar</strong>
                        </Link>
                    </div>
                    <div className="bloco-3">
                        <h2>Como chegar aqui</h2>
                        <p>Situado no extremo oriental das Américas, João Pessoa é facilmente acessado através do Aeroporto Castro Pinto, distante 10 Km e pelo Terminal Rodoviário Severino Camelo, no centro de João Pessoa.</p>
                        <Link to="/en">
                            <strong>Visitar</strong>
                        </Link>
                    </div>
                </div>
            </div>
                <div className="container">
                <div className="bottom-footer">
                    <button type="button" class="btn btn-info btn-lg">Envie um e-mail</button>
                    <span className="visit">000 <span>Visitas ao site</span></span>
                </div>
            </div>
        </div>
   

    )
    
}


export default Home;