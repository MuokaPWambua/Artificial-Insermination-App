import React from 'react';
import './ExploreContainer.css';
import Receipt from './Receipt';
import {IonButton} from '@ionic/react'
import AnimalForm from './AnimalForm'

interface ContainerProps { }

export const Context: any = React.createContext([])
const storage = window.localStorage
const ExploreContainer: React.FC<ContainerProps> = () => {
     const [impSem, setImpSem]:any = React.useState(' ');
     const [price, setPrice]:any = React.useState('');
     const [pts, setPts]:any = React.useState(' ');
     const [hv, setHv]:any = React.useState(' ');
     const [scheme, setScheme]:any = React.useState(' ');
     const [farm, setFarm]:any = React.useState(' ');
     const [owner, setOwner]:any = React.useState(' ');
     const [location, setLocation]:any = React.useState(' ');
     const [contact, setContact]:any = React.useState(' ');
     const [next, setNext] = React.useState(true);

     const [earNo, setEarNo] = React.useState(''),
        [name, setName] = React.useState(''),
        [breed, setBreed] = React.useState(''),
        [sire, setSire] = React.useState(''),
        [born, setBorn] = React.useState(''),
        [calving, setCalving] = React.useState(''),
        [bull, setBull] = React.useState(''),
        [pCode, setPcode] = React.useState('');


     const send = ()=>{
        fetch('http://localhost:5000/', {
                method:"POST",
                headers:{'Content-Type': 'application/json', 'Accept-Type':'application/json'},
                body:JSON.stringify({farm:farm, owner:owner, breed:breed, location:location, price:price, 
                         imp_sem:impSem, hv:hv, scheme:scheme, contact:contact, pts:pts, born:born, 
                         calving:calving, bull:bull, pcode:pCode, ear_no:earNo, name:name, sire: sire })
                }).then(r=>r.json()).then(r=>console.log(r)).catch(e=>console.log(e.message))
     }
  return (
    <Context.Provider value={{pcodeContext:setPcode, breedContext:setBreed, earContext:setEarNo,
    nameContext:setName, schemeContext:setScheme, hvContext:setHv, impContext:setImpSem, ptsContext:setPts,
    bullContext:setBull, calvingContext:setCalving, bornContext:setBorn, sireContext:setSire, priceContext:setPrice,
    contactContext:setContact, locationContext:setLocation, ownerContext:setOwner, farmContext:setFarm}}>
    <h3 style={{textAlign:'center'}}>{next? '🪴🧑‍🌾Farm Details🪴🧑‍🌾': '🐄🧬Insemnation Details🐄🧬'} </h3>
    {next?
        <Receipt/>:
        <AnimalForm/>
    }
    {next?
    <IonButton onClick={()=>setNext(false)} style={{float:'right'}}> Next </IonButton>:
    <><IonButton onClick={()=>setNext(true)}> Back </IonButton>
    <IonButton onClick={send} style={{float:'right'}}>Done</IonButton></>}

    </Context.Provider>
  );
};

export default ExploreContainer;
