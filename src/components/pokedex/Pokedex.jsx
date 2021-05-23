import React from 'react';
import './Pokedex.css';
import Alertify from 'alertifyjs';
import Pokemon from '../pokemon/Pokemon';
import Loading from '../loading/Loading';
import {PokemonApiGet} from '../../service/utils/PokemonApi';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
            found: false,
            data: [],
            loading: false
        }
        this.handlePokemonChanged = this.handlePokemonChanged.bind(this);
    }

    handlePokemonChanged(e) {
        this.setState({ pokemon: e.target.value });
    }

    async handleSearch() {
        this.setState({
            loading:true, 
            found:false
        });
        if(this.state.pokemon!==''){
            try {
                const res = await PokemonApiGet(this.state.pokemon);
                const data = await res;
                this.setState({
                    data: data.result,
                    found: true
                });
                this.setState({loading:false});
            }
            catch (e) {
                Alertify.alert('Pokemon no encontrado');          
                this.setState({ 
                    pokemon: '',
                    loading:false
                });
            }
        }
        else{
            Alertify.alert("Campo vacio, ingrese su busqueda");  
            this.setState({loading:false});
        }
    }

    render() {
        const { found } = this.state;
        return (
            <div id="pokedex">
                <h1>Pokedex</h1>
                {(this.state.loading) ? <Loading/> : null}
                <br />
                <label htmlFor="name-number">Ingrese el nombre o el numero de pokemon</label>
                <input id="name-number" type="text" value={this.state.pokemon} onChange={this.handlePokemonChanged} />
                <button className="btn" type="button" onClick={() => this.handleSearch()} >Buscar</button>
                {
                    found
                        ?
                        (
                            <div>
                                <Pokemon data = {this.state.data} />
                            </div>
                        )
                        :
                        null
                }
            </div>
        )
    }
}

export default Pokedex;