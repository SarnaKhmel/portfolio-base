import React from "react";
import doodles from "./ScreensImages/doodles-round.svg";
import image1 from "./ScreensImages/img1.svg";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";

import { ScreenBlock, InfoBlock, TitleWhite, TitleGreen, ImgBlock, Image, ImageDoodles, ButtonBlock, GreenButton, GreyButton } from './Home.styled'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: import("../../Languages/en.json"),
    },
    uk: {
      translation: import("../../Languages/uk.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const Home: React.FC = () => {
  const { t } = useTranslation();


  return (
    <ScreenBlock name="screen1">
      <InfoBlock>
        <TitleWhite>FRONT-END DEV</TitleWhite>
        <TitleGreen> {t("Oleksa")} {t("Sarnatskyi")}</TitleGreen>
        <ButtonBlock>
          <GreenButton>Contact me</GreenButton>
          <GreyButton>Download CV</GreyButton>
        </ButtonBlock>
      </InfoBlock>
      <ImgBlock>
        <ImageDoodles src={doodles} />
        <Image src={image1} />
      </ImgBlock>
    </ScreenBlock>
  );
};



export default Home;
