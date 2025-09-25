import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--heading-color); /* Will adapt to theme */
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .project {
      /* FORCE dark mode variables only for project cards */
      --card-bg: #2b2b2b;
      --heading-color: #fff;
      --text-secondary: #ccc;
      --pink: #E31F71;
      --black: #212121;
      --green: #23ce6b;
      --blue: #016fb9;

      padding: 2rem;
      background-color: var(--card-bg);
      border-radius: 1.2rem;
      transition: transform 0.25s, background-color 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: var(--heading-color);

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 2rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 3rem;
        }
      }

      h3 {
        margin-bottom: 1rem;
        font-size: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;

        a {
          color: #fff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          font-size: 1.4rem;
          opacity: 0.7;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
