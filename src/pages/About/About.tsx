import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./About.css";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <div className="aboutCardContainer">
            <IonCardHeader>
              <IonCardTitle>WHAT IS PARTNERSHIP 2GETHER (P2G)?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Partnership 2Gether is a program of the St. Paul Jewish Federation
              and the Jewish Agency for Israel, designed to cultivate
              people-to-people relationships, projects and professional programs
              between St. Paul and our partner region, Sovev Kinneret, in
              Israel. Volunteers from St. Paul collaborate with their Israeli
              counterparts on cultural, social and educational exchanges.
            </IonCardContent>
          </div>
        </IonCard>
        <IonCard>
          <div className="aboutCardContainer">
            <IonCardHeader>
              <IonCardTitle>WHERE IS OUR PARTNERSHIP REGION?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              The St. Paul Jewish community is paired with the Sovev Kinneret
              region in northern Israel. It includes the communities of the city
              of Tiberias, the Lower Galilee, the Jordan River Valley and Kvar
              Tavor. We share the partnership with Milwaukee.
            </IonCardContent>
          </div>
        </IonCard>
        <IonCard>
          <div className="aboutCardContainer">
            <IonCardHeader>
              <IonCardTitle>HOW DOES P2G WORK?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Through a committee comprised of community leaders from St. Paul,
              Milwaukee, and the Sovev Kinneret region, we collaborate on
              community development projects and exchange programs each year.
              St. Paul Jewish community members can visit and volunteer in our
              Partnership Region.
            </IonCardContent>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
