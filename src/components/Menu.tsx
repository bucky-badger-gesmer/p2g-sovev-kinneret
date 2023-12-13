import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import {
  globeOutline,
  globeSharp,
  heartOutline,
  heartSharp,
  homeOutline,
  homeSharp,
  informationCircleOutline,
  informationCircleSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
} from "ionicons/icons";
import { useLocation } from "react-router-dom";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/folder/Inbox",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "About",
    url: "/folder/Outbox",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
  {
    title: "Contact",
    url: "/folder/Favorites",
    iosIcon: globeOutline,
    mdIcon: globeSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>P2G Sovev Kinneret</IonListHeader>
          <IonNote>"Your home away from home"</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
