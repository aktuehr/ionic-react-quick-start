import React, { useContext } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import Tabs from "./Tabs";
import { IonRouterOutlet } from "@ionic/react";
import { StorageContext } from "../contexts/StrorageContext";
import TutorialPage from "./TutorialPage/TutorialPage";

const Origin: React.FC = () => {
  const storageContext = useContext(StorageContext);
  console.log("Origin: ");
  console.log(storageContext.isShowedTutorial);

  return storageContext.isStorageLoaded ? (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/tabs" component={Tabs} />
        <Route path="/tutorial" component={TutorialPage} exact={true} />
        <Route
          exact
          path="/"
          render={() =>
            storageContext.isShowedTutorial ? (
              <Redirect to="/tabs" />
            ) : (
              <Redirect to="/tutorial" />
            )
          }
        />
      </IonRouterOutlet>
    </IonReactRouter>
  ) : (
    <h1 style={{ color: "orange" }}>Loading</h1>
  );
};

export default Origin;
