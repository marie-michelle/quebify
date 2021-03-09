/* Par Marie-Michelle Beaupré, 2020 
*/


import React from "react";
import '../../src/App.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";  
import { AlbumSeul } from "./AlbumSeul";

const album = [
{
    id: "1",
    src : require ('../img/arcadefire-everything-now.jpg'),
    alt : 'Arcade Fire - Everything Now',
    title: 'Arcade Fire',
    album: 'Everything Now',
    groupe: 'Arcade Fire',

    titres: ['Everything_Now (Continued)', 'Everything_Now','Signs of Life','Creature Comfort','Peter Pan','Chemistry','Infinite Content','Electric Blue','Good Gos Damn','Put Your Money on Me','We Don\'t Deserve Love','Everything Now Continued'],
    paroles: <><Row><Col xl ls md = "6" sm = "12">
            <p>Bla Bla</p></Col></Row>,
            </>
            /*J'ai voulu faire un tableau dans un tableau pour être en mesure d'associer les bonnes paroles aux bonnes chansons: je n'ai pas réussi :(.
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
        }, */
    
},

{
    id: "2",
    src : require ('../img/half-moon-run-a-blemish-in-the-greatlight.jpg'),
    alt : 'Half Moon Run - A Blemish in the Greatlight',
    title: 'Half Moon Run',
    album: 'A Blemish in the Greatlight',
    groupe: 'Half Moon Run',
    titres: ['Then Again','Favourite Boy','Flesh and Blood','Natural Disaster','Black Diamond','Yani\'s Song','Razorblade','Undercurrents','Jello on my Mind','New Truth'],
    paroles: <><Row><Col xl ls md = "6" sm = "12">
    <p>Bla Bla</p></Col></Row>,
    </>  
        
        /* {
        titres: 'Then Again',
        paroles: <><Row><Col xl ls md = "6" sm = "12">
                 <p>Bla Bla</p></Col></Row>,
                 </>
        },
        {
            titres: 'Favourite Boy',
            paroles: <><Row><Col xl ls md = "6" sm = "12">
                     <p>Bla Bla</p></Col></Row>,
                     </>
        },
        {
            titres: 'Flesh and Blood',
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
 */
},
   
{
    id: "3",
    src : require ('../img/leonard-cohen-you-want-it-darker.jpg'),
    alt : 'Lehonard Cohen - You Want it Darker',
    title: 'Lehonard Cohen',
    album: 'You Want it Darker',
    groupe: 'Leonard Cohen',
    titres:['You Want It Darker','Leaving the Table','On the Level','If I Didn\'t Have Your Love','Traveling Light','It Seemed the Better Way','Steer Your Way','String Reprise / Treaty',],
    paroles: <><Row><Col xl ls md = "6" sm = "12">
    <p>If you are the dealer, I'm out of the game<br/>
If you are the healer, it means I'm broken and lame<br/>
If thine is the glory then mine must be the shame<br/>
You want it darker<br/>
We kill the flame<br/>
Magnified, sanctified, be thy holy name<br/>
Vilified, crucified, in the human frame<br/>
A million candles burning for the help that never came<br/>
You want it darker<br/>
Hineni, hineni<br/>
I'm ready, my lord<br/>
There's a lover in the story<br/>
But the story's still the same<br/>
There's a lullaby for suffering<br/>
And a paradox to blame<br/>
But it's written in the scriptures<br/>
And it's not some idle claim<br/>
You want it darker<br/>
We kill the flame<br/>
They're lining up the prisoners<br/>
And the guards are taking aim<br/>
I struggled with some demons<br/>
They were middle class and tame<br/>
I didn't know I had permission to murder and to maim<br/>
You want it darker<br/>
Hineni, hineni<br/>
I'm ready, my lord<br/>
Magnified, sanctified, be thy holy name<br/>
Vilified, crucified, in the human frame<br/>
A million candles burning for the love that never came<br/>
You want it darker<br/>
We kill the flame<br/>
If you are the dealer, let me out of the game<br/>
If you are the healer, I'm broken and lame<br/>
If thine is the glory, mine must be the shame<br/>
You want it darker<br/>
Hineni, hineni<br/>
Hineni, hineni<br/>
I'm ready, my lord<br/>
Hineni<br/>
Hineni, hineni<br/>
Hineni</p></Col></Row></>,
   /* {
        nom: 'You Want It Darker',
        paroles: <><Row><Col xl ls md = "6" sm = "12">
                 <p>If you are the dealer, I'm out of the game<br/>
If you are the healer, it means I'm broken and lame<br/>
If thine is the glory then mine must be the shame<br/>
You want it darker<br/>
We kill the flame<br/>
Magnified, sanctified, be thy holy name<br/>
Vilified, crucified, in the human frame<br/>
A million candles burning for the help that never came<br/>
You want it darker<br/>
Hineni, hineni<br/>
I'm ready, my lord<br/>
There's a lover in the story<br/>
But the story's still the same<br/>
There's a lullaby for suffering<br/>
And a paradox to blame<br/>
But it's written in the scriptures<br/>
And it's not some idle claim<br/>
You want it darker<br/>
We kill the flame<br/>
They're lining up the prisoners<br/>
And the guards are taking aim<br/>
I struggled with some demons<br/>
They were middle class and tame<br/>
I didn't know I had permission to murder and to maim<br/>
You want it darker<br/>
Hineni, hineni<br/>
I'm ready, my lord<br/>
Magnified, sanctified, be thy holy name<br/>
Vilified, crucified, in the human frame<br/>
A million candles burning for the love that never came<br/>
You want it darker<br/>
We kill the flame<br/>
If you are the dealer, let me out of the game<br/>
If you are the healer, I'm broken and lame<br/>
If thine is the glory, mine must be the shame<br/>
You want it darker<br/>
Hineni, hineni<br/>
Hineni, hineni<br/>
I'm ready, my lord<br/>
Hineni<br/>
Hineni, hineni<br/>
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
        },*/
},
   
{
    id: "4",
    src : require ('../img/les-deuxluxes-lighter-fluid.jpg'),
    alt : 'Les Deuxluxes - Lighter Fluid',
    title: 'Les Deuxluxes',
    album: 'Lighter Fluid',
    groupe: 'Les Deuxluxes',
    titres: ['Lighter Fluid','No Way','I Am the Man','For I Myself','Vacances Everest','Beware of the Dog','Down on the Street | Loose','L\'insistance','Encender','Everything of Beauty','Smoking in Bed'],
   /* {
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
        },*/
},
   
{
    id: "5",
    src : require ('../img/we-are-wolves-wrong.jpg'),
    alt : 'We Are Wolves - Wrong',
    title: 'We Are Wolves',
    album: 'Wrong',
    groupe: 'We Are Wolves',
    titres: ['Inconsiderate', 'Cynical', 'Wicked Games', 'Wrong', 'I Don\'t Mind', 'Broken Arrow', 'In The Land Of The Real', 'Unknown Flowers', 'Au revoir les crapules','Hands Around My Neck','Melting','Dislocation'],
    paroles: <><Row><Col xl ls md = "6" sm = "12">
    <p>Bla Bla</p></Col></Row>,
    </>
    /*{
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
            }, */
},     
      
 {
    id: "6",
    src : require ('../img/plume-all-dressed.jpg'),
    alt : 'Plume - All Dressed',
    title: 'Plume',
    album: 'All Dressed',
    groupe: 'Plume',
    titres: ['Nous autres, on s\'en fout','Moé, j\'aime pas ça travailler','Vie d\'ange','New-Orleans','Bébé-Rama','Le reel de la Casa','Cobaye blues','Mauvaise herbe (bleue)','Ça bluffe!','Fucké-Fucké','Mognon donc!','Gaspoésie','Sans cérémonie','Springtime','Not\' beau local','Vazydrû','Tête de cochon','Catholique cowboy','Margarine molle','Tabou','Beau et chaud','Beau et chaud','Attrappe-nigaud','Bienheureuse récupération'],
    paroles:  <> <Row><Col xl ls md = "6" sm = "12"> <p>Bla Bla</p> </Col></Row>, </>  
    /*{
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
            }, */
},


]

export class ListeChansons extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render(){

/*    J'ai essayé d'imaginer la façon dont je pourrais afficher chacun des album séparément si cliqué, mais sans succès.

if (id === "1"){
          return ...
      } */


        return album.map((element, i) => (
           

            <AlbumSeul
            id = {element.id}
            key = {"chanson" + i}
            src = {element.src}
            alt = {element.alt}
            title = {element.title}
            album = {element.album}
            groupe = {element.groupe}
            titres = {element.titres}
            paroles = {element.paroles}
        /> 
    
        ));
    }
}
