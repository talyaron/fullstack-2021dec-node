import React from 'react'

interface PopupProps {
  children: React.ReactNode;
  handleClosePopup: React.MouseEventHandler<HTMLButtonElement>;
}

export const Popup: React.FC<PopupProps> = ({children, handleClosePopup}) => {
  return (
    <div className="popup-backdrop">
      <div className="popup">
        {children}
        <button onClick={handleClosePopup}>Close Popup</button>
      </div>
    </div>
  );
}


