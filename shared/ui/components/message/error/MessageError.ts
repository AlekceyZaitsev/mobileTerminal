import styled from "styled-components";
import {Colors} from "../../../styles/colors/colors";

export const MessageError = styled.p`
  margin: 0 0 15px 0;
  color: ${Colors.RED};
  font-family: "Arial Black";
  font-size: calc(10px + 10 * (100vw / 1280));

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;