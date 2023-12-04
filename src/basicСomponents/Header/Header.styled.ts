import styled from "styled-components";

export const HeaderBlock = styled.div`
width: 100vw;

`;
export const HeaderDesktop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #eeeeee;
  width: 100vw;
  font-size: 24px;
  font-weight: bold;
  background-color: #222831;
  z-index: 2000;
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }

`;
export const LinkBlock = styled.div`
display: block; 
@media only screen and (max-width: 768px) {
  display: none; 
}
`;

export const Select = styled.select`
  border: none;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  color: white;
`;

export const Option = styled.option`
  border: none;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  color: white;
  text-align: center;
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3000;

`;

export const MobileMenuButton = styled.button`
  display: none; 
  @media only screen and (max-width: 768px) {
    display: block; 
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const MobileSelect = styled(Select)`
  margin-top: 10px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  align-self: flex-end;
`;
