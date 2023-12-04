import React from "react";
import styled from "styled-components";
import doodles from "./ScreensImages/doodles-round.svg";
import image1 from "./ScreensImages/img1.svg";

import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";

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

const Screen1: React.FC = () => {
  const { t } = useTranslation();

  // Removed unused changeLanguage function

  return (
    <ScreenBlock name="screen1">
      <InfoBlock>
        <TitleWhite>FRONT-END DEV</TitleWhite>
        <TitleGreen> {t("Сertificates")}</TitleGreen>
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

const ScreenBlock = styled.div`
  width: 100%;
  display: grid;
  column-gap: 20px;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 50px;
`;

const TitleWhite = styled.div`
  font-size: 76px;
  font-weight: 600;
  line-height: 76px;
`;

const TitleGreen = styled.div`
  font-size: 52px;
  font-weight: 600;
  line-height: 52px;
  color: rgba(22, 73, 0, 1);
`;

const ImgBlock = styled.div`
  position: relative;
  height: 700px;
`;

const Image = styled.img`
  height: 500px;
  width: 400px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImageDoodles = styled.img`
  height: 350px;
  width: 350px;
  position: absolute;
  top: 0;
  right: 0;
`;

const ButtonBlock = styled.div`
  margin-top: 20px;
`;

const GreenButton = styled.button`
  padding: 10px 32px;
  border-radius: 24px;
  background-color: rgba(22, 73, 0, 0.9);
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  margin-right: 20px;
  box-shadow: 0px 4px 4px 0px #00000080;

  &:hover {
    box-shadow: 0px 8px 4px 0px #00000080;
    cursor: pointer;
  }
`;

const GreyButton = styled.button`
  padding: 10px 32px;
  border-radius: 24px;
  background-color: rgba(57, 62, 70, 0.75);
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  box-shadow: 0px 4px 4px 0px #00000080;

  &:hover {
    box-shadow: 0px 8px 4px 0px #00000080;
    cursor: pointer;
  }
`;

export default Screen1;
