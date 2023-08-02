import Logo from '../images/vertical_logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <footer>
            <Link to="/" >
                <img src={Logo} alt="Little Lemon" width={80} />
            </Link>
            <nav>
                <section>
                    <p className='cta_text'>Navigation</p>
                    <ul>
                        <li><a href="" >Home</a></li>
                        <li><a href="" >About</a></li>
                        <li><a href="" >menu</a></li>
                        <li><a href="" >Reservations</a></li>
                        <li><a href="" >Order Online</a></li>
                        <li><a href="" >Login</a></li>
                    </ul>
                </section>
                <section>
                    <p className='cta_text'>Contact</p>
                    <ul>
                        <li><a href="" >Address</a></li>
                        <li><a href="" >Phone Number</a></li>
                        <li><a href="" >Email</a></li>
                    </ul>
                </section>
                <section>
                    <p className='cta_text'>Social Media</p>
                    <ul>
                        <li><a href="" >Instagram</a></li>
                        <li><a href="" >LinkedIn</a></li>
                        <li><a href="" >Pinterest</a></li>
                    </ul>
                </section>
            </nav>
        </footer>
    )
}


export default Header;