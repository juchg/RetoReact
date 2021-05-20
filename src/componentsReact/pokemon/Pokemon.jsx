import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front:true,
            name: props.data.species.name,
            frontNormal: props.data.sprites.front_default,
            backNormal: props.data.sprites.back_default,
            frontShiny: props.data.sprites.front_shiny,
            backShiny: props.data.sprites.back_shiny,
            shiny: false
        }
    }

    render() {
        const {shiny, front } = this.state;
        return (
            <div id="pokemon">
                <h1>{this.state.name}</h1>
                <br />
                {(shiny)
                    ?
                    <div>
                        {(front)
                            ?
                            <img src={this.state.frontShiny} alt="Esperando la busqueda" />
                            :
                            <img src={this.state.backShiny} alt="Esperando la busqueda" />
                        }
                    </div>
                    :
                    <div>
                        {(front)
                            ?
                            <img src={this.state.frontNormal} alt="Esperando la busqueda" />
                            :
                            <img src={this.state.backNormal} alt="Esperando la busqueda" />
                        }
                    </div>
                }
                <label htmlFor="shiny-check">Shiny</label><input type="checkbox" name="" id="shiny-check" onChange={(e) => this.setState({shiny:e.target.checked})} />
                <label htmlFor="back-check">Back</label><input type="checkbox" name="" id="back-check" onChange={(e) => this.setState({front:!e.target.checked})} />
                     
            </div>
        )
    }
}

export default Pokemon;