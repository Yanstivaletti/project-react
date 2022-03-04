import styled from 'styled-components';

export const WrapperFooter = styled.footer`
  display: flex;
  grid-area: Footer;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.gray};
`;
export const isNight = false;
