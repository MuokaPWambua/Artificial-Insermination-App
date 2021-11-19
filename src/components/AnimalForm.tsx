import React from 'react';
import {IonCol, IonDatetime, IonRow, IonInput, IonGrid} from '@ionic/react';
import {Context} from './ExploreContainer'


const AnimalForm = ()=>{
    const {breedContext, pcodeContext, earContext, bornContext, bullContext,
        sireContext, calvingContext, nameContext, priceContext} = React.useContext(Context),
    setBreed = breedContext,
    setPcode =  pcodeContext,
    setEarNo = earContext,
    setBorn = bornContext,
    setSire = sireContext,
    setCalving = calvingContext,
    setName = nameContext,
    setBull = bullContext,
    setPrice = priceContext;

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
            </IonRow>
            <IonRow style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <IonCol>
                    <IonInput type='text' placeholder='Sire' onIonChange={(e:any)=>setSire(e.target.value)}/>
                </IonCol>
               <IonCol>
                    <IonDatetime placeholder='Born' displayFormat="MM DD YY" onIonChange={(e:any)=>setBorn(e.target.value)}/>
                </IonCol>
                <IonCol>
                    <IonDatetime displayFormat="MM DD YY" placeholder='Calving'
                    onIonChange={(e:any)=>setCalving(e.target.value)}/>
                </IonCol>
           </IonRow>
            <IonRow>
                <IonCol>
                    <IonInput placeholder='Bull' type='text' onIonChange={(e:any)=>setBull(e.target.value)}/>
                </IonCol> 
                <IonCol>
                    <IonInput placeholder='P.Code' type='text' onIonChange={(e:any)=>setPcode(e.target.value)}/>
               </IonCol> 
                <IonCol>
                    <IonInput placeholder='price' type='number' onIonChange={(e:any)=>setPrice(e.target.value)}/>
               </IonCol> 

           </IonRow>
        </IonGrid>

    )
}
export default AnimalForm;

