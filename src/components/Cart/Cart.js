import React from 'react';



const Cart = (props) => {
    const Cart = props.playersCart;
    let total = 0;
    for (let i = 0; i < Cart.length; i++) {
        const players = Cart[i];
        total = total + players.salary;
        
    }
    return (
        <div>
            <h4>total players: {Cart.length}</h4>
            
            <h5>name: {Cart.name}</h5>
            <p>Total amount: {total}</p>

        </div>
    );
};

export default Cart;