
import React from 'react';
import { CopyButton } from './CopyButton';

interface AssetCardProps {
  title: string;
  children: React.ReactNode;
  contentToCopy?: string;
}

export const AssetCard: React.FC<AssetCardProps> = ({ title, children, contentToCopy }) => {
  // Use provided contentToCopy, or try to extract text from children for simple cases.
  const textToCopy = contentToCopy ?? (typeof children === 'string' ? children : (React.isValidElement(children) && 'props' in children && typeof children.props.children === 'string' ? children.props.children : ''));

  return (
    <div className="bg-gray-medium border border-gray-light/30 rounded-lg p-5 shadow-lg relative transition-all duration-300 hover:border-brand-blue/50 hover:shadow-2xl">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-white pr-8">{title}</h3>
        {textToCopy && (
           <div className="absolute top-4 right-4">
                <CopyButton textToCopy={textToCopy} />
           </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
