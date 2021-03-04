import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { Theme } from '../../styles/theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  text-align: center;
  width: 100%;

  animation: ${appearFromLeft} 1s;

  h1 {
    color: ${props => props.theme.white};
  }

  > a {
    color: ${props => props.theme.darkBlue};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, Theme.darkBlue)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
