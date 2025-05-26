import React, { useState, useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { Img } from '../Projects/ProjectsStyles';
import { useTranslation } from 'react-i18next';
import TimeLineSkeleton from './TimeLineSkeleton';
import { CarouselContainer, CarouselItem } from './TimeLineStyles';

const Timeline = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="about" style={{ maxWidth: '100%', padding: '32px 0' }}>
      {isLoading ? (
        <TimeLineSkeleton />
      ) : (
        <>
          <div className="animate-fade-in" style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 48px' }}>
            <SectionTitle>{t("about")}</SectionTitle>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '30px',
            maxWidth: '1040px',
            margin: '0 auto',
            padding: '0 48px'
          }}>
            <Img 
              src="images/Perfil.jpeg" 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '100px',
                objectFit: 'cover'
              }}
              className="animate-scale-in"
            />
          </div>
          <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 48px' }}>
            <SectionText className="animate-fade-in">
              {t("slogan")}
            </SectionText>
          </div>
          <CarouselContainer>
            {TimeLineData.map((item, index) => (
              <CarouselItem
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 style={{ marginBottom: '15px' }}>{item.year}</h3>
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '15px'
                }} />
                <p>{item.text}</p>
              </CarouselItem>
            ))}
          </CarouselContainer>
        </>
      )}
    </Section>
  );
};

export default Timeline;
