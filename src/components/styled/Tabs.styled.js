import styled from "styled-components";
import { useState } from "react";
import { Colors, Devices } from "../Theme";
import GridTmp from "./Grid.styled";

const TabsEl = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${(p) => (p.mt ? p.mt : "")};
`;
const Headers = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  padding-bottom: 2rem;
`;

const Header = styled.span`
  font-weight: 500;
  cursor: pointer;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    transition: all 0.3s ease-in-out;
    left: 0;
    bottom: 0;
    width: ${(p) => (p.active ? "100%" : "0")};
    height: 0.2rem;
    background: linear-gradient(
      to right,
      ${Colors.Gradients.PrimaryToSec[0]},
      ${Colors.Gradients.PrimaryToSec[1]}
    );
    border-radius: 20px;
    transform: translateY(500%);
  }
`;
const Content = styled.div`
  padding: 1rem;
`;

export default function Tabs({ data, mt }) {
  const [CurTab, setCurTab] = useState(data[0]);
  return (
    <TabsEl mt={mt}>
      <Headers>
        {data.map((d) => {
          return (
            <Header
              onClick={() => {
                if (CurTab.Id !== d.Id) setCurTab(d);
              }}
              key={d.Id}
              active={CurTab.Id === d.Id}
            >
              {d.Title}
            </Header>
          );
        })}
      </Headers>
      <Content>{CurTab.Content}</Content>
    </TabsEl>
  );
}
