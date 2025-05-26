import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  animation: moveDown 1.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    padding: 4rem 1rem;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 5rem 2rem;
  }

  @keyframes moveDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;
