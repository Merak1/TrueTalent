import React, { Component } from 'react'

class Body extends Component {
    render() {
        return (
            <div className="body">
                <div className="body-content1">
                    <h1>Raquetas.Accsesorios.Pelotas</h1>
                    <p>Conoce nuestras raquetas y aprende a jugar tennis como un profesional.</p>
                    <button>Historia  ⟶</button>
                </div>
                <div className="body-content2">
                    <h1>Nuestras <span>Raquetas</span> </h1>
                    <p>Conoce nuestras raquetas y aprende a jugar tennis como un profesional.</p>
                </div>
                <div className="body-content3">
                    <div className="carrousel">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="body-content4">
                    <img src="" alt="" />
                </div>
            </div>
        );
    }
}

export default Body;