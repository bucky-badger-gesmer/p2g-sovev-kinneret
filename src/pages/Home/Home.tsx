import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="/assets/p2g-home-banner.png"
            width={"100%"}
          />
          <IonCardHeader>
            <IonCardTitle>Partnership 2Gether</IonCardTitle>
            <IonCardSubtitle>Your home away from home</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <div>
              The Partnership2Gether (P2G) program, a collaborative effort
              between the St. Paul Jewish Federation, the Jewish Agency for
              Israel, and our partner region of Sovev Kinneret, connects the St.
              Paul and Milwaukee Jewish communities with Israel. This initiative
              goes beyond geographical boundaries to foster meaningful
              connections between dedicated St. Paul volunteers and their
              Israeli counterparts collaborating on shared educational,
              cultural, social welfare, and economic development endeavors.
            </div>
            <br />
            <div>
              Through P2G, we enrich lives, promote mutual understanding, and
              create lasting partnerships that transcend borders. Together, we
              are strengthening our Jewish identity and contributing to the
              growth and well-being of all involved, creating a global network
              that embodies the spirit of unity and cooperation. Join us in
              building a brighter future where our shared values and experiences
              unite us in a common purpose.
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
