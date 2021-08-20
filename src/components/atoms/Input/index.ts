import styled from 'styled-components';

interface InputProps {
  width?: number;
}

const Input = styled.input<InputProps>`
  border: none;
  box-shadow: 0px 0px 0px 0px #f86f22;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.mischka};
  width: ${({ width }) => width}px;
  padding: 10px;
  font-weight: 500;

  ::placeholder {
    font-weight: normal;
  }
`;

export default Input;
