import restauranfood from '../images/restauranfood.jpg';
import ButtonCTA from './ButtonCTA';

const Hero = () => {
    return (
        <article className="hero">
           <section>
            <h1 className='primary2 mb-0'>Little Lemon</h1>
            <h2 className='highlight_grey mt-0'>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ButtonCTA name="Reserve a Table" link="booking" />
           </section>
           <section className="relative">
            <img src={restauranfood} alt="restauranfood" className="absolute_banner"/>
           </section>
        </article>
    )
}

export default Hero;