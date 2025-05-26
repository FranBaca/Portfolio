import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 3rem 5rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto 80px;
  background: #0F1624;
  list-style: none;
  position: relative;
  animation: moveDown 3s ease-out;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    margin-bottom: 32px;
    gap: 2rem;
  }
`

export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%` : `min-content`};
    gap: 16px;
    justify-content: center;
    padding: 8px 0;
  }
`

export const CarouselItem = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
  min-height: 200px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: #181f2e;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.3s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 100%;
    min-height: 140px;
    padding: 1.5rem;
    margin-bottom: 0;
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 0;
  }
`

export const CarouselButtons = styled.div`
  width: 100%;
  max-width: 288px;
  display: none;
  visibility: hidden;
  margin: 0 auto;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 24px;
    justify-content: center;
    gap: 12px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 8px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: ${(props) => props.active === props.index ? `1` : `.66`};
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 6px;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 4px;
  height: 4px;
  transition: all 0.3s ease;

  @media ${props => props.theme.breakpoints.sm} {
    width: 3px;
    height: 3px;
  }
`
