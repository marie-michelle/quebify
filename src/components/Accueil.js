/* Par Marie-Michelle Beaupré, 2020 */

import React from "react";
import '../../src/App.css';
import {Catalogue} from './Catalogue';
import {Connexion} from '../components/Connexion';


export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {connecter: false};
    this.gererConnexion = this.gererConnexion.bind(this);
    this.verifierConnexion = this.verifierConnexion.bind(this);
  }

  verifierConnexion(connexion){
    this.setState({ connecter: connexion });
  }

  gererConnexion(){
    if(this.state.connecter === true){
      return <Catalogue/>;
        
      }else{
      return(
        <Connexion onClick={this.verifierConnexion} />
      )
    }
  }
  render() {
    return (
      <>
        {this.gererConnexion()}
      </>  
    );
  }
}