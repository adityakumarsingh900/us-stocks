import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Chrome } from 'grommet-icons';
import bounce from './bounce';
import fadeIn from './fadeIn';
import loading from './loading';
import pulse from './pulse';
import spin from './spin';

const bounceAnimation = keyframes`${bounce}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const loadingAnimation = keyframes`${loading}`;
const pulseAnimation = keyframes`${pulse}`;
const spinAnimation = keyframes`${spin}`;

const BouncingDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;
const LoadingDiv = styled.div`
  background-image: linear-gradient(135deg, #ddd 0px, white 80px, #ddd 160px);
  animation: linear 1.6s infinite ${loadingAnimation};
`;
const PulseDiv = styled.div`
  animation: 1s ${pulseAnimation};
`;
const SpinningIcon = styled(Chrome)`
  animation: linear 1s infinite ${spinAnimation};
`;

const BounceExample = () => {
  return <BouncingDiv>Bounce baby bounce</BouncingDiv>;
};
const FadeInExample = () => {
  return <FadeInDiv>Fadding in somewhere but not here</FadeInDiv>;
};
const LoadingExample = () => {
  return <LoadingDiv>Hold my beer I'm still loading</LoadingDiv>;
};
const PulseExample = () => {
  return <PulseDiv>Pulse with some extra text</PulseDiv>;
};
const SpinningExample = () => {
  return <SpinningIcon color="brand" size="large" />;
};

export { BounceExample, FadeInExample, LoadingExample, PulseExample, SpinningExample };
