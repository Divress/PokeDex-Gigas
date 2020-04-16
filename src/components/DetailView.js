import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
	const { id, name, sprite, type } = pokemon;

  return (
    <section className="detail-view">

      <img src={sprite} className='sprite-image' />

      <div className='data-wrapper'>
        <h1 className='data-num'>{id}</h1>
        <p className="data-char">Name: {name}</p>
        <p className="data-char">Types: {type}</p>
      </div>

    </section>
  )
}

export default DetailView;