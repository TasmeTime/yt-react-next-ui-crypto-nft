import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Colors, Devices } from "../Theme";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import Button from "../styled/Button.styled";

const HeroEl = styled.article`
  margin: 6rem 1rem 5rem 1rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Devices.Laptop} {
    margin: 3rem 4rem 5rem 4rem;
  }

  @media ${Devices.LaptopL} {
    margin: 3rem 10rem 5rem 10rem;
  }
`;
const Title = styled.h1`
  margin-bottom: 3rem;
  font-weight: 500;
  font-size: 1.7rem;

  @media ${Devices.Laptop} {
    font-size: 2.7rem;
  }
`;
const Heading = styled.span``;
const Sub = styled.span`
  font-size: 1.1rem;
  display: block;
`;

const Slider = styled.div`
  position: relative;
  height: 35vh;
  min-height: 230px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 3rem ${Colors.Primary};
  border-radius: 20px;

  @media ${Devices.Tablet} {
    height: 50vh;
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
  display: block;
`;

const InfoContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  & > svg {
    font-size: 2.4rem;
    cursor: pointer;
    @media ${Devices.Tablet} {
      font-size: 3.4rem;
    }
  }
`;

const Date = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
`;
const STitle = styled.h2`
  font-size: 1.3rem;
`;
const Author = styled.span`
  color: ${Colors.Primary};
  font-size: 1.1rem;
  font-weight: 500;
`;
const Arrow = styled.span``;

const Lines = styled.span`
  position: relative;
  z-index: 3;
  display: flex;
  gap: 0.5rem;
`;
const Line = styled.span`
  display: inline-block;
  width: 2rem;
  height: 0.25rem;
  border-radius: 30px;
  background-color: ${(p) => (p.active ? Colors.Primary : Colors.White)};
`;
const Img = styled.div`
  width: 100%;
  height: 100%;
`;

const Items = [
  {
    Id: 1,
    Badge: "UPCOMING",
    Date: "Tue, Feb 01",
    Title: "UFC 271",
    Author: "UFC",

    ImageSrc: "/images/slider/2.png",
  },
  {
    Id: 2,
    Badge: "SOLD OUT",
    Date: "Tue, Feb 01",
    Title: "Slide 2",
    Author: "UFC",

    ImageSrc: "/images/slider/3.jpeg",
  },
  {
    Id: 3,
    Badge: "LIVE NOW",
    Date: "Tue, Feb 01",
    Title: "Slide 3",
    Author: "UFC",

    ImageSrc: "/images/slider/4.jpg",
  },
];

export default function Hero() {
  const [Index, setIndex] = useState(0);
  const [Slides, setSlides] = useState(Items);
  const [CurSlide, setCurSlide] = useState(Items[0]);

  return (
    <HeroEl>
      <Title>
        <Heading>Buy, sell, and showcase NFTs</Heading>
        <Sub>from leading creators and brands</Sub>
      </Title>
      <Slider>
        <InfoContainer>
          <Button round>{CurSlide.Badge}</Button>
          <MiddleSection>
            <BsChevronLeft
              onClick={() => {
                const indx = Index - 1;
                if (Index > 0) {
                  setIndex(indx);
                  setCurSlide(Slides[indx]);
                  return;
                }
                setIndex(Slides.length - 1);
                setCurSlide(Slides[Slides.length - 1]);
              }}
            />
            <div>
              <Date>{CurSlide.Date}</Date>
              <STitle>{CurSlide.Title}</STitle>
              <Link passHref href="#">
                <a>
                  <Author>{CurSlide.Author}</Author>
                </a>
              </Link>
            </div>
            <BsChevronRight
              onClick={() => {
                const indx = Index + 1;
                if (Index < Slides.length - 1) {
                  setIndex(indx);
                  setCurSlide(Slides[indx]);
                  return;
                }
                setIndex(0);
                setCurSlide(Slides[0]);
              }}
            />
          </MiddleSection>
          <Button>View Drop</Button>
        </InfoContainer>
        <Lines>
          {Slides.map((s) => {
            return <Line key={s.Id} active={s.Id === CurSlide.Id} />;
          })}
        </Lines>
        <ImgContainer>
          <Img>
            <Image layout="fill" src={CurSlide.ImageSrc} />
          </Img>
        </ImgContainer>
      </Slider>
    </HeroEl>
  );
}
