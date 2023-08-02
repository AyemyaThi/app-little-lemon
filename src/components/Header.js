import Logo from '../images/Logo.svg';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" >
                <img src={Logo} alt="Little Lemon"/>
            </Link>
            <Nav />
        </header>
    )
}

export default Header;