import styled from "styled-components";
import MaskedInput from "react-input-mask";
import {Colors} from "../../styles/colors/colors";

export const InputForm = styled(MaskedInput)`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;
  font-family: "Arial Black";
  font-size: calc(14px + 16 * (100vw / 1280));
  padding-left: 15px;
  transition: 0.3s;
  outline: none;

  :hover,
  :focus {
    transform: scale(1.05);
    ::placeholder {
      color: ${Colors.BLACK};
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 30px;
    font-size: 12px;
    margin: 0 0 10px 0;
  }
`;