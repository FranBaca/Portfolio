import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { useTranslation } from 'react-i18next';

export default function Footer () {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>{t("call")}</LinkTitle>
          <LinkItem href="tell: +54 3816540056">+54 3816540056</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: franbaca13@gmail.com">franbaca13@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{t("slogan")}</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/FranBaca" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/franciscobaca/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

