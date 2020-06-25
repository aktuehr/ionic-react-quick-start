import React, { useState, useEffect } from "react";
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
import PageB from "../PageB/PageB";
import PageA from "../PageA/PageA";
import Home from "../Home/Home";
import Tutorial from "../TutorialPage/TutorialPage";
import { getShowedTutorial } from "../../utils/Storage";

const TabsExample: React.FC = () => {
  // hooksで取得してみる
  const [isShowedTutorial, setIsShowedTutorial] = useState(false);

  const showedTutorial = async (): Promise<boolean> => {
    const showedTutorial = await getShowedTutorial();
    console.log("showedTutorial");
    console.log(showedTutorial);
    return showedTutorial;
  };

  useEffect(() => {
    const fetchShowedTutorial = async () => {
      const isShowedTutorial = await showedTutorial();
      setIsShowedTutorial(isShowedTutorial);
    };
    console.log("useEffect1");
    fetchShowedTutorial();
  }, []);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="tabs/home" />
        <Route
          exact
          path="/tabs/home"
          render={() => {
            return isShowedTutorial ? <Home /> : <Tutorial />;
          }}
        />
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

export default TabsExample;
