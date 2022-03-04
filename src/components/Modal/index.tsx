import React, { useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import * as S from './styles';

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  modalContent?: JSX.Element;
  iconClose?: boolean;
  widthContent?: string
  heightContent?: string
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  modalContent,
  iconClose,
  widthContent,
  heightContent
}) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const icon = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if ((wrapper && wrapper.current === event.target)) {
        onClose && onClose();
      }

      if ((icon && icon.current === event.target)) {
        onClose && onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <S.Overlay ref={wrapper} open={open}>
      <S.Content widthContent={widthContent} heightContent={heightContent} >
        {iconClose && (
          <S.ContainerIconClose onClick={onClose}>
            <IoMdClose color='#000' size={'2.5rem'} />
          </S.ContainerIconClose>
        )}
        {modalContent}
      </S.Content>
    </S.Overlay>
  );
};

export default Modal
