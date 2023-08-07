import {Link} from 'react-router-dom';     
import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { useTranslation } from 'react-i18next';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

export default function Header  ()  {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
return(
  <Container>
    <Div1>
      <Link to="/">
        <a style={{display:"flex",alignItems:"center",color:"white", marginBottom:"20px"}} href="_blank">
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
      <div>
    </div>
    </Div2>
    <Div3>
      

      <SocialIcons >
      <button style={{"background":"none", "border":"none", "cursor": "pointer"}} onClick={() => changeLanguage('en')}><img  style={{"width": "50px"}}  src="images/english.jpg" alt=""/></button>
      </SocialIcons>
      <SocialIcons>
      <button style={{"background":"none", "border":"none","cursor": "pointer"}} onClick={() => changeLanguage('es')}><img style={{"width":"50px"}}  src="images/spain.jpg" alt=""/></button>
      </SocialIcons>
    </Div3>
  </Container>
)
}

