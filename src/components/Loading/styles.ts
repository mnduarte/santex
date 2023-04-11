import styled, { keyframes } from 'styled-components';

interface DotProps {
  delay?: string;
}

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 20px;
`;

export const Dot = styled.div<DotProps>`
  background-color: black;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.2rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }: DotProps) => delay};
`;
