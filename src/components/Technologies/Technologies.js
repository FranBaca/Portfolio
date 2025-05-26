import React, { useState, useEffect } from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { useTranslation } from 'react-i18next';
import TechnologiesSkeleton from './TechnologiesSkeleton';

const Technologies = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section nopadding id="about">
      {isLoading ? (
        <TechnologiesSkeleton />
      ) : (
        <>
          <div className="animate-fade-in" style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 48px' }}>
            <SectionTitle main>{t("technologies")}</SectionTitle>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1040px',
            margin: '0 auto',
            padding: '20px 48px'
          }}>
            {[
              { title: 'Frontend', description: 'React, TypeScript, Javascript, Redux, Tailwind' },
              { title: 'Backend', description: 'Node.js, Express, REST APIs' },
              { title: 'Database', description: 'MongoDB, PostgreSQL, MySQL' },
              { title: 'DevOps', description: 'Docker, AWS, CI/CD, Git' },
              { title: 'Tools', description: 'VS Code, Postman, Figma, Jira, LLM Models' },
            ].map((tech, index) => (
              <div 
                key={tech.title}
                className="animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>{tech.title}</h3>
                <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.75)' }}>{tech.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
  );
};

export default Technologies;
