import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [data,setData] = useState<string[]>([])
  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter event fired');
    let tempData = []
    for (let index = 0; index < 10; index++) {
      tempData.push(`Termin ${index}`);
    }
    setData(tempData);
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          {data.length > 0 &&
            <IonList>
              {data.map((val)=>
              <IonItem key={val}>
                  <IonLabel>{val}</IonLabel>
              </IonItem>

              )}
            </IonList>
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
