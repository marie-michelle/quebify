/* Par Marie-Michelle Beaupré, 2020 */

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Deconnexion } from '../components/Deconnexion';
import '../../src/App.css';

export class BarNav extends React.Component {

render(){

  return(
  <>

  <Navbar Navbar fixed="top" bg="light" variant="light" >

    <Navbar.Brand href="#home">
      <img src = {require("../img/quebify-logo.png")} alt='Logo' title='Logo' className='logo'/>
    </Navbar.Brand>

    <Nav className="mr-auto">
    </Nav>
      <Deconnexion/>

    </Navbar>
  </>

);}}
