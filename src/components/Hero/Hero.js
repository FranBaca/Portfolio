import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, ButtonSection } from './HeroStyles';
import { useTranslation } from 'react-i18next';
import { SocialIcons } from '../Header/HeaderStyles';
import { Img } from '../Projects/ProjectsStyles';
import HeroSkeleton from './HeroSkeleton';

export default function Hero() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section row nopadding style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LeftSection>
        {isLoading ? (
          <HeroSkeleton />
        ) : (
          <>
            <div className="animate-fade-in" style={{ maxWidth: '800px', width: '100%' }}>
              <SectionTitle main center>
                {t('welcome')}
              </SectionTitle>
              <SectionText>
                {t("subtitle")}<br/>
              </SectionText>
            </div>
            <ButtonSection>
              <div className="animate-scale-in">
                <SocialIcons href="https://github.com/FranBaca" target="_blank">
                  <AiFillGithub size="3rem"/>
                </SocialIcons>
              </div>
              <div className="animate-scale-in">
                <SocialIcons href="https://www.linkedin.com/in/franbaca13/" target="_blank">
                  <AiFillLinkedin size="3rem"/>
                </SocialIcons>
              </div>
            </ButtonSection>
          </>
        )}
      </LeftSection>
    </Section>
  );
}
