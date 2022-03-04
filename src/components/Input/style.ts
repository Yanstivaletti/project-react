import styled, { css } from 'styled-components'
import { ContainerProps, InputProps } from '../../Types'

type StartIconProps = {
  isFocused: boolean
}

type EndIconProps = {
  isFocused: boolean
}

export const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerInput = styled.div<ContainerProps>`
  ${(/* { theme } */) => css`
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      height: 50px;
    `
  }
`

export const Input = styled.input<InputProps>`
  ${({ theme, startIcon, endIcon }) => css`
    height: 50px;
    color: #000;
    background-color: #FFF;
    border: 2px solid #000;
    border-radius: 4px;
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-style: normal;
    font-weight: 400;
    width: 100%;
    padding: ${startIcon && endIcon
      ? '0.5rem 2.7rem'
      : startIcon
        ? '0.5rem 0.5rem 0.5rem 2.7rem'
        : endIcon
          ? '0.5rem 2.7rem 0.5rem 0.7rem'
          : '0.5rem'};
    outline: #F35A89;
    transition: 200ms;

    &:focus,
    &:active {
      border-color: #dadada;
      background-color: #dadada;
    }

    /* Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      background-color: white;
      color: #000;
      border: 2px solid #000;
      box-shadow: 0 0 0px 1000px
        #000 inset;
      -webkit-box-shadow: 0 0 0px 1000px
        #000 inset;
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #000;
    }
  `}
`

export const StartIcon = styled.div<StartIconProps>`
  ${({ theme, isFocused }) => css`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${!isFocused ? '#000' : '#fff'};
    transition: 300ms;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
  `}
`

export const EndIcon = styled.div<EndIconProps>`
  ${({ theme, isFocused }) => css`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${!isFocused ? '#000' : '#fff'};
    transition: 300ms;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
  `}
`

export const MessageError = styled.span`
  ${({ theme }) => css`
    color: #F00;
    font-size: 16px;
    margin: 5px 0 0 5px;
  `}
`

export const ErrorMessageValidation = styled.span`
  ${({ theme }) => css`
    margin: 0.4rem 0 0 0.4rem;
    color: #F00;
    font-size: 16px;
    line-height: 1rem;
  `}
`
