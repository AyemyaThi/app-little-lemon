import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';


const description = (desc) => {
    const content = [];
    for(let $i=0; $i < desc.length; $i++) {
        if($i <= 126) {
            content.push(desc[$i]);
        } else {
            content.push('...'); break;
        }
    }
    return content;
}

const Card = ({ meal }) => {

    return (
        <div className="card">
            <img className="card_img" src={meal.image} alt={meal.title} />
            <div className="card_container">
                <div className="card_heading">
                    <span className="card_title">{meal.name}</span>
                    <span className="hightlight_text secondary1">{meal.price}</span>
                </div>
                <p>{description(meal.desc)}</p>
                <button className="order">Order a delivery <FontAwesomeIcon icon={faShippingFast}  />
                </button>
            </div>
        </div>
    )
}

export default Card;