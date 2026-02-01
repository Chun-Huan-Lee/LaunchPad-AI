
import React, { useState } from 'react';

interface ProjectInputFormProps {
  onSubmit: (description: string) => void;
  isLoading: boolean;
}

const GenerateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v1h-2V5a1 1 0 00-1-1H8a1 1 0 00-1 1v1H5V4z" />
        <path fillRule="evenodd" d="M4.75 6A1.75 1.75 0 003 7.75v8.5A1.75 1.75 0 004.75 18h10.5A1.75 1.75 0 0017 16.25v-8.5A1.75 1.75 0 0015.25 6H4.75zm3.79 3.22a.75.75 0 011.06 0l1.72 1.72V8.75a.75.75 0 011.5 0v4.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);

export const ProjectInputForm: React.FC<ProjectInputFormProps> = ({ onSubmit, isLoading }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim().length > 10) {
      onSubmit(description);
    }
  };

  const isButtonDisabled = isLoading || description.trim().length <= 10;

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-in-up">
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Describe Your Project</h2>
            <p className="mt-2 text-lg text-gray-400">Provide a short description, key features, or a link to your README.</p>
        </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., A productivity app that combines a to-do list, calendar, and note-taking, built with React and TypeScript. It helps users organize their tasks and manage their time effectively..."
          className="w-full h-48 p-4 bg-gray-medium border border-gray-light rounded-lg text-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-shadow duration-200 resize-none shadow-lg"
          disabled={isLoading}
        />
        <div className="mt-4 flex flex-col items-center">
            <button
                type="submit"
                disabled={isButtonDisabled}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-dark focus:ring-brand-purple transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
                <GenerateIcon />
                Generate Marketing Kit
            </button>
            {description.trim().length > 0 && description.trim().length <= 10 && (
                <p className="text-sm text-yellow-400 mt-3">Please enter a bit more detail (at least 10 characters).</p>
            )}
        </div>
      </form>
    </div>
  );
};
