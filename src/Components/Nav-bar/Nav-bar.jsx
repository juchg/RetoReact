import React from 'react';
import './Nav-bar.css'
import logo from '../../assets/Logo.png';

class NavBar extends React.Component{

    ChangePage(page){    
        //marcamos el seleccionado
        if(page===1){
            document.getElementById("home-tab").className="btn-selected";
            document.getElementById("exercise-tab").className="btn";
        }
        else{
            document.getElementById("home-tab").className="btn";
            document.getElementById("exercise-tab").className="btn-selected";
        }

        const { handlePage } = this.props;
        handlePage(page);
    }

    render() {
        return (
            <div id="nav-bar">
                <img src={logo} alt="Logo"/>
                <h1 id="title">Bootcamp</h1>
                <div id="buttons-container">
                    <button className="btn-selected" id="home-tab" onClick={() => this.ChangePage(1)}>Home</button>
                    <button className="btn" id="exercise-tab" onClick={() => this.ChangePage(2)}>Exercise</button>
                </div>
            </div>
        )
    }
}

export default NavBar;