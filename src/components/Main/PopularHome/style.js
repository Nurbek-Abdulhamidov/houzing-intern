import styled from "styled-components";

export const Popular = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  position: relative;
`;
export const BlockTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

export const Wrapper = styled.div`
  width: 1440px;
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: center;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
