import styled from "styled-components";
import { ReactComponent as downlaod } from "../../assets/icons/surface1.svg";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as heart } from "../../assets/icons/love 1.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/calendar.svg";
import { ReactComponent as condition } from "../../assets/icons/air-conditioner 1.svg";
import { ReactComponent as grass } from "../../assets/icons/grass 1.svg";
import { ReactComponent as refrigerator } from "../../assets/icons/refrigerator.svg";
import { ReactComponent as washer } from "../../assets/icons/liquid-soap.svg";
import { ReactComponent as barbeque } from "../../assets/icons/barbecue 1.svg";
import { ReactComponent as laundry } from "../../assets/icons/laundry.svg";
import { ReactComponent as sauna } from "../../assets/icons/sauna.svg";
import { ReactComponent as wife } from "../../assets/icons/wifi.svg";
import { ReactComponent as dryer } from "../../assets/icons/dryer.svg";
import { ReactComponent as microwave } from "../../assets/icons/microwave.svg";
import { ReactComponent as swimming } from "../../assets/icons/swimmer.svg";
import { ReactComponent as cover } from "../../assets/icons/blinds.svg";
import { ReactComponent as gym } from "../../assets/icons/dumbbell.svg";
import { ReactComponent as outdoor } from "../../assets/icons/outdoor-shower.svg";
import { ReactComponent as cable } from "../../assets/icons/coaxial.svg";
import { ReactComponent as chair } from "../../assets/icons/chair.svg";

export const Chair = styled(chair)``;
export const Cable = styled(cable)``;
export const Outdoor = styled(outdoor)``;
export const Gym = styled(gym)``;
export const Cover = styled(cover)``;
export const Swimming = styled(swimming)``;
export const Microwave = styled(microwave)``;
export const Dryer = styled(dryer)``;
export const Wifi = styled(wife)``;
export const Sauna = styled(sauna)``;
export const Laundry = styled(laundry)``;
export const Barbeque = styled(barbeque)``;
export const Washer = styled(washer)``;
export const Refrigerator = styled(refrigerator)``;
export const Grass = styled(grass)``;
export const Condition = styled(condition)``;
export const DownloadIcon = styled(downlaod)``;
export const ShareIcon = styled(share)``;
export const Heart = styled(heart)``;
export const Bed = styled(bed)``;
export const Bath = styled(bath)``;
export const Garage = styled(garage)``;
export const Ruler = styled(ruler)``;
export const Resize = styled(resize)``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 1440px;
`;

export const Images = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftInfo = styled.div`
  flex: 6;
`;

export const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShareAndSave = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  margin: 0 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: #cccecf;
  }
`;

export const Share = styled.div`
  display: flex;
  align-items: center;
`;

export const Save = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const Left = styled.div`
  display: flex;
  gap: 10px;
`;

export const Right = styled.div``;

export const PriceHome = styled.div`
  display: flex;
  align-items: center;
  del {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #696969;
  }

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #0d263b;
  }
`;

export const Est = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

export const Description = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
`;

export const Show = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #0061df;
  cursor: pointer;
`;

export const PageTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

export const Documents = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid #e6e9ec;
`;

export const HomeLocations = styled.div`
  border-bottom: 1px solid #e6e9ec;
`;

export const HomeAddresses = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 100%;

  td {
    padding: 5px 0;

  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
`;

export const HomeMap = styled.div``;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #0061df;
    margin: 0 0 0 24px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
`;

export const Location = styled.div`
  margin: 48px 0;
`;

export const PropertyDetails = styled.div`
  border-bottom: 1px solid #e6e9ec;
  padding: 24px 0;
`;

export const Features = styled.div`
  border-bottom: 1px solid #e6e9ec;
  padding: 24px 0;
`;

export const RightInfo = styled.div`
  flex: 2;
`;

export const Client = styled.div`
  width: 280px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  padding: 24px;
  float: right;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
`;

export const Img = styled.img``;

export const UserName = styled.div`
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--primaryColor);
  }

  p {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--primaryColor);
  }
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--primaryColor);
  margin-top: 24px;
`;

export const Textarea = styled.textarea`
  width: 100%;
`;

export const Agree = styled.div`
  margin: 24px 0;
  display: flex;
  gap: 10px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
`;
