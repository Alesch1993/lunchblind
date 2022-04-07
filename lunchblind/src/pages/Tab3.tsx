import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import User from '../models/user';


import './Tab3.css';

interface Tab3Props {
  user?:User|null
}


const Tab3: React.FC<Tab3Props> = ({user}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='container'>
          {user?.DisplayName}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
