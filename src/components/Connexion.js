/* Par Marie-Michelle Beaupré, 2020 */

import React from "react";
import '../../src/App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container, Row, Col} from "react-bootstrap";
import logo from '../img/quebify-logo.png';

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleConnexion = this.handleConnexion.bind(this);  
  } 
  handleConnexion(){
    let connecter = true;

    const utilisateur = document.getElementById('text').value;
    const motDePasse = document.getElementById('pass').value;

    if (utilisateur.toLowerCase() === "test" && motDePasse === "test"){
        connecter = true;

    this.props.onClick(connecter);  
  }}

  render() {
    return (
    <Container fluid className="pt-5 mt-5">
        <Jumbotron>
          <Row className="text-center">
            <Col>
              <img src={logo} alt="Quebify" className="text-center"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="text">
                  <Form.Label>Utilisateur</Form.Label>
                  <Form.Control type="text" placeholder="test" id="text"/>
                </Form.Group>

                <Form.Group controlId="motDePasse">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" placeholder="test" id="pass"/>
                </Form.Group>

                <Button variant="outline-secondary" onClick={this.handleConnexion}>
                  Soumettre
                </Button>
              </Form>
            </Col>
          </Row>
        </Jumbotron>
        </Container>  
    );
  }
}
