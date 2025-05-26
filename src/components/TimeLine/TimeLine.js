import React, { useState, useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { Img } from '../Projects/ProjectsStyles';
import { useTranslation } from 'react-i18next';
import TimeLineSkeleton from './TimeLineSkeleton';

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
          <div style={{ 
            maxWidth: '1040px', 
            margin: '0 auto', 
            padding: '0 48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}>
            {TimeLineData.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ marginBottom: '15px' }}>{item.year}</h3>
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '15px'
                }} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
  );
};

export default Timeline;
