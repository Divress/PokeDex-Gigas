import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';


const PokeCell = ({ pokeClass, showPokClick }) => {
	const { id, backgroundPosition } = pokeClass;
	const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return <button onClick={() => showPokClick(id)} style={style} className="poke-cell"></button>
};


export default PokeCell;