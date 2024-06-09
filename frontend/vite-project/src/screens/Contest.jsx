import React, { useState, useEffect } from 'react';
import contest from './images/contest.jpg';
import Navbar from './Navbar';

const Contest = () => {
  const [timeLeft, setTimeLeft] = useState(48);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 3600000); 
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-[15%] mx-[5%] top-[12%]">
        <div className="max-w-xs mx-[4%] p-8 bg-white rounded-lg shadow-lg">
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome to the Terrace Farming Community Contest!</h1>
            <h2 className="text-xl font-semibold mb-2">Upcoming Event: Warm-Party</h2>
            <h3 className="text-lg font-medium mb-4">Time left: {timeLeft} hours</h3>
            <div>
              <img src={contest} alt="Event" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
        <div className="max-w-xs h-[5%] mx-4 p-8 bg-white rounded-lg shadow-lg">
          <div>
            <h1 className="text-3xl font-bold mb-4">Upcoming</h1>
            <h2 className="text-l font-semibold mb-2">Upcoming Event</h2>
            <h3 className="text-l font-medium mb-4">Time left: 5 months to go</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
