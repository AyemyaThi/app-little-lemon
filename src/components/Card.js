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

const Card = (props) => {
    
    return (
        <div className="card">
            <img className="card_img" src={props.image} alt={props.title} />
            <div class="card_container">
                <h4><b>{props.title}</b></h4>
                <p>{description(props.desc)}</p>
                <button class="order">Order a delivery <FontAwesomeIcon icon={faShippingFast}  />
                </button>
            </div>
        </div>
    )
}

export default Card;