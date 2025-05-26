import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

const SkeletonCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
`;

const SkeletonTitle = styled.div`
  width: 120px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 15px;
`;

const SkeletonText = styled.div`
  width: 80%;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 8px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1040px;
  margin: 0 auto;
  padding: 20px 48px;
`;

const TechnologiesSkeleton = () => {
  return (
    <Section nopadding id="about">
      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 48px' }}>
        <SectionTitle main>
          <div style={{ width: '200px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 auto', borderRadius: '4px' }} />
        </SectionTitle>
      </div>
      <GridContainer>
        {[1, 2, 3, 4, 5].map((item) => (
          <SkeletonCard key={item}>
            <SkeletonTitle />
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
          </SkeletonCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default TechnologiesSkeleton; 