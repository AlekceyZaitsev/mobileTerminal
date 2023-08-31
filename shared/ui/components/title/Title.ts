import styled from "styled-components";
import {Colors} from "../../styles/colors/colors";

export const Title = styled.h2`
  margin: 0 0 30px 0;
  text-align: center;
  color: ${Colors.WHITE};
  font-family: "Arial Black";
  font-size: calc(24px + 24 * (100vw / 1280));
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;