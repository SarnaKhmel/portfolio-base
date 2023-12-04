import React from "react";
import styled from "styled-components";

const Screen2 = () => {
  return (
    <ScreenBlock name="screen2">
      <InfoBlock>
        <InfoHead>
          <TitleWhite>About</TitleWhite>
          <TitleGreen>me</TitleGreen>
        </InfoHead>
        <InfoText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          error, quam quos est quisquam eum consequatur saepe voluptatibus
          pariatur illo, ipsa numquam vero expedita ducimus fuga fugit quo
          incidunt unde?
        </InfoText>
      </InfoBlock>
      <ImgBlock>
        {/* <ImageDoodles src={doodles} /> */}
        {/* <Image src={image1} /> */}
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
  padding: 10px, 32px;
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
  padding: 10px, 32px;
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

export default Screen2;
