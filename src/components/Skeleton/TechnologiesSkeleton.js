import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Skeleton from './Skeleton';

const TechnologiesSkeleton = () => {
  return (
    <Section id="technologies">
      <SectionTitle main>
        <Skeleton width="200px" height="40px" style={{ margin: '0 auto' }} />
      </SectionTitle>
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
          >
            <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>
              <Skeleton width="120px" height="28px" />
            </h3>
            <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.75)' }}>
              <Skeleton width="100%" height="60px" />
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechnologiesSkeleton; 