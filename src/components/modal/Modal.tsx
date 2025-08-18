import {useEffect, ReactNode} from 'react';
import {Dim, ModalBox, ModalClose, ModalWrapper} from './StyledModal';

interface ModalProps {
  width?: string | number;
  height?: string | number;
  children: ReactNode;
  onClose: () => void;
  oversize?: boolean;
  opacity?: number;
  $modalData?: any;
}

export default function Modal({
  width,
  height,
  children,
  onClose,
  oversize,
  opacity,
  $modalData,
}: ModalProps) {
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
  }, [oversize]);

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
