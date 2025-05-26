import React from 'react';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import Skeleton from './Skeleton';

const TimelineItemSkeleton = () => (
  <div style={{
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  }}>
    <Skeleton width="150px" height="24px" margin="0 0 15px 0" />
    <div style={{
      width: '100%',
      height: '1px',
      background: 'rgba(255, 255, 255, 0.1)',
      marginBottom: '15px'
    }} />
    <Skeleton width="100%" height="80px" margin="0 0 15px 0" />
  </div>
);

const TimelineSkeleton = () => {
  return (
    <Section id="about" style={{ maxWidth: '100%', padding: '32px 0' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 48px' }}>
        <SectionTitle>
          <Skeleton width="200px" height="40px" />
        </SectionTitle>
      </div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '30px',
        maxWidth: '1040px',
        margin: '0 auto',
        padding: '0 48px'
      }}>
        <Skeleton width="200px" height="200px" radius="100px" />
      </div>
      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 48px' }}>
        <SectionText>
          <Skeleton width="90%" height="24px" margin="0 0 10px 0" />
          <Skeleton width="80%" height="24px" margin="0 0 10px 0" />
          <Skeleton width="70%" height="24px" margin="0 0 30px 0" />
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
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={item}
            className="animate-fade-in"
            style={{
              animationDelay: `${index * 0.2}s`,
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <Skeleton width="150px" height="24px" margin="0 0 15px 0" />
            <div style={{
              width: '100%',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.1)',
              marginBottom: '15px'
            }} />
            <Skeleton width="100%" height="80px" margin="0 0 15px 0" />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TimelineSkeleton; 