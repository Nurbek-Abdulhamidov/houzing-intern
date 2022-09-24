import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/data";
import { Input, Button } from "../../components/Generic";
import Avatar from "../../assets/imgs/avatar.png";
import {
  Agree,
  AmountImg,
  Bath,
  Bed,
  BigImage,
  Blur,
  Client,
  Container,
  CustomerInfo,
  Description,
  Documents,
  DownloadIcon,
  Est,
  FirstRow,
  Garage,
  Heart,
  HomeAddresses,
  HomeDetails,
  HomeLocations,
  HomeMap,
  Icon,
  ImageContainer,
  Images,
  Img,
  Item,
  Items,
  LeftInfo,
  LoadImg,
  Location,
  MainInfo,
  MainTitle,
  Message,
  MultipleImages,
  PageTitle,
  PriceHome,
  Resize,
  Right,
  RightInfo,
  Ruler,
  Save,
  SecondRow,
  Share,
  ShareAndSave,
  ShareIcon,
  Show,
  Table,
  Textarea,
  UserDetails,
  UserName,
  Wrapper,
} from "./style";
import { Info } from "../../components/HouseCard/style";
import Recomended from "../../components/Main/Recomended";
import Schedule from "./Schedule";
import FeaturesSection from "./Features";
import PropertyDetailsSection from "./PropertyDetails";
import Review from "./Review";
import WriteReview from "./WriteReview";
import { Checkbox } from "antd";
import Map from "../Map";

const PropertiesList = () => {
  const { id } = useParams();
  //  scroll to top when navigate
  useEffect(() => {
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    goToTop();
  }, []);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const imagePerRow = 2;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  return (
    <Container>
      <Wrapper>
        {data
          .filter((e) => e.id == id.replace(":", ""))
          .map((value, index) => {
            return (
              <div key={index}>
                <ImageContainer>
                  <Images>
                    {value.details.map((item) =>
                      item.images
                        ?.slice(0, next)
                        ?.map((img) => <img src={img} />)
                    )}
                    {next < value.details[0].images.length && (
                      <LoadImg>
                        <img src={value.details[0].images[next]} alt="" />
                        <Blur onClick={handleMoreImage}>
                          <AmountImg>
                            +
                            {
                              value.details[0].images?.slice(
                                next,
                                value.details[0].images.length
                              ).length
                            }
                          </AmountImg>
                        </Blur>
                      </LoadImg>
                    )}
                  </Images>
                </ImageContainer>

                <MainInfo>
                  <LeftInfo>
                    {value.details.map((val, index) => (
                      <div key={index}>
                        <MainTitle>
                          <div>
                            <h1>{val.title}</h1>
                            <Info.Text>
                              {val.address}, {val.area}, {val.city} ,
                              {val.country}
                            </Info.Text>
                          </div>
                          <ShareAndSave>
                            <Share>
                              <Icon>
                                <ShareIcon />
                              </Icon>
                              <span>Share</span>
                            </Share>
                            <Save>
                              <Icon>
                                <Heart />
                              </Icon>
                              <span>Save</span>
                            </Save>
                          </ShareAndSave>
                        </MainTitle>
                        <HomeDetails>
                          <Info.Text>
                            <i>
                              <Bed />
                            </i>
                            <span> {val.houseDetails.beds} Beds</span>
                            <i>
                              <Bath />
                            </i>
                            <span>{val.houseDetails.baths} Baths</span>
                            <i>
                              <Garage />
                            </i>
                            <span>{val.houseDetails.garage} Garage</span>
                            <i>
                              <Ruler />
                            </i>
                            <span>{val.houseDetails.area} Sq Ft</span>
                            <i>
                              <Resize />
                            </i>
                            <span>
                              {" "}
                              Year Built: {val.houseDetails.builtYear}
                            </span>
                          </Info.Text>
                          <Right>
                            <PriceHome>
                              <del>${val.oldPrice}/mo</del>
                              <h2>${val.price}/mo</h2>
                            </PriceHome>
                            <Est>Est. Mortgage</Est>
                          </Right>
                        </HomeDetails>
                        <Description>
                          <PageTitle>Description</PageTitle>
                          <p>{val.description}</p>
                          <Show>Show more</Show>
                        </Description>
                        <Documents>
                          <PageTitle>Documents</PageTitle>
                          <Items>
                            <Item>
                              <DownloadIcon /> <span>test_property.pdf</span>
                              <p>DOWNLOAD</p>
                            </Item>
                            <Item>
                              <DownloadIcon /> <span>test_property.pdf</span>
                              <p>DOWNLOAD</p>
                            </Item>
                            <Item>
                              <DownloadIcon /> <span>test_property.pdf</span>
                              <p>DOWNLOAD</p>
                            </Item>
                          </Items>
                        </Documents>
                        <Location>
                          <PageTitle>Location</PageTitle>
                          <HomeLocations>
                            <HomeAddresses>
                              <Table>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h4>
                                        Address: <span>{val.address}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        City: <span>{val.city}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Area: <span>{val.area}</span>
                                      </h4>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h4>
                                        State/County:<span>{val.state}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Zip: <span>{val.zip}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Country: <span>{val.country}</span>
                                      </h4>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </HomeAddresses>
                            <HomeMap>
                              <Map />
                            </HomeMap>
                          </HomeLocations>
                        </Location>
                        <PropertyDetailsSection value={val?.propertyDetails} />

                        <FeaturesSection value={val?.features} />
                        <Schedule />
                        <Review />
                        <WriteReview />
                      </div>
                    ))}
                  </LeftInfo>
                  <RightInfo>
                    <Client>
                      <UserDetails>
                        <Img src={Avatar} />
                        <UserName>
                          <h3>Darrel Steward</h3>
                          <p>(123)456-7890</p>
                        </UserName>
                      </UserDetails>
                      <CustomerInfo>
                        <Input placeholder="Name" />
                        <Input placeholder="Phone" />
                        <Input placeholder="Email" />
                      </CustomerInfo>
                      <Message>Message</Message>
                      <Textarea placeholder="Enter Your Message"></Textarea>
                      <Agree>
                        <Checkbox onChange={onChange}></Checkbox>
                        <span>
                          By submitting this form I agree to Terms of Use
                        </span>
                      </Agree>
                      <Button type="primary">Send request</Button>
                    </Client>
                  </RightInfo>
                </MainInfo>
                <Recomended />
              </div>
            );
          })}
      </Wrapper>
    </Container>
  );
};

export default PropertiesList;
