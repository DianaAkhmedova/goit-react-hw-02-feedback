import styled from 'styled-components';

export const FeedbackButton = styled.button`
  min-width: 75px;
  padding: 8px 12px;
  border: 1px solid orange;
  border-radius: 4px;
  background-color: transparent;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
  color: orange;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    color: white;
    background-color: orange;
  }
`;
