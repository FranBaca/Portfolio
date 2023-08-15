import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, ButtonSection } from './HeroStyles';
import { useTranslation } from 'react-i18next';
import { SocialIcons } from '../Header/HeaderStyles';
import { Img } from '../Projects/ProjectsStyles';

export default function Hero (props) {
  const { t } = useTranslation();
  return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      {t('welcome')}
      </SectionTitle>
      <SectionText>
          {t("subtitle")}<br/>
      </SectionText>
    <ButtonSection>
    <SocialIcons href="https://github.com/FranBaca" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/franbaca13/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </ButtonSection>
    </LeftSection>
  </Section>
  )
}
