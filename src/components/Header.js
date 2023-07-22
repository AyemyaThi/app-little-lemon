import { Routes, Route, Link } from 'react-router-dom';

import Logo from '../images/Logo.svg';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';


const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Little Lemon"/>
            <nav>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/menu" >Menu</Link>
                </li>
                <li>
                    <Link to="/booking" >Reservations</Link>
                </li>
                <li><a href="" >Order Online</a></li>
                <li><a href="" >Login</a></li>
            </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </header>
    )
}

export default Header;