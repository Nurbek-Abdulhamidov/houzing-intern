import { DatePicker, TimePicker } from "antd";
import React from "react";
import moment from "moment";
import { Button, Input } from "../../Generic";
import { PageTitle, Textarea } from "../style";
import { Container, Content, InputWrapper, Wrapper } from "./style";

const Schedule = () => {
  // Date
  const getDate = (date, dateString) => {
    console.log(date, dateString);
  };

  // Time
  const getTime = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <Wrapper>
        <PageTitle>Schedule A Tour</PageTitle>
        <InputWrapper>
          <Content>
            <DatePicker onChange={getDate} />
            <TimePicker
              onChange={getTime}
              defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
            />
          </Content>
          <h2 className="subTitle">Your Information</h2>
          <Content>
            <Input placeholder="Name" />
            <Input placeholder="Phone" />
            <Input placeholder="Email" />
          </Content>
          <Content>
            <Textarea placeholder="Enter Your Message"></Textarea>
          </Content>
        </InputWrapper>
        <Button width="250px" type="primary">Submit a tour request</Button>
    </Wrapper>
  );
};

export default Schedule;
