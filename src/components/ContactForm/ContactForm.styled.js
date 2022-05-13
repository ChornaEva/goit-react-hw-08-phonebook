import styled from 'styled-components';

export const PhonebookTitle = styled.h1`
  padding: 20px;
  margin: 0;
`;

export const PhonebookInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 10px;
  margin-left: 5px;
`;
export const PhonebookLabel = styled.label`
  list-style: none;
  padding: 0;
  margin: 5px;
`;

export const PhonebookInput = styled.input`
  list-style: none;
  padding: 5px;
  margin-left: 5px;
  width: 250px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const AddButton = styled.button`
  border-radius: 4px;
  border: none;
  width: 120px;
  height: 25px;
  text-transform: capitalize;
  margin: 10px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  border: none;
  outline: none;
  &:hover {
    background-color: #1976d2;
    color: white;
  }
`;
