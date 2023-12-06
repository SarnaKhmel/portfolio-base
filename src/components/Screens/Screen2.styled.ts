import styled from "styled-components";


export const ScreenBlock = styled.div`
  width: 100%;
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  @media only screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  flex-align: center;
  justify-content: center;
}
`;
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-align: center;
    justify-content: center;
  }
`;

export const InfoHead = styled.div`
  display: flex;
`;
export const InfoText = styled.div`
  max-width: 400px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: justify;
  color: rgba(238, 238, 238, 0.75);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleWhite = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 76px;
  @media only screen and (max-width: 768px) {
    font-size: 52px;
    font-weight: 500;
    line-height: 56px;
  } 
`;
export const TitleGreen = styled.div`
  margin-left: 10px;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 76px;
  color: rgba(22, 73, 0, 1);
  @media only screen and (max-width: 768px) {
    font-size: 52px;
    font-weight: 500;
    line-height: 56px;
  } 
`;
export const ImgBlock = styled.div`

position: relative;
height: 700px;

@media only screen and (max-width: 768px) {
  display: none;
}
`;


export const Doodles = styled.img`
position: absolute;
  width: 100%;
  height: 100%;

`
export const Body = styled.img`
position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 0;

`