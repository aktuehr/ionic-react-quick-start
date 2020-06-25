import {
  IonContent,
  IonPage,
  IonSlides,
  IonSlide,
  IonButton,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
/** from "utils/Storage" としたい */
import { setShowedTutorial } from "../../utils/Storage";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Tutorial: React.FC<RouteComponentProps> = ({ history }) => {
  const endTutorial = async () => {
    console.log("end tutorial");
    await setShowedTutorial({ isShowedTutorial: true });
    // hooksでセットした方が良さそう
    console.log("redirect /tabs");
    history.push("/tabs/home");
  };
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
              <IonButton onClick={endTutorial}>Start App!</IonButton>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Tutorial);
