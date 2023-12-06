import React from "react";
import styled from "styled-components";

const Screen4: React.FC = () => {
  return (
    <ScreenBlock name="screen4">
      <InfoBlock>
        <Title>
          My diplomas and certificates
        </Title>
        <List>
          <Item>
            <ItemImg />
          </Item>
          <Item>
            <ItemImg />
          </Item>
          <Item>
            <ItemImg />
          </Item>
          <Item>
            <ItemImg />
          </Item>
          <Item>
            <ItemImg />
          </Item>
          <Item>
            <ItemImg />
          </Item>
          <Item>
            <ItemImg />
          </Item>
        </List>
      </InfoBlock>
    </ScreenBlock>
  );
};

const ScreenBlock = styled.div`
  width: 100%;
  min-height: 30vh; 
`;
const InfoBlock = styled.div`
  margin: 25px;
`;
const Title = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 96px;
  letter-spacing: 0em;
  text-align: left;
  @media only screen and (max-width: 768px) {
    font-size: 47px;
    font-weight: 500;
    line-height: 50px;
  } 
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;
const Item = styled.li`
  height: 150px;
  width: 200px;
  padding: 10px 32px;
  border-radius: 30px;
  background-color: rgba(57, 62, 70, 0.7);
  cursor: pointer;
`;
const ItemImg = styled.img`
  height: 100%;
  width: 100%;
`;


export default Screen4;
