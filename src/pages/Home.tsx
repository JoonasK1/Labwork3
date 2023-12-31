import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonMenu, IonButtons, IonMenuButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
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
        <ExploreContainer />
        </IonContent>
        
      </IonPage>
      </>
  );
};

export default Home;
