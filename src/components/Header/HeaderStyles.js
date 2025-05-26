import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${props => props.theme.colors.headerBg};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  animation: fade 1.5s ease-in;
  height: 64px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    height: auto;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Span = styled.span`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text};
  margin-left: 0.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    justify-content: center;
  }
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.6rem;
  line-height: 1;
  color: ${props => props.theme.colors.textSecondary};
  transition: 0.3s ease;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  
  &:hover {
    color: ${props => props.theme.colors.accent1};
    opacity: 1;
    cursor: pointer;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem 0.5rem;
    font-size: 1.4rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;
  align-items: center;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
    font-size: 1.5rem;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons 
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${props => props.theme.colors.text};
  border-radius: 50px;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: ${props => props.theme.colors.background2};
    transform: scale(1.1);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 3px;
  }
`;