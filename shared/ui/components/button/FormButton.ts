import styled from "styled-components";
import {Colors} from "../../styles/colors/colors";

export const FormButton = styled.button`
  padding: 10px;
  color: ${Colors.WHITE};
  font-family: "Arial Black";
  font-size: calc(14px + 16 * (100vw / 1280));
  border: 1px solid ${Colors.BLACK};
  border-radius: 10px;
  background: none;
  transition: 0.3s;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
  }
`;