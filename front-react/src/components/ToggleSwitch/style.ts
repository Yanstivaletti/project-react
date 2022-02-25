import styled from 'styled-components';

export const Button = styled.label`
  width: 10rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  span {
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadow.shadow2};
    background-color: #3a3a3a;

    left: ${({ theme }) => theme.spacing.none};
    transition: 1s;
  }

  > input:checked + span {
    left: 7rem;
    background-color: ${({ theme }) => theme.colors.gray};
  }

  > svg:last-child {
    font-size: 3.2rem;
    padding-right: 0.4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  > svg:first-child {
    font-size: 3rem;
    padding-left: 0.4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
