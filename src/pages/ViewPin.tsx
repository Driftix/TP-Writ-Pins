import { useState } from 'react';
import { Pin, getPin} from '../data/pins';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonNote,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import './ViewPin.css';

function ViewPin() {
  const [pin, setPin] = useState<Pin>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const pn = getPin(parseInt(params.id, 10));
    setPin(pn);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Home" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {pin ? (
          <>
          <IonTitle>{pin.title}</IonTitle>
            <IonItem>
              <span className="tags">
              <IonNote>{pin.tags}</IonNote>
              </span>
            </IonItem>
            <IonText>
              {pin.quote}
            </IonText>
          </>
        ) : (
          <div>Pin not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewPin;
