import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { usePersistedState } from '../usePersistedState';
import './Tab1.css';

export interface Tab1Props {
  _events:any[] | undefined,
  user:any
}

const Tab1: React.FC<Tab1Props> = ({_events,user}) => {
  const [events, setEvents] = usePersistedState<any[]>('events',[])
  const removeFromEvent = (index:any) => {
    if(events){
      const _events = events;
      let event = _events[index];
      event = event.subscriber.filter((_:any) => _ !== user.UserId);
      _events[index]= event;
      setEvents(_events);
    }
  }

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
          { _events && _events.length > 0 &&
            <IonList>
              {_events.map((val,index)=>
              val.subscriber.find((_:any) => _ === user.UserId) &&
              <IonItem key={index}>
                  <IonLabel>{val.title}</IonLabel>
                  <IonLabel>{new Date(val.date).toLocaleDateString('de-DE')}</IonLabel>
                  <IonButton onClick={()=>removeFromEvent(index)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
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
