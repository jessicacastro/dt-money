import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  div {
    background: ${(props) => props.theme["gray-600"]};
    padding: 1rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-weight: bold;
    color: ${(props) => props.theme["gray-400"]};
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:first-of-type {
      background-color: ${(props) => props.theme["green-700"]};
      color: ${(props) => props.theme.white};
    }
  }

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:last-of-type {
      color: ${(props) => props.theme["green-700"]};
    }
  }
`;
