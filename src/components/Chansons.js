import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import '../../src/App.css';


export class Chansons extends React.Component{

    constructor(props){
        super(props);
    }



    render() {
        return(
            <>
                < Row >
                    <Col  lg xl md = "6" sm ="12" className="m-1 text-center">
                    <img 
                        src={this.props.src}
                        alt={this.props.alt}
                        title={this.props.title}
                        id={this.props.id}
                        className="img-fluid"
                    />
                    </Col>
                    <Col lg xl md = "6" sm = "12">
                        <ol>
                            <li>
                            {this.props.titres}
                            </li>
                        </ol>
                    </Col>
                    </Row>
       
            </>
        )
    }
}
/* return (pistes.map((element, i) => (
    <>
    <Chansons
    id = {element.id}
    key = {"chanson" + i}
    src = {element.src}
    alt = {element.alt}
    title = {element.title}
    album = {element.album}
    groupe = {element.groupe}
    pistes = {element.pistes}
    /> */