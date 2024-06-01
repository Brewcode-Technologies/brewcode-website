import React from 'react';
import { ReusableButtonProps } from '../types';

const ReusableButton: React.FC<ReusableButtonProps> = ({ label, navigateTo }) => {
  return (
    <div>
      <button className="contact-us-btn" onClick={navigateTo}>
        {label}
      </button>
    </div>
  );
};

export default ReusableButton;