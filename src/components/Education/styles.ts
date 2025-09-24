import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    margin: 0 2rem; /* spacing between items */
  }

  .skill img {
    width: 60px;
    height: 60px;
    margin-bottom: 0.5rem;
  }

  .skill p {
    font-size: 1rem;
    margin: 0;
  }
`;
