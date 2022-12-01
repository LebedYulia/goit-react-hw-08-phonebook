import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: auto;
  padding: 10px;
  border: solid 1px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0 0 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  padding: 8px 16px;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;  
  font-weight: 500;
  border: none;
  background-color: #e2ebec;

  &:hover,
   :focus {
    color: white;
    background-color: orangered;
    border: none;
  }
`;
