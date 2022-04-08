import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { add} from 'ionicons/icons';
import { useState } from 'react';
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
    onIonChange={(e)=>{setFormData((p:any)=>({...p, title:e.detail.value!}))}}>
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
    formData.subscriber = []
    events.push(formData);
    setEvents(events)
    dismiss();
  };
  const [user] = useState<any>({UserId:'1234'})
  const [events,setEvents] = useState<any[]>([{title:'ss',subscriber:['133','23','1234']}]);
  const [present, dismiss] = useIonModal(Body,{
    saveEvent: handleDismiss,
    onDismiss: handleDis,
  })
  
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
            {events.length > 0 &&
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
                      <IonButton disabled={val.subscriber?.find((_:any) => _ === user.UserId)}>Teilnehmen</IonButton>
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
