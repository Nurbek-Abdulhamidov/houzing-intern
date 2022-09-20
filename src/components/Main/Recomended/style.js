import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const RecomendedContent = styled.div`
  text-align: center;
`;

RecomendedContent.Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: var(--primaryColor);
`;

RecomendedContent.Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--secondary);
  margin-bottom: 30px;
`;

Container.title = styled.h1`
  color: var(--primaryColor);
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 1440px;
`;
