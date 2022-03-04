import styled from 'styled-components';

export const WrapperHeader = styled.header`
  display: flex;
  flex-direction: column;
  grid-area: Header;

  padding: 1.2rem 1.5rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
  background-color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 576px) {
    width: 100%;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    svg {
      margin-right: ${({ theme }) => theme.spacing.extraTight};
      color: ${({ theme }) => theme.colors.primary};
    }

    h1 {
      font-size: 3rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  & > div:last-child {
    h2 {
      font-weight: ${({ theme }) => theme.font.weights.light};
      font-size: ${({ theme }) => theme.font.sizes.small};
      margin-top: ${({ theme }) => theme.spacing.extraTight};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
