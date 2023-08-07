import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  animation: moveDown 1.5s ease-out;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;
}
}
  
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
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
display:flex;
flex-direction:row;
`
