import styled, { keyframes } from 'styled-components';

const trashAnimate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(15deg);
	}
`;

export const WrapperTable = styled.table`
  margin-top: ${({ theme }) => theme.spacing.tight};
  border-collapse: collapse;

  & > thead {
    & > tr {
      & > th {
        border-bottom: solid 0.3rem ${({ theme }) => theme.colors.background};
        border-top: solid 0.3rem ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
        padding: ${({ theme }) => theme.spacing.extraTight};
        width: ${({ theme }) => theme.spacing.regular};

        color: ${({ theme }) => theme.colors.text};

        :last-child {
          border-right: solid 0.3rem ${({ theme }) => theme.colors.background};
        }

        :first-child {
          border-left: solid 0.3rem ${({ theme }) => theme.colors.background};
        }
      }
    }
  }

  & > tbody {
    & > tr {
      transition: ${({ theme }) => theme.transition.slow};
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray};
        font-weight: ${({ theme }) => theme.font.weights.bold};
      }

      & > td {
        padding: ${({ theme }) => theme.spacing.extraTight};
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
        text-align: center;
        width: ${({ theme }) => theme.spacing.regular};

        @media (max-width: 576px) {
          padding: 1rem 0.5rem;
        }

        & > button {
          background: none;
          transition: ${({ theme }) => theme.transition.default};
          & + button {
            margin-left: ${({ theme }) => theme.spacing.tight};
          }

          &:nth-of-type(1):hover {
            transform: rotate(-45deg);
          }

          &:nth-of-type(2):hover {
            // set trashAnimate
            animation: ${trashAnimate} 0.1s linear infinite alternate;
          }
        }
      }
    }
  }
`;
