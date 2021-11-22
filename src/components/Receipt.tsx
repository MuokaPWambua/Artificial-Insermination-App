import React from 'react'
import {IonCol, IonRow, IonInput,IonGrid} from  '@ionic/react'
import {Context} from './ExploreContainer'


const Receipt=()=>{
     const {impContext, locationContext, ptsContext, ownerContext, 
         farmContext, schemeContext, hvContext, contactContext} = React.useContext(Context),
        setImpSem = impContext,
        setLocation = locationContext,
        setPts = ptsContext,
        setOwner = ownerContext,
        setFarm = farmContext,
        setScheme = schemeContext,
        setHv = hvContext,
        setContact = contactContext;

     return(

        <IonGrid>
           <IonRow>
               <IonCol>
                    <IonInput placeholder='Imp Sem' type='text'
                    onIonChange={(e:any)=>setImpSem(e.target.value)}/>
               </IonCol>
               <IonCol>
                    <IonInput placeholder='P.T.S' type='text' 
                    onIonChange={(e:any)=>setPts(e.target.value)}/>
                </IonCol>
               <IonCol>
                    <IonInput placeholder='H/V' type='text' 
                    onIonChange={(e:any)=>setHv(e.target.value)}/>
                </IonCol>
            </IonRow>
           <IonRow>
               <IonCol>
                    <IonInput placeholder='Scheme' type='text' 
                    onIonChange={(e:any)=>setScheme(e.target.value)}/>
               </IonCol>
               <IonCol>
                    <IonInput placeholder='+254729174754' type='number'
                    onIonChange={(e:any)=>setContact(e.target.value)}/>
               </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonInput placeholder='Farm' type='text' 
                    onIonChange={(e:any)=>setFarm(e.target.value)}/>
                </IonCol>
                <IonCol>
                    <IonInput placeholder='Owner' type='text'
                    onIonChange={(e:any)=>setOwner(e.target.value)}/>
                </IonCol>
              <IonCol>
                    <IonInput placeholder='Location' type='text'
                    onIonChange={(e:any)=>setLocation(e.target.value)}/>
                </IonCol>
            </IonRow>
        </IonGrid> 
	
     )
}
export default Receipt
