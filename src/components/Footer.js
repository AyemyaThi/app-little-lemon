import Logo from '../images/vertical_logo.png';

const Header = () => {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon" width={160} />
            <nav>
                <section>
                    <h6>Doormat Nav igation</h6>
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
                    <h6>Contact</h6>
                    <ul>
                        <li><a href="" >Address</a></li>
                        <li><a href="" >Phone Number</a></li>
                        <li><a href="" >Email</a></li>
                    </ul>
                </section>
                <section>
                    <h6>Social Media Links</h6>
                    <ul>
                        <li><a href="" >Address</a></li>
                        <li><a href="" >Phone Number</a></li>
                        <li><a href="" >Email</a></li>
                    </ul>
                </section>
            </nav>
        </footer>
    )
}


export default Header;