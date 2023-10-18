import React, { useState } from 'react';
import PinsListItem from '../components/PinListItem';
import PinForm from '../components/PinForm';
import { Pin, addPin, getPins } from '../data/pins';
import {
  IonCard,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [pins, setPins] = useState<Pin[]>([]);

  useIonViewWillEnter(() => {
    const pns = getPins();
    setPins(pns);
  });

  const handlePinAdd = (pin: Pin) => {
    setPins([...pins, pin]);
    addPin(pin);
  };

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Pins</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              My Pins
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {pins.map(p => <PinsListItem key={p.id} pin={p} />)}
        </IonList>
          <PinForm pins={pins} onClick={handlePinAdd} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
