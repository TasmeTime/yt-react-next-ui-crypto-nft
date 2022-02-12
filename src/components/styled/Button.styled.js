import styled from "styled-components";
import { Colors } from "../Theme";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  color: ${Colors.White};
  border: none;
  border-radius: ${(p) => (p.round ? "50px" : "5px")};
  width: max-content;
`;
export default Button;
