import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OptionsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsBtn = styled.button`
  min-width: 120px;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 32px;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(186, 190, 204) 1px 1px 1px;
  border-radius: 4px;
  border: 1px solid #fff;
  cursor: pointer;

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    backdrop-filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transition: all 0.3s ease-in-out 0s;
    background-color: rgb(198, 207, 255);
    color: rgb(255, 255, 255);

  }
`;
