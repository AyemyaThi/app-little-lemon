import ButtonCTA from './ButtonCTA';
import Card from './Card';

import GreekSalad from '../images/greek salad.jpg';
import LemonDessert from '../images/lemon dessert.jpg';
import Bruchetta from '../images/bruchetta.svg';

const Specials = () => {

    const menuList = [
        {
            name: 'Greek Salad',
            desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: GreekSalad
        },
        {
            name: 'Bruchetta',
            desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
            image: Bruchetta
        },
        {
            name: 'Lemon Dessert',
            desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            image: LemonDessert
        }
    ];
    
    return (
        <article className="cards">
            <div className="cards-heading ">
                <h2 class="primary1">Specials</h2>
                <ButtonCTA name="Online Menu" link="menu" />
            </div>
            <div className="cards-content">
            {menuList.map(item => (
                <Card name={item.name} desc={item.desc} image={item.image} />
            ))}
            </div>
        </article>
    )
}

export default Specials;