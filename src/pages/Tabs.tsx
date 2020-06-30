import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonRouterOutlet,
} from "@ionic/react";
import { home, personCircle, informationCircle } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import PageB from "./PageB/PageB";
import PageA from "./PageA/PageA";
import Home from "./Home/Home";

const Tabs: React.FC = () => {
  console.log("Tabs: ");
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="tabs/home" />
        <Route exact path="/tabs/home" render={() => <Home />} />
        <Route path="/tabs/pageA" component={PageA} exact={true} />
        <Route path="/tabs/pageB" render={() => <PageB />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
          <IonBadge>6</IonBadge>
        </IonTabButton>

        <IonTabButton tab="page-1" href="/tabs/pageA">
          <IonIcon icon={personCircle} />
          <IonLabel>PageA</IonLabel>
        </IonTabButton>

        <IonTabButton tab="page2" href="/tabs/pageB">
          <IonIcon icon={informationCircle} />
          <IonLabel>PageB</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
