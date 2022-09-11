import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../ModalCard/ModalCard.scss';


// const Backdrop = (props: { onClose: React.MouseEventHandler<HTMLDivElement> | undefined; }) => {
//   return <div className="backdrop" onClick={props.onClose}/>;
// };

// const ModalOverlay = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
//     return(
//   <div className="modal">
//     <div className="content">{props.children}</div>
//   </div>
//   );
// };

const Backdrop = (props) => {
  return <div  className="backdrop" onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
    return(
  <div className="modal">
    <div className="content">{props.children}</div>
  </div>
  );
};

const portalElment = document.getElementById("overlays")!;

const Modal = (props: { onClose: any; children: any; }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElment)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElment
      )}
    </Fragment>
  );
};

export default Modal;

