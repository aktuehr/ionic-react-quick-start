import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import React from "react";
import { Plugins } from "@capacitor/core";

interface OpenBrowserProps {
  url: string;
}

const PageA: React.FC = () => {
  const { Browser } = Plugins;

  const openBrowser = ({ url }: OpenBrowserProps) => {
    Browser.open({ url: "http://capacitor.ionicframework.com/" });
  };

  return (
    <IonPage id="page-1">
      <IonHeader>
        <IonToolbar>
          <IonTitle>PageA Title1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PageA Title2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <section>
          <IonButton onClick={() => openBrowser({ url: "hoge" })}>
            AppInBrowserde開く
          </IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default PageA;
