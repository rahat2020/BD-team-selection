import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import button from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const PlayerInfo = (props) => {
    const divStyle ={
        border: '5px solid purple',
        margin:'40px',
       padding:'10px',
        borderRadius:'15px'
    }
    const btnStyle = {marginLeft: '10px',}
    // console.log(props);
    const {name, salary, img}=props.player;
    const handleAddPlayers = props.handleAddPlayers;
    return (
        <div style={divStyle}>
            <h4> player name: {name}</h4>
            <h5>salary: ${salary}</h5>
            <img src={img} alt="" srcset=""/>
            <button  onClick={() => handleAddPlayers(props.player)} 
            style={btnStyle} className="btn btn-primary "> <FontAwesomeIcon icon={faPlus}/> Add me</button>
        </div>
    );
};

export default PlayerInfo;