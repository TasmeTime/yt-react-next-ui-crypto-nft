import styled from "styled-components";
import Image from "next/image";
import Button from "../styled/Button.styled";
import { Colors, Devices } from "../Theme";

const BidStickyEl = styled.article`
  box-shadow: 0 4px 40px rgb(0 0 0 /10%);
  border: 1px solid ${Colors.Border};
  padding: 0.8rem 1rem;
  border-radius: 5px;
  display: flex;
  position: sticky;
  background-color: ${Colors.White};
  bottom: 1rem;
`;
const LeftSection = styled.div`
  display: none;
  flex: 1;
  gap: 1rem;
  @media ${Devices.Laptop} {
    display: flex;
  }
`;
const ThumbEl = styled.span`
  width: 80px;
  height: 80px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const EditionEl = styled.span`
  font-weight: 500;
`;
const Title = styled.span`
  font-weight: 600;
  font-size: 1.8rem;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
  align-items: center;

  @media ${Devices.Laptop} {
    flex: 0.6;
  }
`;
const PlaceBidBtn = styled(Button)`
  flex: 1;
  width: 100%;
  font-size: 1.07rem;
`;
const TextEl = styled.span`
  color: ${Colors.Gray};
  font-size: 0.7rem;
`;

export default function BidSticky() {
  return (
    <BidStickyEl>
      <LeftSection>
        <ThumbEl>
          <Image src="/images/nft/bking.png" width="80px" height="80px" />
        </ThumbEl>
        <Info>
          <EditionEl>Edition 17 of 371</EditionEl>
          <Title>KING BITCOIN</Title>
        </Info>
      </LeftSection>
      <RightSection>
        <PlaceBidBtn>Place a bid</PlaceBidBtn>
        <TextEl>A 10% royalty goes to the creator for future resale</TextEl>
      </RightSection>
    </BidStickyEl>
  );
}
