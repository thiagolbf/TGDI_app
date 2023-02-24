import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;

  justify-content: space-around;

  font-family: var(--roboto);

  > div {
    > p {
      padding: 35px;
    }
  }

  > a {
    color: var(--black);
  }

  a:visited {
    color: var(--black);
  }
`;
