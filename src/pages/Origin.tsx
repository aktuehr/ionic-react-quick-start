import React, { useContext } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import Tabs from "./Tabs";
import { IonRouterOutlet } from "@ionic/react";
import { StorageContext } from "../contexts/StrorageContext";
import TutorialPage from "./TutorialPage/TutorialPage";

const OriginRouting: React.FC = () => {
  const storageContext = useContext(StorageContext);
  const isShowedTutorial = storageContext.isShowedTutorial;
  const isStorageLoaded = storageContext.isStorageLoaded;

  /** Tutorialを表示したかどうかを判定するまで何かを返しておく */
  if (!isStorageLoaded) return <></>;

  /** Tutorialを表示しない場合は強制的にTutorialに遷移 */
  console.log("display tutorial?");
  if (!isShowedTutorial)
    return (
      <>
        <Route path="/tutorial" component={TutorialPage} />
        <Route path="/" render={() => <Redirect to="/tutorial" />} />
      </>
    );

  /** Tutorialを表示している場合はTabsに遷移 */
  console.log("display tabs");
  return (
    <>
      <Route path="/tabs" component={Tabs} />
      <Route path="/" render={() => <Redirect to="/tabs" />} />
    </>
  );
};

const Origin: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <OriginRouting />
    </IonRouterOutlet>
  </IonReactRouter>
);

export default Origin;
