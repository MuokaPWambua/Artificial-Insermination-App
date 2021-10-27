import React from 'react';
import {IonCol, IonDatetime, IonRow, IonInput, IonGrid} from '@ionic/react';

const inputStyle={
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-around'
}

const AnimalForm = ()=>{
    const [earNo, setEarNo] = React.useState(''),
        [name, setName] = React.useState(''),
        [breed, setBreed] = React.useState(''),
        [sire, setSire] = React.useState(''),
        [born, setBorn] = React.useState(''),
        [calving, setCalving] = React.useState(''),
        [h, setH] = React.useState(''),
        [b, setB] = React.useState(''),
        [tw, setTw] = React.useState(''),
        [ab, setAb] = React.useState(''),
        [nk, setNk] = React.useState(''),
        [a, setA] = React.useState(''),
        [so, setSo] = React.useState(''),
        [d, setD] = React.useState(''),
        [sl, setSl] = React.useState(''),
        [aiDate, setAiDate] = React.useState(''),
        [bull, setBull] = React.useState(''),
        [pCode, setPcode] = React.useState(''),
        [time, setTime] = React.useState('');
    
    return(
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonInput type='number' placeholder='Ear No.' onIonChange={e=>setEarNo(e.target.value)}/>
                </IonCol>
                <IonCol>
                    <IonInput type='text' placeholder='Name' onIonChange={e=>setName(e.target.value)}/>
                </IonCol>
               <IonCol>
                    <IonInput type='text' placeholder='Breed' onIonChange={e=>setBreed(e.target.value)}/>
                </IonCol>
               <IonCol>
                    <IonInput type='text' placeholder='Sire' onIonChange={e=>setSire(e.target.value)}/>
                </IonCol>
               <IonCol>
                    <IonDatetime placeholder='Born' displayFormat="MM DD YY" onIonChange={e=>setBorn(e.target.value)}/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonDatetime displayFormat="MM DD YY" placeholder='Calve' onIonChange={e=>setCalving(e.target.value)}/>
                </IonCol>
                <IonCol style={inputStyle}>
                   <IonInput placeholder='H' onIonChange={e=>setH(e.target.value)}/>
                   <IonInput placeholder='B' onIonChange={e=>setB(e.target.value)}/>
                   <IonInput placeholder='TW' onIonChange={e=>setTw(e.target.value)}/>
                   <IonInput placeholder='AB' onIonChange={e=>setAb(e.target.value)}/>
                   <IonInput placeholder='NK' onIonChange={e=>setNk(e.target.value)}/>
               </IonCol>
               <IonCol style={inputStyle}>
                   <IonInput placeholder='A' onIonChange={e=>setA(e.target.value)}/>
                   <IonInput placeholder='SO' onIonChange={e=>setSo(e.target.value)}/>
                   <IonInput placeholder='D' onIonChange={e=>setD(e.target.value)}/>
                   <IonInput placeholder='SL' onIonChange={e=>setSl(e.target.value)}/>
                   <IonInput placeholder='NK' onIonChange={e=>setNk(e.target.value)}/>
                </IonCol>
           </IonRow>
           <IonRow>
               <IonCol>
                    <IonDatetime displayFormat="MM DD YY"
                        placeholder='AI Date' onIonChange={e=>setAiDate(e.target.value)}/>
               </IonCol>
               <IonCol>
                    <IonDatetime displayFormat="h:mm a"
                            placeholder='AI Time' onIonChange={e=>setTime(e.target.value)}/>
               </IonCol>
               <IonCol>
                    <IonInput placeholder='Bull' type='text' onIonChange={e=>setBull(e.target.value)}/>
               </IonCol> 
               <IonCol>
                    <IonInput placeholder='P.Code' type='text' onIonChange={e=>setPcode(e.target.value)}/>
               </IonCol> 
           </IonRow>
        </IonGrid>

    )
}
export default AnimalForm;

