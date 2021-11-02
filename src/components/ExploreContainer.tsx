import React from 'react';
import './ExploreContainer.css';
import Receipt from './Receipt';
import {IonButton} from '@ionic/react'
import AnimalForm from './AnimalForm'

interface ContainerProps { }

export const Context: any = React.createContext([])

const ExploreContainer: React.FC<ContainerProps> = () => {
     const [impSem, setImpSem] = React.useState('');
     const [pts, setPts] = React.useState('');
     const [hv, setHv] = React.useState('');
     const [scheme, setScheme] = React.useState('');
     const [farm, setFarm] = React.useState('');
     const [owner, setOwner] = React.useState('');
     const [location, setLocation] = React.useState('');
     const [contact, setContact] = React.useState('');
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
    <Context.Provider value={[setTime, setPcode, setBreed, setEarNo, 
    setName, setScheme, setHv, setImpSem, setPts, setBull, setAiDate,
    setCalving,setBorn, setSire, setContact, setLocation, setOwner, setFarm]}>
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
