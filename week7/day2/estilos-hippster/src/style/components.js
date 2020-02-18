import styled from "styled-components";

export const Card = styled.div`
  width: 40vw;
  background-color: white;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 1.4rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  h2 {
    color: #888;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 40%;
  }
  ${({ dark }) =>
    dark
      ? `
    &{
      background-color:black;
    }
    h2, p{
      color: white;
    }
  `
      : ""}
  & > div > a {
    color: rebeccapurple;
  }
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 700px) {
    width: 100vw;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 2.5rem;
`;
