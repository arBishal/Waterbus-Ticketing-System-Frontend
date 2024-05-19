import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Dhaka'
      };

      const formattedDateTime = now.toLocaleString('en-US', options);
      setDateTime(formattedDateTime);
      //console.log(formattedDateTime);
    }

    updateDateTime(); // Initial call
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div style={{fontSize: "18px"}}>
      {dateTime}
    </div>
  );
};

export default DateTime;