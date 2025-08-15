// @ts-nocheck
import {useEffect} from 'react';
import {Dim, ModalBox, ModalClose, ModalWrapper} from './StyledModal';

export default function Modal({
  width,
  height,
  children,
  onClose,
  oversize,
  opacity,
  $modalData,
}) {
  const handleCloseClick = e => {
    e.preventDefault();
    onClose();
  };
  useEffect(() => {
    if (oversize) {
      document.body.classList.add('scrollHidden');
      return () => {
        document.body.classList.remove('scrollHidden');
      };
    }
  }, []);

  return (
    <Dim opacity={opacity} $oversize={oversize}>
      <ModalWrapper $oversize={oversize}>
        <ModalBox width={width} height={height} $oversize={oversize}>
          <ModalClose
            type="button"
            aria-label="close"
            onClick={handleCloseClick}
            $modalData={$modalData}
          />
          {children}
        </ModalBox>
      </ModalWrapper>
    </Dim>
  );
}
