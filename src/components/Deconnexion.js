/* Par Marie-Michelle Beaupré, 2020 */


/* Je ne comprend pas ce qui ne fonctionne pas ici!! :( */

import React from "react";
import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
  constructor(props) {  
    super(props);  
    
  } 

  handleDeconnexion() {
    this.props.onClick(false);
  }
  render() {
    return (
      <Button variant="outline-secondary" onClick={() => this.handleDeconnexion()}>
        Déconnexion
      </Button>
    );
  }
}