import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem; /* increased padding */
  background: transparent;

  h2 {
    text-align: center;
    margin-bottom: 3rem; /* more spacing */
    font-size: 3rem; /* larger section heading */
    font-weight: bold;
    color: inherit;
  }

  .education-list {
    display: flex;
    flex-direction: column; /* stack vertically */
    gap: 3rem; /* more gap */
    align-items: center;
    width: 100%;
  }

  .education-card {
    background: var(--card-bg, white);
    padding: 3rem; /* bigger padding */
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
    font-size: 1.5rem; /* larger year text */
    font-weight: bold;
    color: var(--green);
  }

  .body {
    margin-top: 1rem;

    h3 {
      font-size: 2rem; /* larger degree heading */
      margin-bottom: 0.5rem;
      color: inherit;
      transition: color 0.5s;
    }

    p {
      font-size: 1.4rem; /* larger paragraph text */
      color: var(--text-secondary, #555);
      transition: color 0.5s;
    }

    strong {
      color: inherit;
      font-size: 1.5rem; /* larger strong text */
    }
  }

  .stagger-0 {
    align-self: flex-start;
  }

  .stagger-1 {
    align-self: flex-end;
  }
`;
