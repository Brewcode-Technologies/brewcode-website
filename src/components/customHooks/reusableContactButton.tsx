// import React from 'react';
// import { ReusableButtonProps } from '../types';

// const ReusableButton: React.FC<ReusableButtonProps> = ({ label, navigateTo }) => {
//   return (
//     <div>
//       <button className="contact-us-btn" onClick={navigateTo}>
//         {label}
//       </button>
//     </div>
//   );
// };

// export default ReusableButton;

// ReusableButton.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { ReusableButtonProps } from '../types';

interface ReusableButtonClickEvent {
  event: 'button_click';
  button_label: string;
  navigate_to?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ label, navigateTo }) => {
  const router = useRouter();

  const handleClick = () => {
    const eventData: ReusableButtonClickEvent = {
      event: 'button_click',
      button_label: label,
      navigate_to: navigateTo,
    };

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(eventData);
      console.log('GTM Button Click Event Fired:', eventData);
    }

    // Navigate if navigateTo is a path
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <div>
      <button className="contact-us-btn" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default ReusableButton;
