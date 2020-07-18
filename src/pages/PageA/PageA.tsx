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
import { Brightness } from "@ionic-native/brightness/ngx";
import { BrowserTab } from "@ionic-native/browser-tab/ngx";

interface OpenBrowserProps {
  url: string;
}

const PageA: React.FC = () => {
  const { Browser } = Plugins;
  const brightness = new Brightness();
  const browserTab = new BrowserTab();

  const openBrowser = ({ url }: OpenBrowserProps) => {
    Browser.open({ url: "http://capacitor.ionicframework.com/" });
  };

  const brightnessZero = () => {
    brightness.setBrightness(0);
  };

  const brightnessOne = () => {
    brightness.setBrightness(1);
  };

  const openBrowserTab = () => {
    browserTab.isAvailable()
      .then(isAvailable => {
        if (isAvailable) {
          browserTab.openUrl('https://github.com/');
        } else {
          // open URL with InAppBrowser instead or SafariViewController
        }
      });
  }

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
          <IonButton onClick={() => brightnessZero()}>Brightness0</IonButton>
          <IonButton onClick={() => brightnessOne()}>Brightness1</IonButton>
          <IonButton onClick={() => openBrowserTab()}>BrowserTabで開く</IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default PageA;
