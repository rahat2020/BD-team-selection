import React from 'react';

const Cart = (props) => {
    const playersCart = props.playersCart;

    let total = 0;
    let name = '';
    for (let i = 0; i < playersCart.length; i++) {
        const players = playersCart[i];
        name = ` ${name}  ${players.name},` 
        total = total + players.salary;
        
    }
  
    return (
        <div>
            <h4>Total players selected: {playersCart.length}</h4>
            <h5>Name of players: {name}</h5>
            <p>Total amount: {total}</p>

        </div>
    );
};

export default Cart;