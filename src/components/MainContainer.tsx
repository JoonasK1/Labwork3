import './ExploreContainer.css';
import UseFetch from "../components/UseFetch";
interface ContainerProps { }
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

const MainContainer: React.FC<ContainerProps> = () => {
  const { data, refetch } = UseFetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
  return (
    <div id="container">
      <strong>Wow amazing jokes! Funny xD</strong>
      <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Category: {data?.category}</IonCardSubtitle>
              <IonCardTitle>{data?.setup}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{data?.delivery}</IonCardContent>
            <IonButton onClick={refetch}>Refresh</IonButton>
          </IonCard>
    </div>
  );
};

export default MainContainer;
