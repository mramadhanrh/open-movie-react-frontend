import styled from 'styled-components';

const Select = styled.select`
  border: none;
  box-shadow: 0px 0px 0px 0px #f86f22;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.mischka};
  padding: 10px;
  font-weight: 500;
  cursor: pointer;

  ::placeholder {
    font-weight: normal;
  }
`;

export const Option = styled.option`
  cursor: pointer;
  padding: 10px;
`;

export default Select;
