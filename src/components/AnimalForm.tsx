import React from 'react';
import {IonCol, IonDatetime, IonRow, IonInput, IonGrid} from '@ionic/react';
import {Context} from './ExploreContainer'
const inputStyle={
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-around'
}


const AnimalForm = ()=>{
    const [setBreed, setPcode, setEarNo, setBorn,
    setTime, setAiDate, setBull, setSire, setCalving, setName] = React.useContext(Context)
    return(
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonInput type='text' placeholder='Breed' onIonChange={(e:any)=>setBreed(e.target.value)}/>
                </IonCol>

                <IonCol>
                    <IonInput type='number' placeholder='Ear No.' onIonChange={(e:any)=>setEarNo(e.target.value)}/>
                </IonCol>
                <IonCol>
                    <IonInput type='text' placeholder='Name' onIonChange={(e:any)=>setName(e.target.value)}/>
                </IonCol>
               <IonCol>
                    <IonInput type='text' placeholder='Sire' onIonChange={(e:any)=>setSire(e.target.value)}/>
                </IonCol>
            </IonRow>
            <IonRow style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <IonCol>
                    <IonDatetime placeholder='Born' displayFormat="MM DD YY" onIonChange={(e:any)=>setBorn(e.target.value)}/>
                </IonCol>
                <IonCol>
                    <IonDatetime displayFormat="MM DD YY" placeholder='Calving Date' onIonChange={(e:any)=>setCalving(e.target.value)}/>
                </IonCol>
           </IonRow>
           <IonRow>
               <IonCol>
                    <IonInput placeholder='Bull' type='text' onIonChange={(e:any)=>setBull(e.target.value)}/>
               </IonCol> 

               <IonCol>
                    <IonDatetime displayFormat="MM DD YY" placeholder='AI Date' onIonChange={(e:any)=>setAiDate(e.target.value)}/>
               </IonCol>
               <IonCol>
                    <IonDatetime displayFormat="h:mm a" placeholder='AI Time' onIonChange={(e:any)=>setTime(e.target.value)}/>
               </IonCol>
                <IonCol>
                    <IonInput placeholder='P.Code' type='text' onIonChange={(e:any)=>setPcode(e.target.value)}/>
               </IonCol> 
           </IonRow>
        </IonGrid>

    )
}
export default AnimalForm;

