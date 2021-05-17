import React from 'react';
import './Pokedex.css';
import Alertify from 'alertifyjs';
import Pokemon from '../pokemon/Pokemon';
const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
            found: false,
            data: []
        }
        this.handlePokemonChanged = this.handlePokemonChanged.bind(this);
    }

    handlePokemonChanged(e) {
        this.setState({ pokemon: e.target.value });
    }

    async handleSearch() {
        try {
            const res = await fetch(POKEMON_API + this.state.pokemon);
            const data = await res.json();
            this.setState({
                data: data,
                found: true
            });
        }
        catch (e) {
            Alertify.alert("Pokemon no encontrado");
        }
    }

    render() {
        const { found } = this.state;
        return (
            <div id="pokedex">
                <h1>Pokedex</h1>
                <br />
                <label htmlFor="name-number">Ingrese el nombre o el numero de pokemon</label>
                <input id="name-number" type="text" value={this.state.pokemon} onChange={this.handlePokemonChanged} />
                <button className="btn" type="button" onClick={() => this.handleSearch()} >Buscar</button>
                {
                    (found)
                        ?
                        <div>
                            <Pokemon data = {this.state.data} />
                        </div>
                        :
                        null
                }
            </div>
        )
    }
}

export default Pokedex;