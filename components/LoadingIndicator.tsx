
import React, { useState, useEffect } from 'react';

const messages = [
  "Briefing the AI marketing team...",
  "Brewing fresh creativity...",
  "Polishing taglines to a shine...",
  "Drafting compelling social media posts...",
  "Analyzing project features...",
  "Assembling the perfect pitch...",
  "Almost there, the results are looking great!",
];

export const LoadingIndicator: React.FC = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center space-y-4 p-8 text-center animate-fade-in">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-blue"></div>
            <p className="text-xl font-semibold text-gray-300">Generating Assets</p>
            <p className="text-gray-400 transition-opacity duration-500">{messages[messageIndex]}</p>
        </div>
    );
};
