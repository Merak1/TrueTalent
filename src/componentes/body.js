import React, { Component } from 'react'
import raqueta from '../raqueta.png'
class Body extends Component {
    render() {
        return (
            <div className="body">
                <div className="body-content1">
                    <div className="body-content card">
                        <h1>Raquetas.Accesorios.<br />Pelotas</h1>
                        <p>Conoce nuestras raquetas y aprende a jugar tennis como un profesional.</p>
                    </div>
                    <button>HISTORIA  ⟶</button>
                </div>
                <div className="body-content2">
                    <div className="body-content2_1">
                        <h1>Nuestras <span>Raquetas</span> </h1>
                        <p>Conoce nuestras raquetas y aprende a jugar tennis como un profesional.</p>
                    </div>
                    <div className="body-content2_2">
                        <div className="carrousel">
                            <img src={raqueta} alt="raqueta" />
                            <img src={raqueta} alt="raqueta" />
                            <img src={raqueta} alt="raqueta" />
                        </div>
                    </div>
                </div>
                <div className="body-content3">

                </div>
            </div>
        );
    }
}

export default Body;