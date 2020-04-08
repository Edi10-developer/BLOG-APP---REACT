import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {};

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        // var random = Math.floor(Math.random() * 3);

        peliculas[0].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas

        });
    }

    favorita = (pelicula, indice) => {
        console.log("Favorita marcada");
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });

    }

    componentWillMount() {
        // alert("Se va a montar el componente");
        this.setState({
            peliculas: [
                { titulo: 'Batman vs Superman', image: "http://im.rediff.com/movies/2016/mar/24batman-vs-superman.jpg" },
                { titulo: 'Gran Torino', image: "http://www.top10films.co.uk/img/gran-torino_image3.jpg" },
                { titulo: 'Looper', image: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2012/09/Looper-1280x720-D.jpg" }
            ],

            nombre: 'Edi selimi',

            favorita: {}
        });
    }


    componentWillUnmount() {
        // alert("Me voy a desmontar");
    }

    componentDidMount() {
        //  alert("Ya se ha montado el componente");
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        var favorita;
        if (this.state.favorita.titulo) {
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong>La pelicula favorita es:</strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            );
        } else {
            favorita = (
                <p>No hay pelicula favorita</p>
            );
        }
        return (
            <div id="content" className="peliculas">

                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de peliculas favoritas de {this.state.nombre} </p>
                <p>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo de Batman
                    </button>
                </p>




                {/*  this.state.favorita.titulo ? (

                        <p className="favorita" style={pStyle}>
                            <strong>La pelicula favorita es:</strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>

                    ) : (  //else

                            <p>No hay pelicula favorita</p>

                    )
                    */}



                {/**  Crear componente pelicula */}

                {favorita}

                <div id="articles" className="peliculas">

                    {this.state.peliculas.map((pelicula, i) => {
                        return (
                            <Pelicula key={i}
                                pelicula={pelicula}
                                indice={i}
                                marcarFavorita={this.favorita}
                            />
                        )
                    })
                    }
                </div>
            </div>

        );

    }
}


export default Peliculas;