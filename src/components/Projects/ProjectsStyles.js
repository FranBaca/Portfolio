import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 3rem 5rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  animation: moveDown 3s ease-out;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
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
`

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
  min-height: 520px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    min-height: 400px;
    padding: 1.5rem;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-bottom: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.text};
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 2px;
  margin: 20px auto;
  border: 0;
  background: ${props => props.theme.colors.accent1};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 1.5rem;
  color: ${props => props.theme.colors.textSecondary};
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  margin: 1.5rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem;
    margin: 1rem 0;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: ${props => props.theme.colors.button};
  border-radius: 8px;
  transition: 0.3s ease;
  &:hover {
    background: ${props => props.theme.colors.hover};
    transform: translateY(-2px);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  margin: 1rem 0;
`;

export const Tag = styled.li`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.background1};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.border};
`;