import React from 'react';
import './ExploreContainer.css';
import Receipt from './Receipt';
import {IonButton} from '@ionic/react'
import AnimalForm from './AnimalForm'
import List from './List';
import {url} from '../App';


interface ContainerProps { }

export const Context: any = React.createContext([])

const flex_container={
    display: 'flex',
    flexDirection: 'column' as 'column',
    width:'100%',
    height: '100vh',
    position:'fixed' as 'fixed'
}

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
     const [message, setMessage] = React.useState('');
     const [earNo, setEarNo] = React.useState(''),
        [name, setName] = React.useState(''),
        [breed, setBreed] = React.useState(''),
        [sire, setSire] = React.useState(''),
        [born, setBorn] = React.useState(''),
        [calving, setCalving] = React.useState(''),
        [bull, setBull] = React.useState(''),
        [pCode, setPcode] = React.useState(''),
        [load, setLoad] = React.useState(false);


     const send = ()=>{
        setLoad(true) 
        fetch(url, {
                method:"POST",
                headers:{'Content-Type': 'application/json', 'Accept-Type':'application/json'},
                body:JSON.stringify({farm:farm, owner:owner, breed:breed, location:location, price:price, 
                         imp_sem:impSem, hv:hv, scheme:scheme, contact:contact, pts:pts, born:born, 
                         calving:calving, bull:bull, pcode:pCode, ear_no:earNo, name:name, sire: sire })
                }).then(r=>r.json()).then(r=>{
                    setMessage(r.message)
                    setLoad(false)
                    }).catch(e=>{
                        setLoad(false)
                        console.log(e.message)
                        })
       
     }
  return (
  <Context.Provider value={{pcodeContext:setPcode, breedContext:setBreed, earContext:setEarNo,
    nameContext:setName, schemeContext:setScheme, hvContext:setHv, impContext:setImpSem, ptsContext:setPts,
    bullContext:setBull, calvingContext:setCalving, bornContext:setBorn, sireContext:setSire, priceContext:setPrice,
    contactContext:setContact, locationContext:setLocation, ownerContext:setOwner, farmContext:setFarm}}>
  <div style={flex_container}>
    <div style={{flexGrow:1}}>
    <h3 style={{textAlign:'center'}}>{next? '🪴🧑‍🌾Farm Details🪴🧑‍🌾': '🐄🧬Insemnation Details🐄🧬'} </h3>
    {next?
        <Receipt/>:
        <AnimalForm/>
    }
    {next?
    <IonButton onClick={()=>setNext(false)} style={{float:'right'}}> Next </IonButton>:
    <><IonButton onClick={()=>setNext(true)}>Back</IonButton>
    <IonButton onClick={send} style={{float:'right'}}>{
        load?'sending...' : 'Done'
    }</IonButton></>}
    <p style={{color:message === 'failed'? 'red':'green'}}>{message}</p>
    </div>
    <div style={{flexGrow:8}}>

        <List/>
        <br/>
        <br/>
        <br/>
    </div>
  </div>  
  </Context.Provider>
  );
};

export default ExploreContainer;
