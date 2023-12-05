import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import img2 from "./ScreensImages/img2.svg"
import doodles from "./ScreensImages/doodle-items.svg"

import {
  ScreenBlock,
  InfoBlock,
  InfoHead,
  InfoText,
  TitleWhite,
  TitleGreen,
  ImgBlock,
  Doodles,
  Body
} from "./Screen2.styled";
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
const Screen2 = () => {
  const { t } = useTranslation();

  return (
    <ScreenBlock name="screen2">
      <InfoBlock>
        <InfoHead>
          <TitleWhite>About</TitleWhite>
          <TitleGreen>me</TitleGreen>
        </InfoHead>
        <InfoText>
          {t("AboutMe")}
        </InfoText>
      </InfoBlock>
      <ImgBlock>
        <Doodles src={doodles} />
        <Body src={img2} />
      </ImgBlock>
    </ScreenBlock>
  );
};


export default Screen2;
