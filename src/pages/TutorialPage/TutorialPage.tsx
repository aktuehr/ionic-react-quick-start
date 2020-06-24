import {
  IonContent,
  IonPage,
  IonSlides,
  IonSlide,
  IonButton,
} from "@ionic/react";
import React from "react";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Tutorial: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <h1 style={{ height: "500px" }}>Slide 1</h1>
          </IonSlide>
          <IonSlide>
            <h1>Slide 2</h1>
          </IonSlide>
          <IonSlide>
            <div>
              Slide 3<br />
              <IonButton>Start App!</IonButton>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tutorial;
