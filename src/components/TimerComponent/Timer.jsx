import React, { useState, useEffect } from 'react';
import "./Timer.css";

const TimerComponent = () => {
  // Initial duration: 3 days (72 hours)
  const initialTime = 72 * 60 * 60; // 72 hours in seconds

  // State to track the time in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Set an interval to update the time every 3 seconds
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        // If timeLeft reaches 0, stop the timer
        if (prevTime <= 0) {
          clearInterval(intervalId);  // Stop the interval
          return 0;
        }
        return prevTime - 3; // Decrease time by 3 seconds
      });
    }, 3000); // Update every 3 seconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // Convert seconds to days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (60 * 60 * 24)); // Days
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)); // Hours
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60); // Minutes
  const seconds = timeLeft % 60; // Seconds

  return (
    <div className="timer-container">
      <div className="time-display">
        <div className="time-unit">
          <p>{days}</p>
          <p>Days</p>
        </div>
        <span className='spantimer'>:</span>
        <div className="time-unit">
          <p>{hours}</p>
          <p>Hours</p>
        </div>
        <span className='spantimer'>:</span>
        <div className="time-unit">
          <p>{minutes}</p>
          <p>Minutes</p>
        </div>
        <span className='spantimer'>:</span>
        <div className="time-unit">
          <p>{seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default TimerComponent;

