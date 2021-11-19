import React from 'react';
import { IonList, IonItem, IonButton, IonLabel, IonContent, IonIcon} from '@ionic/react';
import {AppContext} from '../App';
import useFetch from './useFetch';
import {call, checkmark} from 'ionicons/icons'
const List: React.FC = () =>{
    const {pageContext, queryContext, headerContext} = React.useContext(AppContext);
    const [header] = headerContext;
    const [query] = queryContext;
	const [page, setPage] = pageContext;
    const {data, loading, hasMore, error, message} = useFetch(query, page, header);

	const observer: any = React.useRef();

	const lastElement = React.useCallback( node => {

		if (loading) return;
		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver( entries => {
			if(entries[0].isIntersecting && hasMore){
				setPage( (prev:any) => prev + 1 );
			}
		}, {threshold: [0.25, 0.5, 0.75, 1]});

		if (node) observer.current.observe(node);

		
	}, [loading, hasMore, setPage]);

  return(
  <IonContent>

    {data? data.map((ai:any, i:any)=>(
     (data.length == i+1)?    
     <div key={ai.id} ref={lastElement}>
        <IonList> 
        <IonItem style={{display:'flex', flexDirection:'raw',}}>
            <IonLabel>{ai.name}</IonLabel>
            <IonButton color='warning' onClick={()=>window.open(`tel:${'+'.concat(ai.contact)}`)}>
                <IonIcon icon={call} />
            </IonButton>
            <IonButton color='success'>
                <IonIcon icon={checkmark}/>
            </IonButton>
        </IonItem>
        </IonList>
        <span> {!loading || 'loading...'}</span>
    </div>
    :
    <IonList key={ai.id}>
      <IonItem style={{display:'flex', flexDirection:'raw',}}>
        <IonLabel>{ai.name}</IonLabel>
        <IonButton color='warning' onClick={()=>window.open(`tel:${'+'.concat(ai.contact)}`)}>
            <IonIcon icon={call}/>
        </IonButton>
        <IonButton color='success'>
            <IonIcon icon={checkmark}/>
        </IonButton>
      </IonItem>
    </IonList>)
    )
    : 
    <span>{loading? 'loading...' : error? 'Oops ☹️ ☹️ ☹️ ' : message ? message : 'no activity found 😑😑😑' }</span>
    }   

  </IonContent>  
)
}
export default List;
