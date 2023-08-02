import { Link } from 'react-router-dom';

const ButtonCTA = (props) => {
    return (<Link className="cta" to={props.link} >{props.name}</Link>)
}

export default ButtonCTA;