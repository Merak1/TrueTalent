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
                        <ul>
                            <il>Inicio</il>
                            <il>Acerca de Nosotros</il>
                            <il>Historia</il>
                            <il>Contacto</il>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <il><Linkedin /> </il>
                            <il><Vimeo /></il>
                            <il><Instagram /></il>
                            <il><Twitter /></il>
                            <il><Facebook /></il>
                        </ul>
                    </div>
                    <div>
                        <Bola />
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;