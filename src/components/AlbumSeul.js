/* Par Marie-Michelle Beaupré, 2020 */

import React from "react";
import '../../src/App.css';
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import { ListeChansons } from "./ListeChansons";
import { Albums } from "./Albums";
import { Catalogue } from "./Catalogue";


export class AlbumSeul extends React.Component {

    constructor(props){
        super(props); 
        this.state = {onClick : false};
        this.handleClick = this.handleClick.bind(this);
        this.listeTitres = this.listeTitres.bind(this);
        this.retour = this.retour.bind(this);
        }
  
  handleClick() {
  this.setState({onClick:true});
  }

 listeTitres(props) {
      const titres = props.titres;
      const listeTitres = titres.map(() => <li>{this.props.titres}</li> );
      return (
          <ul>{listeTitres}</ul>
      )
  }

  retour() {
    window.history.back();
 }

    render() {

        const isClicked = this.state.onClick;
 /*     const listeTitres = titres.map(() => <li>{this.props.titres}</li> ); */

/*Comment retourner à l'état catalogue initial sans ajouter chaque fois un nouveau catalogue?*/

        if (isClicked) {
          return <Catalogue/>
        }
        return(
            <>
            <Container fluid>
             <Row>
                 <Col lg xl md sm = "1">
                     <img src={require("../img/fleche.png")}
                     onClick={() => this.handleClick({onClick: true})}
                     retour={() => this.retour({retour: true})}
                     />  
                 </Col>
             </Row>
                < Row >
                    <Col  lg xl md = "6" sm ="12" className="m-1 text-center">
                    <img 
                        src={this.props.src}
                        alt={this.props.alt}
                        /*il manque le onClick sur le titre pour retourner les paroles, j'ai passé trop de temps à débugger tout le reste :( */
                        title={this.props.title}
                        className="img-fluid"
                    />
                    </Col>
                    <Col lg xl md = "6" sm = "12">
                        <h4>{this.props.groupe}</h4>
                        <h4>{this.props.album}</h4>
                        <p>{this.props.titres}</p>   
                    </Col>
                    </Row>
                    </Container>       
            </>
        );
    }
}
