import styled from 'styled-components';

export const WrapperTemplate = styled.main`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows:
    10rem
    1fr
    7rem;
  grid-template-areas:
    'LogoBar Content'
    'MenuBar Content'
    'MenuBar Footer';

  min-height: 100vh;

  /* @media (max-width: 768px) {
    grid-template-columns: 5rem 1fr;

    grid-template-rows:
      5rem
      1fr
      5rem
      var(--footer-height);

    grid-template-areas:
      'LogoBar Content'
      'menu menu'
      'content content'
      'footer footer';
  } */

  @media (max-width: 576px) {
    grid-template-rows:
      12rem
      8rem
      1fr
      10rem;

    grid-template-columns: 1fr;
    grid-template-areas:
      'LogoBar'
      'MenuBar'
      'Content'
      'Footer';
  }
`;
