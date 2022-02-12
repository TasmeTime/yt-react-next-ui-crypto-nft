import styled from "styled-components";
import { Colors } from "../Theme";
const TabEl = styled.article`
  border-radius: 10px;
  background-color: ${Colors.GrayBG};
  border: 1px solid ${Colors.Border};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.Gray};
  padding: 50px;
`;

export default function Tab({ children }) {
  if (children) return <>{children}</>;
  else return <TabEl>Nothing to show 🤷🏻‍♂️</TabEl>;
}
