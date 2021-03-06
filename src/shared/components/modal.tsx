import React from "react";

interface ModalProps {
  show: boolean;
  children?: React.ReactNode;
  toggleModal?: () => void;
}

function Modal({ show, children, toggleModal }: ModalProps) {
  if (!show) {
    return null;
  }

  return (
    <section
      className="absolute left-0 right-0 flex items-center justify-center w-screen h-screen bg-white bg-opacity-100"
      onClick={toggleModal}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </section>
  );
}

export default Modal;
