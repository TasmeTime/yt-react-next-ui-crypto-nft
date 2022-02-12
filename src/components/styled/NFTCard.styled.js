import styled from "styled-components";
import Image from "next/image";
import { Colors } from "../Theme";
import { BsHeart } from "react-icons/bs";

const NFTCardEl = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  z-index: 2;
  background-color: ${Colors.White};
  color: ${Colors.Black};
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 40px rgb(0 0 0/10%);
`;

const BadgeEl = styled.span`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 3;
  background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 500;
  color: ${Colors.White};
`;

const ItemImage = styled.div``;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  flex: 1;
  gap: 0.5rem;
`;
const TSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EditionEl = styled.span`
  font-weight: 500;
`;
const StockEl = styled.span`
  color: ${Colors.Primary};
  font-weight: 600;
`;
const ItemTitle = styled.h2`
  font-size: 1.4rem;
`;
const PriceSection = styled.div``;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
const AvatarEl = styled.span`
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  height: 50px;
  width: 50px;
  margin-right: 0.5rem;
`;

const AuthorEl = styled.span``;
const LikesEl = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.5rem;

  > svg {
    cursor: pointer;
  }
`;

const Bar1 = styled.span`
  width: 93%;
  height: 0.7rem;
  background-color: ${Colors.White};
  border-radius: 0 0 50px 50px;
  box-shadow: inset 0 4px 5px rgb(0 0 0 /10%);
  z-index: 1;
  /* filter: brightness(0.7); */
  transform: translateY(-30%);
`;
const Bar2 = styled(Bar1)`
  width: 88%;
  transform: translateY(-60%);
  /* filter: brightness(0.5); */
  z-index: 0;
`;

export default function NFTCard({ item }) {
  const {
    Id,
    Badge,
    ImageUrl,
    Edition,
    Stock,
    Title,
    Price,
    Avatar,
    Author,
    Likes,
  } = item;
  return (
    <NFTCardEl>
      <Card>
        <BadgeEl>{Badge}</BadgeEl>
        <ItemImage>
          <Image src={ImageUrl} width="1024" height="1025" />
        </ItemImage>
        <InfoSection>
          <TSection>
            <EditionEl>
              {Edition} {Edition > 1 ? "Editions" : "Edition"} Minted
            </EditionEl>
            <StockEl>{Stock} for sale</StockEl>
          </TSection>
          <ItemTitle>{Title}</ItemTitle>
          <PriceSection>{Price}</PriceSection>
          <BottomSection>
            <AvatarEl>
              <Image src={Avatar} width="50" height="50" />
            </AvatarEl>
            <AuthorEl>{Author}</AuthorEl>
            <LikesEl>
              <BsHeart /> {Likes}
            </LikesEl>
          </BottomSection>
        </InfoSection>
      </Card>
      <Bar1 />
      <Bar2 />
    </NFTCardEl>
  );
}
