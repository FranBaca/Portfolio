import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonWrapper = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.background2} 25%, 
    ${props => props.theme.colors.background3} 50%, 
    ${props => props.theme.colors.background2} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${props => props.radius || '4px'};
  margin: ${props => props.margin || '0'};
`;

const Skeleton = ({ width, height, radius, margin }) => {
  return (
    <SkeletonWrapper 
      width={width} 
      height={height} 
      radius={radius} 
      margin={margin}
    />
  );
};

export default Skeleton; 