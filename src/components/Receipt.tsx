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
	<form>
        <IonGrid>
           <IonRow>
               <IonCol>
                    <IonInput placeholder='Imp Sem' type='text' required
                    onIonChange={(e:any)=>setImpSem(e.target.value)}/>
               </IonCol>
               <IonCol>
                    <IonInput placeholder='P.T.S' type='text' required
                    onIonChange={(e:any)=>setPts(e.target.value)}/>
                </IonCol>
               <IonCol>
                    <IonInput placeholder='H/V' type='text' required
                    onIonChange={(e:any)=>setHv(e.target.value)}/>
                </IonCol>
            </IonRow>
           <IonRow>
               <IonCol>
                    <IonInput placeholder='Scheme' type='text' required
                    onIonChange={(e:any)=>setScheme(e.target.value)}/>
               </IonCol>
               <IonCol>
                    <IonInput placeholder='Contact' type='text' required
                    onIonChange={(e:any)=>setContact(e.target.value)}/>
               </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonInput placeholder='Farm' type='text' required
                    onIonChange={(e:any)=>setFarm(e.target.value)}/>
                </IonCol>
                <IonCol>
                    <IonInput placeholder='Owner' type='text' required
                    onIonChange={(e:any)=>setOwner(e.target.value)}/>
                </IonCol>
              <IonCol>
                    <IonInput placeholder='Location' type='text' required
                    onIonChange={(e:any)=>setLocation(e.target.value)}/>
                </IonCol>
            </IonRow>
        </IonGrid> 
	</form>
     )
}
export default Receipt
