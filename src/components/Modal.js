import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const ModalContent = styled.div`
  width: 90%;
  max-width: 800px;
  aspect-ratio: 16/9;
  background-color: #000;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  overflow: hidden;
`;

const IframeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  z-index: 10001;
`;

const Modal = ({ children, onClose }) => {
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <IframeWrapper>{children}</IframeWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
