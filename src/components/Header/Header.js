import {Link} from 'react-router-dom';     
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link to="/">
        <a style={{display:"flex",alignItems:"center",color:"white", marginBottom:"20px"}}>
          <DiCssdeck size="3rem"/> <Span>Francisco Baca</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link to="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link to="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link to="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/FranBaca" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/franbaca13/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
