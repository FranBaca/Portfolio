import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 40px 20px;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 30px 15px;
    margin-top: 16px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 20px 4px;
    margin-top: 0;
  }
`

export const MainImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  object-fit: contain;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 3rem 5rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${props => props.theme.breakpoints.sm}{
    margin-left: 0;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 20px;
  }
`

export const ListItem = styled.li`
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
  min-height: 200px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 100%;
    min-height: 140px;
    padding: 1.5rem;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 36px;
    height: 36px;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`
