
import './App.css';
import button from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

import playersData from './fakeData/Data.json';
import { useEffect, useState } from 'react';
import PlayerInfo from './components/playerInfo/PlayerInfo';
import Cart from './components/Cart/Cart';
function App() {
   const [players, setPlayers] = useState([]);
   const [playersCart, setPlayersCart] = useState([]);
   useEffect(()=>{
     const playerName = playersData.map(playersData => playersData.name)
    //  console.log(playerName)
    setPlayers(playersData)
    
   }, [])

   const handleAddPlayers = (players) => {
    //  console.log('added',players)
    const newPlayersCart =[ ...playersCart, players]
    setPlayersCart(newPlayersCart);
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1> Total players List: {players.length}</h1>
        {/* <h4>Players added: {playersCart.length}</h4> */}
        <Cart playersCart={playersCart} ></Cart>
          {
            players.map(player => <PlayerInfo handleAddPlayers={handleAddPlayers }player={player}> </PlayerInfo>)
          }
        <playerInfo> </playerInfo>
        

      </header>
    </div>
  );
}

export default App;
