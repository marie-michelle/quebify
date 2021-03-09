/* Par Marie-Michelle Beaupré, 2020*/

import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import '../../src/App.css';
import { AlbumSeul } from "./AlbumSeul";
import { ListeChansons } from "./ListeChansons";

export class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
        this.state = {onClick: false};
        this.handleClick = this.handleClick.bind(this);
      
      }

handleClick() {
this.setState({onClick:true});
}

  render() {
const isClicked = this.state.onClick;

if (isClicked) {
  return <ListeChansons/>
}

    return (
<Row >
      <Col  lg xl = "4" md ="6" sm ="12">
      <Card className="m-1" style={{ width: '12rem' }}>
      <Card.Img variant="top"
                src={this.props.src}
                alt={this.props.alt}
                title={this.props.title}
                pistes={this.props.pistes}
                id={this.props.id}
                className="img-fluid"
                onMouseOut={() => this.setState({hovered: false})}
                onMouseOver={() => this.setState({hovered: true})}
                onClick={() => this.handleClick({onClick: true})} 
                style={{transform: `${this.state.hovered ? 'scale(1.02,1.02)' : 'scale(1,1)'}`}}
                />
        <Card.Body>
                 <small className="bold">{this.props.groupe} - </small>
                 <small>{this.props.album}</small>
        </Card.Body>
        </Card>
        
      </Col>
      </Row>
    );
  }
}

