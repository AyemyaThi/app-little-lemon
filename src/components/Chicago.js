import restaurant from '../images/restaurant.jpg';
import restaurantChefB from '../images/restaurant chef B.jpg';

const Chicago = () => {
    return (
        <article className="chicago highlight_grey_bg">
           <section>
            <h1 className='highlight mb-0'>Little Lemon</h1>
            <h2 className='highlight mt-0'>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
           </section>
           <section className="relative">
                <img src={restaurantChefB} alt="restaurant" className="absolute_a"/>
                <img src={restaurant} alt="restaurant" className="absolute_b"/>
           </section>
        </article>
    )
}

export default Chicago;