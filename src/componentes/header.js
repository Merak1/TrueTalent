import React, { Component } from 'react';
import { ReactComponent as Bola } from '../svg/bola.svg';

class Header extends Component {
    state = {}
    render() {
        return (
            <header className='header'>
                <div className="header-content1">
                    <div className="header-bola">
                        <Bola width={30} height={30} />
                    </div>
                </div>
                <div className="header-content2">
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
                        <p>Las mejores raquetas para  jugar <span>Tennis. </span> </p>
                        <button>ACERCA DE NOSOTROS ⟶  </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;