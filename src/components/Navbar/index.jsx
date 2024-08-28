import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
export default function Navbar(){
    return(
        <header className='header'>
            <nav className='navigation'>
                <a href="#" className='logo'>
                    <FontAwesomeIcon className='iconHamburguer' icon={faHamburger}/> 
                </a>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Cardapio</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Localização</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}