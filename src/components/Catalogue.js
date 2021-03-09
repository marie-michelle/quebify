/* Par Marie-Michelle Beaupré, 2020 */

import React from "react";
import '../../src/App.css';
import Container from "react-bootstrap/Container"; 
import Form from "react-bootstrap/Form"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 
import Button from "react-bootstrap/Button"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import { Albums } from '../components/Albums';
import { AlbumSeul } from "./AlbumSeul";

let albums = [
    {
        id: "1",
        src : require ('../img/arcadefire-everything-now.jpg'),
        alt : 'Arcade Fire - Everything Now',
        title: 'Arcade Fire',
        album: 'Everything Now',
        groupe: 'Arcade Fire',
        pistes: [{
            nom: 'Everything_Now (Continued)',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
            },
            {
                nom: 'Everything_Now',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Signs of Life',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Creature Comfort',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Peter Pan',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Chemistry',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Infinite Content',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Infinite_Content',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Electric Blue',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Good Gos Damn',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Put Your Money on Me',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'We Don\'t Deserve Love',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Everything Now Continued',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },],
        
    },
    
    {
        id: "2",
        src : require ('../img/half-moon-run-a-blemish-in-the-greatlight.jpg'),
        alt : 'Half Moon Run - A Blemish in the Greatlight',
        title: 'Half Moon Run',
        album: 'A Blemish in the Greatlight',
        groupe: 'Half Moon Run',
        pistes: [{
            nom: 'Then Again',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
            },
            {
                nom: 'Favourite Boy',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Flesh and Blood',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Natural Disaster',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Black Diamond',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Yani\'s Song',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Razorblade',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Undercurrents',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'Jello on my Mind',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
            {
                nom: 'New Truth',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
            },
    ],
    },
       
    {
        id: "3",
        src : require ('../img/leonard-cohen-you-want-it-darker.jpg'),
        alt : 'Lehonard Cohen - You Want it Darker',
        title: 'Lehonard Cohen',
        album: 'You Want it Darker',
        groupe: 'Leonard Cohen',
        pistes: [{
            nom: 'You Want It Darker',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>If you are the dealer, I'm out of the game
    If you are the healer, it means I'm broken and lame
    If thine is the glory then mine must be the shame
    You want it darker
    We kill the flame
    Magnified, sanctified, be thy holy name
    Vilified, crucified, in the human frame
    A million candles burning for the help that never came
    You want it darker
    Hineni, hineni
    I'm ready, my lord
    There's a lover in the story
    But the story's still the same
    There's a lullaby for suffering
    And a paradox to blame
    But it's written in the scriptures
    And it's not some idle claim
    You want it darker
    We kill the flame
    They're lining up the prisoners
    And the guards are taking aim
    I struggled with some demons
    They were middle class and tame
    I didn't know I had permission to murder and to maim
    You want it darker
    Hineni, hineni
    I'm ready, my lord
    Magnified, sanctified, be thy holy name
    Vilified, crucified, in the human frame
    A million candles burning for the love that never came
    You want it darker
    We kill the flame
    If you are the dealer, let me out of the game
    If you are the healer, I'm broken and lame
    If thine is the glory, mine must be the shame
    You want it darker
    Hineni, hineni
    Hineni, hineni
    I'm ready, my lord
    Hineni
    Hineni, hineni
    Hineni</p></Col></Row>,
                     </>
            }, 
            {
            nom: 'Leaving the Table',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>I'm leaving the table
    I'm out of the game
    I don't know the people
    In your picture frame
    If I ever loved you, oh no, no
    It's a crying shame
    If I ever loved you
    If I knew your name
    You don't need a lawyer
    I'm not making a claim
    You don't need to surrender
    I'm not taking aim
    I don't need a lover, no, no, no
    The wretched beast is tame
    I don't need a lover
    So blow out the flame
    There's nobody missing
    There is no reward
    Little by little
    We're cutting the cord
    We're spending the treasure, oh no, no
    That love cannot afford
    I know you can feel it
    The sweetness restored
    I…</p></Col></Row>,
                     </>
            }, 
            {
            nom: 'On the Level',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
            }, 
            {
            nom: 'If I Didn\'t Have Your Love',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
            }, 
            {
            nom: 'Traveling Light',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
            }, 
            {
            nom: 'It Seemed the Better Way',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
            },
            {
            nom: 'Steer Your Way',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
            },
            {
            nom: 'String Reprise / Treaty',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
            },],
    },
       
    {
        id: "4",
        src : require ('../img/les-deuxluxes-lighter-fluid.jpg'),
        alt : 'Les Deuxluxes - Lighter Fluid',
        title: 'Les Deuxluxes',
        album: 'Lighter Fluid',
        groupe: 'Les Deuxluxes',
        pistes: [{
                nom: 'Lighter Fluid',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'No Way',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'I Am the Man',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'For I Myself',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Vacances Everest',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Beware of the Dog',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Down on the Street | Loose',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'L\'insistance',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Encender',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Everything of Beauty',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Smoking in Bed',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
        ]
    },
       
    {
        id: "5",
        src : require ('../img/we-are-wolves-wrong.jpg'),
        alt : 'We Are Wolves - Wrong',
        title: 'We Are Wolves',
        album: 'Wrong',
        groupe: 'We Are Wolves',
        pistes: [{
                nom: 'Inconsiderate',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Cynical' ,
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Wicked Games',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Wrong',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'I Don\'t Mind',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Broken Arrow',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'In The Land Of The Real',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Unknown Flowers',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Au revoir les crapules',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Hands Around My Neck',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Melting',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
                {
                nom: 'Dislocation',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                <p>Bla Bla</p></Col></Row>,
                </>
                },
            ],
            },     
          
     {
        id: "6",
        src : require ('../img/plume-all-dressed.jpg'),
        alt : 'Plume - All Dressed',
        title: 'Plume',
        album: 'All Dressed',
        groupe: 'Plume',
        pistes: [{
                nom: 'Nous autres, on s\'en fout',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Moé, j\'aime pas ça travailler',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Vie d\'ange',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'New-Orleans',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Bébé-Rama',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Le reel de la Casa',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Cobaye blues',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Mauvaise herbe (bleue)',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Ça bluffe!',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Fucké-Fucké',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Mognon donc!',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },       
                {
                nom: 'Gaspoésie',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },        
                {
                nom: 'Sans cérémonie',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Springtime',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Not\' beau local',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Vazydrû',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Tête de cochon',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Catholique cowboy',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Margarine molle',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Tabou',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Beau et chaud',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Les pauvres',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Attrappe-nigaud',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                },
                {
                nom: 'Bienheureuse récupération',
                paroles: <><Row><Col xl ls md = "6" sm = "12">
                         <p>Bla Bla</p></Col></Row>,
                         </>
                }, 
            ],
        
    },
    
    ]

export class Catalogue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rechercher:"",
        listeAlbums : albums, 
        AlbumSeul: false};
    this.Rechercher = this.Rechercher.bind(this);
    this.Effacer = this.Effacer.bind(this);

    }

    Rechercher(){
        let motRecherche = document.getElementById("inputRechercher").value;
        this.setState({rechercher:motRecherche});
    }
    Effacer(){
        document.getElementById("inputRechercher").value = "";
        this.setState({rechercher:""});
      }

    render() {

return (
    <Container fluid>
    <Row>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            id="inputRechercher"
            placeholder="Rechercher"
            aria-label="Rechercher"
            aria-describedby="Rechercher"
            onChange={this.Rechercher}
          />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={this.Rechercher}>Rechercher</Button>
            </InputGroup.Append>
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={this.Effacer}>Annuler</Button>
            </InputGroup.Append>
          </InputGroup>
    </Form>
    </Row>
    
    <Row>
        {this.AfficherAlbums()}
    </Row>
    </Container>
);
}

AfficherAlbums() {

    if (this.state.AlbumSeul) {
        return <AlbumSeul back={() => this.AfficherAlbums()} albums={albums[this.state.albumClick]} />
    }
    if(this.state.rechercher === ""){
        return this.state.listeAlbums.map((element, i) => (
            <Albums 
                key = {"album" + i}
                src = {element.src}
                alt = {element.alt}
                title = {element.title}
                album = {element.album}
                groupe = {element.groupe} 
                AlbumSeul={() => this.setState({ AlbumSeul: true, albumClick: i})}
            />
        ));
    }
    else{
        const resultats = this.state.listeAlbums.filter(l => l.album.toLowerCase().includes(this.state.rechercher.toLowerCase()) && (m => m.groupe.toLowerCase().includes(this.state.rechercher.toLowerCase())));
        return resultats.map((element, i) => (
            <Albums 
                key = {'album' + i}
                src = {element.src}
                alt = {element.alt}
                title = {element.title}
                album = {element.album}
                groupe = {element.groupe}  
                AlbumSeul={() => this.setState({ AlbumSeul: true, albumClick: i})}

            />
         ));
        }
    }
}
