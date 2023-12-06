import styled from "styled-components";

export const ScreenBlock = styled.div`
  width: 100%;
  display: grid;
  column-gap: 20px;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;


`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 50px;
  @media only screen and (max-width: 576px) {
    z-index:1000;
  }
`;

export const TitleWhite = styled.div`
  font-size: 76px;
  font-weight: 600;
  line-height: 76px;
  @media only screen and (max-width: 768px) {
    font-size: 52px;
    font-weight: 500;
    line-height: 56px;
  } 
`;

export const TitleGreen = styled.div`
  font-size: 52px;
  font-weight: 600;
  line-height: 52px;
  color: rgba(22, 73, 0, 1);
  @media only screen and (max-width: 768px) {
    font-size: 47px;
    font-weight: 500;
    line-height: 50px;
  } 
`;

export const ImgBlock = styled.div`
  position: relative;
  height: 700px;
`;

export const Image = styled.img`
  height: 500px;
  width: 400px;
  position: absolute;
  bottom: 0;
  left: 0;
  @media only screen and (max-width: 768px) {
    display: none;
}
`;

export const ImageDoodles = styled.img`
  height: 350px;
  width: 350px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonBlock = styled.div`
  margin-top: 20px;

`;

export const GreenButton = styled.button`
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

export const GreyButton = styled.button`
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
  @media only screen and (max-width: 576px) {
    margin-top:20px;
  }
`;