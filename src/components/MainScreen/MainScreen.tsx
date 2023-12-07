import React from "react";
import Home from "../Screens/Home";
import AboutMe from "../Screens/AboutMe";
import Works from "../Screens/Works";
import Diploma from "../Screens/Diploma";
import Contacts from "../Screens/Contacts";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import styled from "styled-components";

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

const MainScreen: React.FC = () => {
  return (
    <>
      <Main>
        <Home />
        <AboutMe />
        <Works />
        <Diploma />
        <Contacts />
      </Main>
    </>
  );
};

const Main = styled.div``;

export default MainScreen;
