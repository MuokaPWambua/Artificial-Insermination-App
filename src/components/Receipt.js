import React from 'react'
import {IonCol, IonRow, IonInput, IonButton, IonGrid} from  '@ionic/react'


const Receipt =()=>{
     const [impSem, setImpSem] = React.useState('');
     const [pts, setPts] = React.useState('');
     const [hv, setHv] = React.useState('');
     const [scheme, setScheme] = React.useState('');
     const [farm, setFarm] = React.useState('');
     const [owner, setOwner] = React.useState('');
     const [location, setLocation] = React.useState('');
     const [earNo, setEarNo] = React.useState('');
     const [name, setName] = React.useState('');
     const [breed, setBreed] = React.useState('');
     const [born, setBorn] = React.useState('');
     const [calving, setCalving] = React.useState('');
     

     return(
        <IonGrid>
           <IonRow>
               <IonCol>
                    <IonInput placeholder='Imp Sem' type='text'
                    onIonChange={e=>setImpSem(e.target.value)}/>
               </IonCol>
               <IonCol>
                    <IonInput placeholder='P.T.S' type='text'
                    onIonChange={e=>setPts(e.target.value)}/>
                </IonCol>
               <IonCol>
                    <IonInput placeholder='H/V' type='text'
                    onIonChange={e=>setHv(e.target.value)}/>
                </IonCol>
            </IonRow>
           <IonRow>
               <IonCol>
                    <IonInput placeholder='Scheme' type='text'
                    onIonChange={e=>setScheme(e.target.value)}/>
               </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonInput placeholder='Farm' type='text'
                    onIonChange={e=>setFarm(e.target.value)}/>
                </IonCol>
                <IonCol>
                    <IonInput placeholder='Owner' type='text'
                    onIonChange={e=>setOwner(e.target.value)}/>
                </IonCol>
              <IonCol>
                    <IonInput placeholder='Location' type='text'
                    onIonChange={e=>setLocation(e.target.value)}/>
                </IonCol>
            </IonRow>
        </IonGrid> 

     )
}
export default Receipt
