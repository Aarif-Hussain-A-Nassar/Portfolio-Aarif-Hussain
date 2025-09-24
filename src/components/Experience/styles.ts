import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem; /* more spacing */
  background: transparent;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem; /* bigger heading */
    font-weight: bold;
    color: inherit;
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 3rem; /* more gap between cards */
    align-items: center;
    width: 100%;
  }

  .experience-card {
    background: var(--card-bg, white);
    padding: 3rem; /* more padding */
    border-radius: 12px;

    width: 90vw;
    max-width: 1200px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

    transition: transform 0.3s ease, background-color 0.5s, color 0.5s;
  }

  .experience-card:hover {
    transform: translateY(-5px);
  }

  header {
    margin-bottom: 1rem;

    h3 {
      font-size: 2rem; /* larger role/title */
      margin-bottom: 0.5rem;
      color: inherit;
      transition: color 0.5s;
    }

    .company {
      display: block;
      font-weight: bold;
      font-size: 1.5rem; /* larger company name */
      color: var(--green, #2ecc71);
    }

    .duration,
    .location {
      display: block;
      font-size: 1.2rem; /* larger duration/location text */
      color: var(--text-secondary, #555);
    }
  }

  .body {
    margin-top: 1rem;

    p {
      font-size: 1.4rem; /* bigger paragraph text */
      color: var(--text-secondary, #555);
      transition: color 0.5s;
    }

    strong {
      color: inherit;
      font-size: 1.45rem; /* larger bold text */
    }
  }

  .stagger-0 {
    align-self: flex-start;
  }

  .stagger-1 {
    align-self: flex-end;
  }
`;
