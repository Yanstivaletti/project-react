import styled from "styled-components";
import { ModalProps } from ".";

export const Overlay = styled.div<ModalProps>`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1200;
  opacity: ${props => (props.open ? 1 : 0)};
  height: ${props => (props.open ? '100%' : 0)};
  transition: ${props =>
    props.open
      ? 'height 100ms 0ms, opacity 500ms 100ms'
      : 'height 500ms 500ms, opacity 500ms 0ms'};
`;

export const Content = styled.div<ModalProps>`
  background-color: #FFF;
  padding: 30px;
  position: fixed;
  border-radius: 8px;
  display: flex;
  outline: none;
  overflow: hidden;
  max-height: 100vh;
  max-width: 100%;
  font-size: 16px;
`;

export const ContainerIconClose = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`
