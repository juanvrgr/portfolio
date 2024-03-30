import styled from "styled-components";

export const StyledAI = styled.div`
  padding: 3rem;
  display: flex;
  width: 90vw;
  position: relative;
  height: min-content;
  margin-bottom: 1rem;

  .presentation {
    align-self: flex-start;
    height: 20%;
    margin-bottom: 3rem;

    .title {
      font-size: 2.5rem;
      transition: all 250ms ease;

      &:hover {
        margin: 0.1rem;
        filter: blur(1px);
      }
    }

    .data {
      font-size: 1.2rem;
      font-weight: 600;
      width: 75%;
      margin-top: 3rem;
    }

  @media screen and (max-width: 500px) {
    width: 100vw;
    flex-direction: column;

    .presentation {
      margin-top: 20vh;
      height: min-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20vh;

      .data {
        margin-top: 1rem;
        font-size: 1.1rem;
      }

    }
  }
`;
