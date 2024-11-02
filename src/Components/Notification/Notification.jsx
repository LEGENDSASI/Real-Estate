import React, { useState, useEffect } from 'react';
import './Notification.css'; // Assuming the CSS classes are defined here

const Notification = ({ message, type, dismissIn = 5000, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification on mount
    setIsVisible(true);

    // Auto-dismiss after specified time
    let timeout;
    if (dismissIn > 0) {
      timeout = setTimeout(() => {
        handleDismiss();
      }, dismissIn);
    }

    // Cleanup timeout on unmount
    return () => clearTimeout(timeout);
  }, [dismissIn]);

    const handleDismiss = () => {
    console.log("Dismiss clicked"); // Check if the click event works immediately
    setIsVisible(false);
    if (onDismiss) onDismiss();
    };

  const notificationClass = `f-notification ${
    type ? `f-notification-${type}` : ''
  } ${isVisible ? 'f-show' : 'f-hide'}`;

  return (
    <div className={notificationClass}>
      <div className="f-notification-inner">{message}</div>
      <div className="f-close" onClick={handleDismiss}>
        x
      </div>
    </div>
  );
};

// Helper function to trigger notification
const useNotification = () => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success', dismissIn = 5000) => {
    setNotification({ message, type, dismissIn });
  };

  const handleDismiss = () => {
    setNotification(null);
  };

  return {
    NotificationComponent: notification ? (
      <Notification
        message={notification.message}
        type={notification.type}
        dismissIn={notification.dismissIn}
        onDismiss={handleDismiss}
      />
    ) : null,
    showNotification,
  };
};

export default useNotification;
