import styled from "styled-components";

export const StyledAI = styled.div`
  padding: 2rem;
  display: flex;
  width: 90vw;
  position: relative;
  height: min-content;

  .presentation {
    align-self: center;
    height: 20%;
    margin-bottom: 2rem;

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

    .button {
      padding: 0.5rem;
      border-radius: 10px;
      border: 1px solid black;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      font-size: 1rem;
      cursor: pointer;
      opacity: 80%;
      transition: opacity 500ms ease;
      text-decoration: none;

      &:hover {
        opacity: 100%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    width: 100vw;
    flex-direction: column;

    .social {
      width: 50%;
      margin: 0 auto;
      position: static;
    }

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

      .subtitle {
        display: none;
      }
    }
  }
`;
