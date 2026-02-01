
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ProjectInputForm } from './components/ProjectInputForm';
import { LoadingIndicator } from './components/LoadingIndicator';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Footer } from './components/Footer';
import { generateMarketingAssets } from './services/geminiService';
import type { MarketingAssets } from './types';

const App: React.FC = () => {
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [marketingAssets, setMarketingAssets] = useState<MarketingAssets | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (description: string) => {
    setProjectDescription(description);
    setIsLoading(true);
    setError(null);
    setMarketingAssets(null);

    try {
      const assets = await generateMarketingAssets(description);
      setMarketingAssets(assets);
    } catch (err) {
      console.error(err);
      setError('An error occurred while generating marketing assets. Please check the console and try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleReset = useCallback(() => {
    setProjectDescription('');
    setMarketingAssets(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-dark text-gray-200 font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl mx-auto">
          {!marketingAssets && !isLoading && (
            <ProjectInputForm onSubmit={handleSubmit} isLoading={isLoading} />
          )}

          {isLoading && <LoadingIndicator />}

          {error && (
            <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg animate-fade-in">
              <p className="font-semibold">Error</p>
              <p>{error}</p>
              <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 bg-brand-blue text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {marketingAssets && !isLoading && (
            <div className="animate-fade-in">
              <ResultsDisplay assets={marketingAssets} onReset={handleReset} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
