import styled from 'styled-components';

export const ContentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid yellow;
  width: 100%;
  background-color: transparent;
  font-family: 'Viga', sans-serif;
  color: #8a8894;
  &:focus{
    border-bottom: 1px solid yellow;
    outline: none;
  }
`;

