import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

export const url = 'http://3.22.221.251:5000/';
export const AppContext:any = React.createContext({});

const App: React.FC = () =>{
    const [page, setPage] = React.useState(0);
    const [query, setQuery] = React.useState(`${url}list`);
    const [header, setHeader] = React.useState({});
  return (
 <AppContext.Provider value={{pageContext:[page, setPage],
 queryContext:[query, setQuery], headerContext:[header, setHeader]}}>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Home />
        </Route>
	{/*
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
	*/}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
</AppContext.Provider>

)
}
export default App;
