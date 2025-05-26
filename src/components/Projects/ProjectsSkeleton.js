import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

const SkeletonCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 15px;
`;

const SkeletonTitle = styled.div`
  width: 70%;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SkeletonText = styled.div`
  width: 100%;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 8px;
`;

const SkeletonTag = styled.div`
  width: 60px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin: 5px;
  display: inline-block;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
`;

const ProjectsSkeleton = () => {
  return (
    <Section nopadding id="projects">
      <TitleWrapper>
        <SectionTitle main>
          <div style={{ width: '200px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 auto', borderRadius: '4px' }} />
        </SectionTitle>
      </TitleWrapper>
      <GridContainer>
        {[1, 2, 3, 4].map((item) => (
          <SkeletonCard key={item}>
            <SkeletonImage />
            <SkeletonTitle />
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
            <div style={{ marginTop: '15px' }}>
              <SkeletonTag />
              <SkeletonTag />
            </div>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
              <SkeletonTag />
              <SkeletonTag />
            </div>
          </SkeletonCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default ProjectsSkeleton; 