import styled from 'styled-components';

export const WrapperContentUsers = styled.div`
  grid-area: Content;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListUsers = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: Content;
  justify-self: center;

  margin-top: ${({ theme }) => theme.spacing.tight};
  height: ${({ theme }) => theme.spacing.loose};
  width: 90%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.tight};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
`;
