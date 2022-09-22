import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/data";
import { Input, Button } from "../../components/Generic";
import Avatar from "../../assets/imgs/avatar.png";
import {
  Agree,
  Bath,
  Bed,
  Client,
  Condition,
  Container,
  Description,
  Documents,
  DownloadIcon,
  Est,
  Features,
  Garage,
  Heart,
  HomeAddresses,
  HomeDetails,
  HomeLocations,
  HomeMap,
  Icon,
  Images,
  Img,
  Item,
  Items,
  Left,
  LeftInfo,
  Location,
  MainInfo,
  MainTitle,
  Message,
  PageTitle,
  PriceHome,
  PropertyDetails,
  Resize,
  Right,
  RightInfo,
  Ruler,
  Save,
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

const PropertiesList = () => {
  const { id } = useParams();
  return (
    <Container>
      <Wrapper>
        {data
          .filter((e) => e.id == id.replace(":", ""))
          .map((value, index) => {
            return (
              <div key={index}>
                <Images>
                  {value.details.map((item) =>
                    item.images.map((img) => <img src={img} />)
                  )}
                </Images>
                <MainInfo>
                  <LeftInfo>
                    {value.details.map((val) => (
                      <div>
                        {console.log(val, "gg")}
                        <MainTitle>
                          <div>
                            <h1>{val.maintitle}</h1>
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
                          <p>
                            Occupying over 8,000 square feet, perched over 1,100
                            feet in the air with absolutely breathtaking
                            panoramic 360-degree views of all of New York City
                            and the surrounding tri-state area, The 82nd Floor
                            at 432 Park Avenue has been completely reimagined by
                            one of the most sought-after design houses in London
                            and represents an utterly unique opportunity to own
                            a globally significant property. The residence is
                            comprised of 5 bedrooms, 2 master bathrooms, 4
                            on-suite guest bathrooms, 2 powder rooms, 2 offices,
                            2 dressing rooms, a media room, an oversized eat-in
                            gourmet chef's kitchen, and a sprawling 1,100
                            square-foot Great Room perfectly situated in the
                            prime southwest corner of the floor.
                          </p>
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
                              <h1>Map shu yerda bo'ladi</h1>
                            </HomeMap>
                          </HomeLocations>
                        </Location>
                        <PropertyDetails>
                          <PageTitle>Property Details</PageTitle>
                          <Table>
                            {val.propertyDetails.map((item, index) => {
                              return (
                                <tbody key={index}>
                                  <tr>
                                    <td>
                                      <h4>
                                        Property ID:{" "}
                                        <span>{item.propertyId}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Bedrooms: <span>{item.Bedrooms}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Property Type:{" "}
                                        <span>{item.PropertyType}</span>
                                      </h4>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h4>
                                        Price:<span>${item.Price}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Bathrooms: <span>{item.Bathrooms}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Property Status:{" "}
                                        <span>{item.PropertyStatus}</span>
                                      </h4>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h4>
                                        Property Size:
                                        <span>{item.PropertySize} Sq Ft</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Garage: <span>{item.Garage}</span>
                                      </h4>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h4>
                                        Year Bulit:<span>{item.YearBulit}</span>
                                      </h4>
                                    </td>
                                    <td>
                                      <h4>
                                        Garage size:{" "}
                                        <span>{item.Garagesize} SqFt</span>
                                      </h4>
                                    </td>
                                  </tr>
                                </tbody>
                              );
                            })}
                          </Table>
                        </PropertyDetails>
                        <Features>
                          <PageTitle>Features</PageTitle>
                          <Table>
                            <tbody>
                              <tr>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                                <td>
                                  <Condition /> <span>Air Conditioning</span>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Features>
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
                      <Input placeholder="Name" />
                      <Input placeholder="Phone" />
                      <Input placeholder="Email" />
                      <Message>Message</Message>
                      <Textarea></Textarea>
                      <Agree>
                        <input type="checkbox" />
                        <span>
                          By submitting this form I agree to Terms of Use
                        </span>
                      </Agree>
                      <Button type="primary">Send request</Button>
                    </Client>
                  </RightInfo>
                </MainInfo>
              </div>
            );
          })}
      </Wrapper>
    </Container>
  );
};

export default PropertiesList;
