import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Pin } from '../data/pins';
import './PinListItem.css';

interface PinListItemProps {
  pin: Pin;
}

const MessageListItem: React.FC<PinListItemProps> = ({ pin }) => {
  return (
    <IonItem routerLink={`/pins/${pin.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {pin.title}
          <span className="date">
            <IonNote>{pin.tags}</IonNote>
          </span>
        </h2>
        <h3></h3>
        <p>
          {pin.quote}
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
