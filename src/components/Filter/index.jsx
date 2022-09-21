import { Popover } from "antd";
import React from "react";
import { Button, Input } from "../Generic";
import { Address, AddressInputWrapp, Container, Icon, Wrapper } from "./style";

const Generic = () => {
  const content = (
    <Address>
      <Address.title>Address</Address.title>
      <AddressInputWrapp>
        <Input mr={20} placeholder="Country" />
        <Input mr={20} placeholder="Region" />
        <Input mr={20} placeholder="City" />
        <Input mr={20} placeholder="Zip code" />
      </AddressInputWrapp>
      <Address.title>Apartment info</Address.title>
      <AddressInputWrapp>
        <Input mr={20} placeholder="Rooms" />
        <Input mr={20} placeholder="Size" />
        <Input mr={20} placeholder="Sort" />
      </AddressInputWrapp>
      <Address.title>Price</Address.title>
      <AddressInputWrapp>
        <Input mr={20} placeholder="Min price" />
        <Input mr={20} placeholder="Max price" />
      </AddressInputWrapp>
      <AddressInputWrapp>
        <Button width="131px" ml={20} type="primary">
          Search
        </Button>
      </AddressInputWrapp>
    </Address>
  );

  return (
    <Container>
      <Wrapper>
        <Input
          pl="42px"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        >
          <Icon.Home />
        </Input>

        <Popover placement="bottomRight" trigger="click" content={content}>
          <Button width="131px" ml={20} type="secondary">
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <div
          style={{
            clear: "both",
            whiteSpace: "nowrap",
          }}
        ></div>
        <Button width="131px" ml={20} type="primary">
          <Icon.Search /> Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Generic;
