import styled from 'styled-components';

export const WrapperMenuBar = styled.aside`
  grid-area: MenuBar;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.tight};

  background: ${({ theme }) => theme.colors.primary};

  @media (max-width: 576px) {
    width: 100vw;
    box-shadow: 0 0.3rem 0.7rem #00000040;
    z-index: 1;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    & > a {
      transform: scale(0.2);
      margin: 0 auto;
      border: solid 1px ${({ theme }) => theme.colors.secondary};
    }
  }
`;
