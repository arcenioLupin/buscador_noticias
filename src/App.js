import React, { Component,Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state = {
      noticias : []

  }

   componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=ar&apiKey=90ae03f043b24e8baad979dd2a0d17e1`

    const respuesta = await fetch (url);
    const noticias = await respuesta.json();

    console.log(noticias.articles);
    this.setState({ noticias : noticias.articles})
  }
  render() {
    return (
      <div>
         <Fragment>
            <Header titulo="Noticias React API"/>
            <div className="container white contenedor-noticias">
               <ListaNoticias
                  noticias ={this.state.noticias}
               />
            </div>
         </Fragment>
      </div>
    );
  }
}

export default App;