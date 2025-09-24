import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem;
  background: transparent;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: inherit;
  }

  .education-list {
    display: flex;
    flex-direction: column; /* stack vertically */
    gap: 2rem;
    align-items: center;
    width: 100%;
  }

  .education-card {
    background: var(--card-bg, white);
    padding: 2rem;
    border-radius: 12px;

    width: 90vw; /* Fill 90% of viewport width */
    max-width: 1200px; /* Limit max size */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

    transition: transform 0.3s ease, background-color 0.5s, color 0.5s;
  }

  .education-card:hover {
    transform: translateY(-5px);
  }

  .year {
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--green);
  }

  .body {
    margin-top: 0.5rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.3rem;
      color: inherit;
      transition: color 0.5s;
    }

    p {
      font-size: 1.1rem;
      color: var(--text-secondary, #555);
      transition: color 0.5s;
    }

    strong {
      color: inherit;
    }
  }

  .stagger-0 {
    align-self: flex-start;
  }

  .stagger-1 {
    align-self: flex-end;
  }
`;
