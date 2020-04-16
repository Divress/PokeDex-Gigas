import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';
import { pokeClasses } from '../pokeClasses';
import PokeCell from './PokeCell';


console.clear();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      poksList: pokeClasses,
      currentPage: 1,
      poksPerPage: 30,
      pokemon: {},
    };
    this.choosePageClick = this.choosePageClick.bind(this);
    this.showPokClick = this.showPokClick.bind(this);
  }

  showPokClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);

      this.setState({ pokemon });
    })
    .catch(err => console.log(err));
  }

  choosePageClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
    

  render() {
    const { poksList, currentPage, poksPerPage, dummy1 } = this.state;

    // Logic for displaying current poksList
    const indexOfLastPok = currentPage * poksPerPage;
    const indexOfFirstPok = indexOfLastPok - poksPerPage;
    const currentPoksList = poksList.slice(indexOfFirstPok, indexOfLastPok);

    const renderPoksList = currentPoksList.map((pokeClass, id) => {
      return <PokeCell 
        key={pokeClass.id} 
        pokeClass={pokeClass}
        showPokClick={this.showPokClick}
      />;
    });


    // Logic for displaying page numbers
    const pageNumbersArr = [];

    for (let i = 1; i <= Math.ceil(poksList.length / poksPerPage); i++) {
      pageNumbersArr.push(i);
    }

    const pageNumbersElem = pageNumbersArr.map(pageNumber => {

      return (
        <button 
          class='page-num-butt'
          key={pageNumber}
          id={pageNumber}
          onClick={this.choosePageClick}
        >
          {pageNumber}
        </button>
      );

    });

    return (
      <div id="all-elems">
        <div id="main-poke-window">
          <DetailView pokemon={this.state.pokemon}/>
        </div>
        <ul id="page-numbers">
          {pageNumbersElem}
        </ul>
        <section id="cells">
          {renderPoksList}
        </section>
      </div>
    );
  }
}


export default App;