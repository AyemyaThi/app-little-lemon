import Rating from './Rating';

import GreekSalad from '../images/greek salad.jpg';

const Customersay = () => {

    const ratingList = [
        {
            name: 'James T.',
            rating: 4,
            review: 'I would recommend this place.',
            image: 'https://i.pravatar.cc/150?img=7'
        },
        {
            name: 'Sunkingta',
            rating: 5,
            review: 'Great food, great coffee, great service.',
            image: 'https://i.pravatar.cc/150?img=8'
        },
        {
            name: 'Cierra W.',
            rating: 5,
            review: 'Would definitely come back to this place!',
            image: 'https://i.pravatar.cc/150?img=5'
        },
        {
            name: 'Eric T.',
            rating: 3,
            review: 'Not bad!',
            image: 'https://i.pravatar.cc/150?img=1'
        }
    ];

    return (
        <article className="customersay">
            <h2 className="primary2">Testimonials</h2>
            <div className="customersay_content">
               {ratingList.map((item, index) => (
                <Rating key={index} name={item.name} rating={item.rating} image={item.image} review={item.review}/>
               ))}
            </div>
        </article>
    )
}

export default Customersay;