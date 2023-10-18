import React, { useState } from 'react';
import { Pin } from '../data/pins';
import { IonButton, IonCard, IonContent, IonInput } from '@ionic/react';

interface PinFormProps {
  onClick: (pin: Pin) => void;
  pins: Pin[];
}

const PinForm: React.FC<PinFormProps> = ({ onClick, pins }) => {
  const [title, setTitle] = useState('');
  const [quote, setQuote] = useState('');
  const [tags, setTags] = useState('');

  const handleAddPin = () => {
    if (title && quote && tags) {
      const lastPinId = pins.length -1;
      const newPin: Pin = {
        id: lastPinId + 1,
        title: title,
        quote: quote,
        tags: tags.split(',').map(tag => tag.trim()),
      };
      onClick(newPin);
      setTitle('');
      setQuote('');
      setTags('');
    } else {
      console.log("Veuillez remplir tous les champs.");
    }
  };

  return (
    <IonCard>
        
    <IonInput
        placeholder="Titre"
        value={title}
        onIonChange={(e) => setTitle(e.detail.value!)} // Utilisez onIonChange pour gérer les changements de la valeur
      />
      <IonInput
        placeholder="Description"
        value={quote}
        onIonChange={(e) => setQuote(e.detail.value!)}
      />
      <IonInput
        placeholder="Tags (séparés par des virgules)"
        value={tags}
        onIonChange={(e) => setTags(e.detail.value!)}
      />
        <IonButton onClick={handleAddPin}>
            Ajouter
        </IonButton>
    </IonCard>

    
  );
};

export default PinForm;
