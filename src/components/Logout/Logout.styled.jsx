import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  padding: 8px 16px;
  border: none;
  text-decoration: none;  
  text-transform: uppercase;
  font-size: 14px;  
  font-weight: 700;
  background-color: white;    
  

  &:hover {
    font-weight: 400;  
    color: white;
    background-color: #ed6c02;
    border-radius: 4px;
  }
`;