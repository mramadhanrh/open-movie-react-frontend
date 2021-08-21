import styled from 'styled-components';

export const Card = styled.button`
  border: none;
  background: #ffffff;
  padding: 0;
  margin: 10px 0;
  width: 100%;
  min-height: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  max-width: 300px;
  text-align: left;
  overflow: hidden;
`;

export const CardImage = styled.img<{ src?: string }>`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  padding: 10px 10px 15px;

  & > h1 {
    font-size: 24px;
    margin: 0;
  }
`;

export const BadgesWrapper = styled.div`
  display: flex;
  text-transform: capitalize;
  & > div {
    margin-right: 5px;
  }
`;
