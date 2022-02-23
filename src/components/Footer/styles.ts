import styled from "styled-components";


export const WrapperFooter = styled.footer`
  height: 188vh;
  display: flex;
  color: ${({theme}) => isNight? "blue" : theme.colors.primary};
  background-color: ${({theme}) => isNight? "pink" : theme.colors.secondary}
`
export const isNight = false;
