import { IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonModal, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";

export interface StartProps {
    props:any
}

const Start:React.FC<StartProps> = ({props}) => {
    const [ressource,setRessource] = useState(null);
    const onSelectRessource = (ressouce:any) => {
        setRessource(ressouce)
    }

    return (
        <>
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonTitle>
                    Einstellungen
                </IonTitle>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem routerLink="/account">
                        <IonLabel>Account</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/admin">
                        <IonLabel>Verwaltung</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    <IonPage id="main-content">
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Start</IonTitle>
            <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
          </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className='container'>
        <IonList>
            <IonItem>
                <IonSelect interface="action-sheet" placeholder="Ressource auswählen" onIonChange={onSelectRessource}>
                <IonSelectOption value="1">Portable Monitor</IonSelectOption>
                <IonSelectOption value="2">Headset</IonSelectOption>
                <IonSelectOption value="3">Beamer</IonSelectOption>
                </IonSelect>
            </IonItem>
        </IonList>
        {
            ressource && 
            <IonList>
                <IonItem>
                    <IonLabel>Von:</IonLabel>
                    <IonDatetimeButton datetime="datetimeFrom"></IonDatetimeButton>
                    <IonModal keepContentsMounted={true}>
                        <IonDatetime id="datetimeFrom" presentation="date" defaultValue={Date()}></IonDatetime>
                    </IonModal>
                </IonItem>
                
                <IonItem>
                    <IonLabel>Bis:</IonLabel>
                    <IonDatetimeButton datetime="datetimeTo"></IonDatetimeButton>
                    <IonModal keepContentsMounted={true}>
                        <IonDatetime id="datetimeTo" presentation="date"></IonDatetime>
                    </IonModal>
                </IonItem>
                <IonItem>
                    <IonDatetime
                        presentation="date"
                        readonly
                    ></IonDatetime>
                </IonItem>
            </IonList>
        }
        </div>
      </IonContent>
    </IonPage>
    </>
    )
} 

export default Start;