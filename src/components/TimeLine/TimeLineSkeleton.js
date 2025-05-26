import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

const SkeletonAvatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 auto 30px;
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
`;

const SkeletonText = styled.div`
  width: 100%;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 8px;
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
`;

const SkeletonCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 48px;
  margin-top: 40px;
`;

const TimeLineSkeleton = () => {
  return (
    <Section id="about" style={{ maxWidth: '100%', padding: '32px 0' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 48px' }}>
        <SectionTitle>
          <div style={{ width: '200px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 auto', borderRadius: '4px' }} />
        </SectionTitle>
      </div>
      <SkeletonAvatar />
      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 48px' }}>
        <SkeletonText style={{ width: '80%', margin: '0 auto' }} />
        <SkeletonText style={{ width: '60%', margin: '0 auto' }} />
      </div>
      <GridContainer>
        {[1, 2, 3, 4].map((item) => (
          <SkeletonCard key={item}>
            <div style={{ width: '60px', height: '24px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', marginBottom: '15px' }} />
            <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.1)', marginBottom: '15px' }} />
            <SkeletonText />
            <SkeletonText />
          </SkeletonCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default TimeLineSkeleton; 