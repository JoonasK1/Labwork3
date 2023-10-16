import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonMenu, IonButtons, IonMenuButton } from '@ionic/react';
import MainContainer from '../components/MainContainer';
import './Home.css';
import UseFetch from "../components/UseFetch";

const mainpage: React.FC = () => {
    return (
        <>
     <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
          <IonItem routerLink="/home">
            <IonLabel>Go to Welcome page</IonLabel>
          </IonItem>
          <IonItem routerLink="/main">
            <IonLabel>Go to Main page</IonLabel>
          </IonItem>
          </IonToolbar>
        </IonHeader>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent fullscreen>
        <MainContainer />
        </IonContent>
        
      </IonPage>
      </>
    );
  };
  
  export default mainpage;