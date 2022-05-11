import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { add} from 'ionicons/icons';
import { useState } from 'react';
import { usePersistedState } from '../usePersistedState';
import './Tab2.css';

const Body:React.FC<{
  saveEvent: (formData:any) => void;
  onDismiss: () => void;  
}> = ({saveEvent,onDismiss}) =>{ 
  const [formData,setFormData] = useState<any>({title:'',subtitle:'',description:'',date:''})
  return(
    <IonContent>
    <IonInput
    placeholder='Titel' 
    clearInput value={formData.title} 
    onIonChange={(e)=>{setFormData({...formData, title:e.detail.value!})}}>
    </IonInput>
    <IonInput
    placeholder='Datum'
    value={new Date(formData.date).toLocaleDateString('de-DE')}
    readonly={true}
    >
    </IonInput>
    <IonDatetime onIonChange={(e)=>{setFormData((p:any)=>({...p, date:e.detail.value!}))}} presentation='date' showClearButton={true}></IonDatetime>

    <IonButton disabled={formData.title === ''} expand='block' onClick={()=> saveEvent(formData)}>
      Speichern
    </IonButton>
    <IonButton  expand='block' onClick={()=> onDismiss()}>
      Abbrechen
    </IonButton>
    </IonContent>
  
)}

const Tab2: React.FC = () => {
  const handleDis = () => {
    dismiss();
  }
   const handleDismiss = (formData:any) => {
     if(events){
      formData.subscriber = []
      events.push(formData);
      setEvents(events)
     }
   
    dismiss();
  };
  const [user] = usePersistedState<any>('user',undefined);
  const [events, setEvents] = usePersistedState<any[]>('events',[])
  const [present, dismiss] = useIonModal(Body,{
    saveEvent: handleDismiss,
    onDismiss: handleDis,
  })

  const addToEvent = (index:any) => {
    if(events){
      const _events = events;
      const event = _events[index];
      event.subscriber.push(user.UserId);
      _events[index]= event;
      setEvents(_events);
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dates</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={()=>{
              present()
            }}>
            <IonIcon slot="icon-only" icon={add}/>
            </IonButton>
          </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className='container'>
            {events && events.length > 0 &&
            events.map((val,index)=>(
              <IonCard key={index}>
                <IonCardHeader>
                  <IonCardSubtitle>
                    <IonBadge color="primary">{val.subscriber?.length}</IonBadge>
                    </IonCardSubtitle>
                  <IonCardTitle>
                  <IonLabel>{val.title} </IonLabel>
                  </IonCardTitle>
                  <IonCardContent>
                    <IonButtons>
                      <IonButton 
                      onClick={()=>addToEvent(index)}
                      disabled={val.subscriber?.find((_:any) => _ === user.UserId)}>Teilnehmen</IonButton>
                    </IonButtons>
                  </IonCardContent>
                </IonCardHeader>
              </IonCard>
            ))
              
            }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
