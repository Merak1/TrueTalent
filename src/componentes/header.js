import React, { Component } from 'react';
// import './App.css';

class Header extends Component {
    state = {}
    render() {
        return (
            <header className='header'>
                {/* <h1 className="header-h1">header</h1> */}
                <div className="header-navbar">
                    <div className="header-menu">
                        <ul>
                            <li>Inicio</li>
                            <li>Acerca de nosotros</li>
                            <li>Historia</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="header-language">
                        <ul>
                            <li>ES</li>
                            <li>EN</li>
                        </ul>
                    </div>

                </div>
                <div className="header-content">
                    <p>Las mejores raquetas para  jugar <span>Tenis </span> </p>
                    <button>ACERCA DE NOSOTROS ⟶  </button>
                </div>
            </header>
        );
    }
}

export default Header;