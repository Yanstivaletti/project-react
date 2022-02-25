import styled from 'styled-components';

export const WrapperReadme = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.snug};

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.background};
  }

  img {
    width: ${({ theme }) => theme.spacing.loose};
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadow.shadow1};
  }

  h3 {
    padding-top: ${({ theme }) => theme.spacing.tight};
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-family: 'sans serif';
    color: ${({ theme }) => theme.colors.text};
  }
`;
