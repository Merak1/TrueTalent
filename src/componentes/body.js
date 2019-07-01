import React, { Component } from 'react'
import ball1 from '../ball1.png'
import ball2 from '../ball2.png'
import ball3 from '../ball3.png'
import ball4 from '../ball4.png'

class Body extends Component {
    state = {
        contador: 1,

    }
    componentDidMount() {
        this.carusel()
    }
    avanzar = (num) => {

        if (num === 5) {
            return num
        } else {
            num = num + 1
            this.setState({ contador: num })
        }
        console.log(num, "num");
        this.carusel(num)
    }
    retroceder = (num) => {
        if (num === 1) {
            return num
        } else {
            num = num - 1
            this.setState({ contador: num })
        }
        console.log(num, "num");
        this.carusel(num)
    }
    carusel = (num) => {
        console.log(num);

        if (num === 1) {
            return ball1
        } else if (num === 2) {
            return ball2
        } else if (num === 3) {
            return ball3
        } else {
            return ball4
        }

    }
    test() {

    }

    render() {
        return (
            <div className="body">
                <div className="body-content1">
                    <div className="body-content_card">
                        <span>Tennis</span>
                        <div className="body-content_card-content">
                            <h1>Raquetas.Accesorios.<br />Pelotas</h1>
                            <p>Conoce nuestras raquetas y aprende a jugar tennis como un profesional.</p>
                        </div>
                    </div>
                    <button>HISTORIA  ⟶</button>
                </div>
                <div className="body-content2">
                    <div style={{ backgroundImage: 'url(' + this.carusel(this.state.contador) + ')', }}
                        className="body-content2_1">
                        <div className="body-content2_1-text">
                            <h1>Nuestras <strong>Raquetas</strong> </h1>
                            <p>Conoce nuestras raquetas y aprende a jugar tennis como un profesional.</p>
                            <div className="body-content2_1-carusel" >
                                <div onClick={() => { this.retroceder(this.state.contador) }} className="selecter"> ◄ </div>
                                <div onClick={() => { this.avanzar(this.state.contador) }} className="selecter"> ► </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-content2_2">
                        <div className="carrousel">
                            <div className="carrousel-image">
                                <div className="carrousel-dot" >1</div>
                            </div>
                            <div className="carrousel-image">
                                <div className="carrousel-dot" >2</div>
                            </div>
                            <div className="carrousel-image">
                                <div className="carrousel-dot" >3</div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="body-content3">

                </div>
            </div >
        );
    }
}

export default Body;