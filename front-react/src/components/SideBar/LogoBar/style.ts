import styled from 'styled-components';

export const WrapperLogoBar = styled.aside`
  display: flex;
  grid-area: LogoBar;

  align-items: center;
  justify-content: center;
  border-bottom: solid 0.3rem ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.secondary};

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.none};

    svg {
      width: 11rem;
    }
  }

  @media (max-width: 576px) {
    width: 100vw;

    & > a {
      svg {
        display: flex;
        width: 12rem;
      }
    }
  }
`;
