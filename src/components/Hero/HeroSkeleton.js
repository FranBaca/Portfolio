import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, ButtonSection } from './HeroStyles';

const SkeletonTitle = styled.div`
  width: 80%;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin: 0 auto 20px;
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
  width: 90%;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin: 0 auto 15px;
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
`;

const SkeletonIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin: 0 10px;
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
`;

const HeroSkeleton = () => {
  return (
    <Section row nopadding style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LeftSection>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <SkeletonTitle />
          <SkeletonText />
          <SkeletonText style={{ width: '70%' }} />
        </div>
        <ButtonSection>
          <SkeletonIcon />
          <SkeletonIcon />
        </ButtonSection>
      </LeftSection>
    </Section>
  );
};

export default HeroSkeleton; 