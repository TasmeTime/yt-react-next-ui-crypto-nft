import styled from "styled-components";
import Button from "../styled/Button.styled";
import { Colors, Devices } from "../Theme";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

const CarouselEl = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  margin-top: 3rem;
  gap: 1rem;

  @media ${Devices.Tablet} {
    padding: 1rem 3rem;
  }

  @media ${Devices.Laptop} {
    padding: 1rem 5%;
  }

  @media ${Devices.LaptopL} {
    padding: 1rem 10%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`;
const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;
`;
const CtrlBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(p) => (p.active ? "pointer" : "")};
  width: 3rem;
  height: 3rem;
  color: ${(p) => (p.active ? Colors.Primary : Colors.PrimaryDisable)};
  font-size: 1.5rem;
  background-color: ${Colors.PrimaryDark};
  border-radius: 50%;
`;

const ItemContainer = styled.div`
  overflow: hidden;
  overflow-x: auto;
  width: 100%;
  display: flex;
  gap: 2rem;

  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  /* cursor: pointer; */
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  transition: background-color 0.2s ease-in-out;
  border-radius: 15px;
  padding: 0.8rem 1rem;
  box-shadow: 0 4px 40px rgb(0 0 0/ 10%);

  :hover {
    background-color: ${Colors.PrimaryDark};
  }
`;
const Avatar = styled.span`
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  height: 120px;
  width: 120px;
`;
const Name = styled.h4`
  font-weight: 400;
`;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Badge = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${Colors.Primary};

  ::after {
    content: ${(p) => (p.number ? `'${p.number}'` : "")};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${Colors.Background};
    font-size: 0.8rem;
  }
`;
const Amount = styled.span``;

export default function Carousel() {
  const ItemContainerRef = useRef(null);
  // b => beginning | m => middle | e => end
  const [ScrollInd, setScrollInd] = useState("b");
  return (
    <CarouselEl>
      <Button>Best Selling</Button>
      <Title>Top Creators</Title>
      <Controls>
        <CtrlBtn
          active={ScrollInd === "e" || ScrollInd === "m"}
          onClick={() => {
            ItemContainerRef.current.scroll({
              left: ItemContainerRef.current.scrollLeft - 200,
              behavior: "smooth",
            });
          }}
        >
          <BsChevronLeft />
        </CtrlBtn>
        <CtrlBtn
          active={ScrollInd === "b" || ScrollInd === "m"}
          onClick={() => {
            ItemContainerRef.current.scroll({
              left: ItemContainerRef.current.scrollLeft + 200,
              behavior: "smooth",
            });
          }}
        >
          <BsChevronRight />
        </CtrlBtn>
      </Controls>
      <ItemContainer
        ref={ItemContainerRef}
        onScroll={(e) => {
          const { scrollWidth, scrollLeft, offsetWidth } = e.target;
          const SL = Math.ceil(scrollLeft + offsetWidth);
          if (scrollLeft <= 0) setScrollInd("b");
          if (scrollLeft > 0 && scrollLeft < scrollWidth) setScrollInd("m");
          if (SL >= scrollWidth) setScrollInd("e");
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <Link href="/profile" passHref key={i}>
              <a>
                <Item>
                  <Avatar>
                    <Image
                      src="/images/avatar/ugonzo.jpg"
                      height="120"
                      width="120"
                    />
                  </Avatar>
                  <Name>Ugonzo Art</Name>
                  <BottomSection>
                    <Badge number={i} />
                    <Amount>$400,000</Amount>
                  </BottomSection>
                </Item>
              </a>
            </Link>
          );
        })}
      </ItemContainer>
    </CarouselEl>
  );
}
