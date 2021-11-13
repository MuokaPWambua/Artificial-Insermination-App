import React from 'react';
import './ExploreContainer.css';
import Receipt from './Receipt';
import {IonButton} from '@ionic/react'
import AnimalForm from './AnimalForm'

interface ContainerProps { }

export const Context: any = React.createContext([])
const storage = window.localStorage
const ExploreContainer: React.FC<ContainerProps> = () => {
     const [impSem, setImpSem]:any = React.useState(storage.getItem('impSem'));

     const [pts, setPts]:any = React.useState(storage.getItem('pts'));
     const [hv, setHv]:any = React.useState(storage.getItem('hv'));
     const [scheme, setScheme]:any = React.useState(storage.getItem('scheme'));
     const [farm, setFarm]:any = React.useState(storage.getItem('farm'));
     const [owner, setOwner]:any = React.useState(storage.getItem('owner'));
     const [location, setLocation]:any = React.useState(storage.getItem('location'));
     const [contact, setContact]:any = React.useState(storage.getItem('contact'));
     const [next, setNext] = React.useState(true);

     const [earNo, setEarNo] = React.useState(''),
        [name, setName] = React.useState(''),
        [breed, setBreed] = React.useState(''),
        [sire, setSire] = React.useState(''),
        [born, setBorn] = React.useState(''),
        [calving, setCalving] = React.useState(''),
        [aiDate, setAiDate] = React.useState(''),
        [bull, setBull] = React.useState(''),
        [pCode, setPcode] = React.useState(''),
        [time, setTime] = React.useState('');

    /*React.useEffect(()=>{
        storage.setItem('impSem', impSem)
        storage.setItem('hv', hv)
        storage.setItem('pts', pts)
        storage.setItem('scheme', scheme)
        storage.setItem('farm', farm)
        storage.setItem('owner', owner)
        storage.setItem('location', location)
        storage.setItem('contact', contact)
   },[farm, hv, pts, scheme, owner, location, contact, impSem])*/

     const send = ()=>{
        fetch('http://localhost:5000/', {
                method:"POST",
                headers:{'Content_Type': 'application/json'},
                body:JSON.stringify({farm:farm, owner:owner, breed:breed, location:location, 
                         imp_sem:impSem, hv:hv, scheme:scheme, contact:contact, pts:pts, 
                         calving:calving, bull:bull, pcode:pCode})
                }).then(r=>r.json()).then(r=>console.log(r)).catch(e=>console.log(e.message))
     }
  return (
    <Context.Provider value={{pcodeContext:setPcode, breedContext:setBreed, earContext:setEarNo,
    nameContext:setName, schemeContext:setScheme, hvContext:setHv, impContext:setImpSem, ptsContext:setPts,
    bullContext:setBull, calvingContext:setCalving, bornContext:setBorn, sireContext:setSire,
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
