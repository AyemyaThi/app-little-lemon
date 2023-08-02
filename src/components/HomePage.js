import Hero from './Hero';
import Specials from './Specials';
import Customersay from './Customersay';
import Chicago from './Chicago';

const HomePage = () => {
    return (
        <>
            {/* <h1>Home page</h1> */}
            <Hero />
            <Specials />
            <Customersay />
            <Chicago />
        </>
    )
}

export default HomePage;