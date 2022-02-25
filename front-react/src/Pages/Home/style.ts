import styled from 'styled-components';

export const WrapperContentHome = styled.div`
  box-shadow: none;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: ${({ theme }) => theme.spacing.tight};

  & > h1 {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.weights.light};
    color: ${({ theme }) => theme.colors.text};
  }

  & > p {
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-weight: ${({ theme }) => theme.font.weights.light};
    color: ${({ theme }) => theme.colors.text};
  }
`;
