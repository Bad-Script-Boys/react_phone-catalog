import React, { ReactNode, RefObject } from 'react';

interface CardWrapperProps {
  children: ReactNode;
  firstAnimationRef: RefObject<HTMLDivElement>;
  secondAnimationRef: RefObject<HTMLDivElement>;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  firstAnimationRef,
  secondAnimationRef,
}) => {
  const handleMouseEnter = () => {
    if (firstAnimationRef.current) {
      firstAnimationRef.current.style.animationPlayState = 'paused';
    }
    if (secondAnimationRef.current) {
      secondAnimationRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (firstAnimationRef.current) {
      firstAnimationRef.current.style.animationPlayState = 'running';
    }
    if (secondAnimationRef.current) {
      secondAnimationRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transition-transform transform hover:scale-105"
    >
      {children}
    </div>
  );
};
