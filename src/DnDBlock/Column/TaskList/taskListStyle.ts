import styled from 'styled-components';

export const TaskListStyleLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  height: 45px;
  margin-bottom: 20px;
  padding: 8px 0;

  border-bottom: 1px solid #4B4B4B;
  
  &:first-child {
    border-top: 1px solid #4B4B4B;
    margin-bottom: 0px;
  }

`;

export const TaskListStyleWord = styled.div`
  height: 30px;
  min-width: 70px;
  margin-bottom: 15px;
  margin-right: 10px;

  background: #E6E6E6;
  box-shadow: inset 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
`;