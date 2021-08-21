import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const RowInfoWrapper = styled.div`
  & > div {
    margin-bottom: 5px;
  }

  & > h3 {
    margin: 15px 0 5px;
  }
  & > p {
    margin: 0 0 15px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  & > div {
    margin-right: 5px;
  }
`;
