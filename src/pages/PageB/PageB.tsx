import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../../components/ExploreContainer";

const PageB: React.FC = () => {
  return (
    <IonPage id="page-2">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page1 Title1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Page1 Title2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default PageB;
