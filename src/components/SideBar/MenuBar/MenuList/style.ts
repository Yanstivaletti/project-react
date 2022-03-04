import styled from 'styled-components';

export const WrapperLink = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.spacing.tight};

  &:hover {
    & > a {
      svg {
        fill: ${({ theme }) => theme.colors.info};
        transform: scale(1.2) rotateY(180deg);
      }

      span {
        letter-spacing: 0.1rem;
      }
    }
  }

  & > a {
    display: flex;
    align-items: center;
    svg {
      transition: ${({ theme }) => theme.transition.default};
      margin-right: ${({ theme }) => theme.spacing.extraTight};
      color: ${({ theme }) => theme.colors.gray};
    }
    span {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.font.sizes.small};
      transition: ${({ theme }) => theme.transition.default};
    }
  }
`;

export const List = styled.ul``;
