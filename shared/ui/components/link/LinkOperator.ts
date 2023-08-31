import styled from "styled-components";
import Link from "next/link";
import {Colors} from "../../styles/colors/colors";

export const LinkOperator = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 30px 0;
  padding: 25px;
  color: ${Colors.WHITE};
  font-family: "Arial Black";
  font-size: calc(14px + 16 * (100vw / 1280));
  border: 1px solid ${Colors.BLACK};
  border-radius: 10px;
  background: none;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin: 0 0 15px 0;
  }
`;
