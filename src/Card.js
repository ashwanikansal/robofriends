import  React  from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className='container'>
            <div className='cardstyle'>
                <img src={`https://robohash.org/${props.id}?size=150x150`} alt="robot"/>
                <div>
                    <h2>{props.name}</h2>
                    <h5>{props.email}</h5>
                </div>
            </div>
        </div>
    )
}

export default card;