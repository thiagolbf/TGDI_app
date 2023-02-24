import styled from "styled-components";

export const FilterProducts = styled.div`
  font-family: var(--roboto);
  padding: 10px;
  > label {
    margin: 0 10px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin: auto;
`;
