
import React from 'react';
import type { MarketingAssets, Feature, SocialPosts } from '../types';
import { AssetCard } from './AssetCard';

interface ResultsDisplayProps {
  assets: MarketingAssets;
  onReset: () => void;
}

const NewProjectIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ assets, onReset }) => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-white">
          Your Marketing Kit for <span className="text-brand-blue">{assets.projectName}</span>
        </h2>
        <p className="mt-2 text-lg text-gray-400">
          Here are the AI-generated assets to kickstart your launch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-3">
            <AssetCard title="Elevator Pitch">
                <p className="text-gray-300">{assets.elevatorPitch}</p>
            </AssetCard>
        </div>
        
        {assets.taglines.map((tagline, index) => (
          <AssetCard key={`tagline-${index}`} title={`Tagline #${index + 1}`} contentToCopy={tagline}>
            <p className="text-gray-300 font-medium text-lg">"{tagline}"</p>
          </AssetCard>
        ))}
        
        {assets.features.map((feature: Feature, index) => (
          <AssetCard key={`feature-${index}`} title={`${feature.emoji} ${feature.name}`}>
            <p className="text-gray-300">{feature.description}</p>
          </AssetCard>
        ))}

        <div className="md:col-span-2 lg:col-span-3">
             <AssetCard title="Social Media: Twitter">
                <div className="space-y-4">
                {assets.socialPosts.twitter.map((post, index) => (
                     <div key={`twitter-${index}`} className="p-3 bg-gray-medium/50 rounded-lg">
                        <p className="text-gray-300 whitespace-pre-wrap">{post}</p>
                     </div>
                ))}
                </div>
            </AssetCard>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
             <AssetCard title="Social Media: LinkedIn">
                 <div className="p-3 bg-gray-medium/50 rounded-lg">
                    <p className="text-gray-300 whitespace-pre-wrap">{assets.socialPosts.linkedin[0]}</p>
                 </div>
            </AssetCard>
        </div>
      </div>
       <div className="mt-8 text-center">
            <button
                onClick={onReset}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-brand-blue rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-dark focus:ring-brand-blue transition-all duration-300"
            >
                <NewProjectIcon />
                Start a New Project
            </button>
        </div>
    </div>
  );
};
