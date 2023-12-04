import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutBlock>
      <Header />
      <Block>{children}</Block>
      <Footer />
    </LayoutBlock>
  );
};

export const LayoutBlock = styled.div`
  width: 100vw;
  background: #222831;
  padding: 20px;
`;

export const Block = styled.div`
  padding-top: 125px;
  min-height: 100vh;
`;

export default Layout;
