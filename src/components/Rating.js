import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const getStar = rating => {
    let content = [];
    for (let i = 0; i < rating; i++) {
      content.push(<FontAwesomeIcon key={i} icon={faStar} className="star" />);
    }
    return content;
  };


const Rating = ({rating, image, name, review}) => {
    return (
        <div className="card no_rounded">
            {/* <h4><b>{rating}</b></h4> */}
            <div className="p1">{getStar(rating)}</div>
            <img className="profile_img" src={image} alt={name} />
            <div>
                <h4><b>{name}</b></h4>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default Rating;