import styled from "styled-components";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import img2 from "./ScreensImages/img2.svg"
import doodles from "./ScreensImages/doodle-items.svg"

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
        <img src={doodles} />
        <img src={img2} />
      </ImgBlock>
    </ScreenBlock>
  );
};

// const ScreenBlock = styled.div`
//   height: 70vh;
//   width: 100%;
//   padding-top: 100px;
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   grid-template-rows: repeat(1, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
// `;
const ScreenBlock = styled.div`
  width: 100%;
  display: grid;
  column-gap: 20px;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-align: center;
  justify-content: center;
  padding-left: 50px;
  border: 1px solid red;
`;

const InfoHead = styled.div`
  display: flex;
`;
const InfoText = styled.div`
  max-width: 400px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: justify;
  color: rgba(238, 238, 238, 0.75);
`;

const TitleWhite = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 76px;
`;
const TitleGreen = styled.div`
  margin-left: 10px;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 76px;
  color: rgba(22, 73, 0, 1);
`;
const ImgBlock = styled.div`
  position: relative;
  height: 700px;
`;

export default Screen2;
