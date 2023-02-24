import styled from "styled-components";

export const Card = styled.div`
  font-family: var(--roboto);
  display: relative;
  border: 2px solid var(--black);
  padding: 15px;
  margin: 40px;
  border-radius: 10px;
  width: 250px;
  height: 350px;
  text-align: center;
  > p {
    text-align: justify;
  }
  img {
    width: 200px;
    height: 200px;
  }

  button {
    position: relative;
    border-radius: 5px;
    top: 10px;
    padding: 5px;
  }
`;
