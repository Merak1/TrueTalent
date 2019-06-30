import React, { Component } from 'react'
import { ReactComponent as Linkedin } from '../svg/linkedin.svg';
import { ReactComponent as Vimeo } from '../svg/vimeo.svg';
import { ReactComponent as Instagram } from '../svg/instagram.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';
import { ReactComponent as Facebook } from '../svg/facebook.svg';
import { ReactComponent as Bola } from '../svg/bola.svg';


class Footer extends Component {
    state = {}
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="footer-navbar">
                        <div className="footer-menu">
                            <ul>
                                <li>Inicio</li>
                                <li>Acerca de Nosotros</li>
                                <li>Historia</li>
                                <li>Contacto</li>
                            </ul>
                        </div>
                        <div className="footer-social">
                            <ul>
                                <li><Linkedin /> </li>
                                <li><Vimeo /></li>
                                <li><Instagram /></li>
                                <li><Twitter /></li>
                                <li><Facebook /></li>
                                <li className="bola-footer" ><Bola /> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bola">
                        <Bola />
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;