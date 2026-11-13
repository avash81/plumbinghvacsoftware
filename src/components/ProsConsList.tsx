import React from 'react';

interface ProsConsListProps {
  pros: string[];
  cons: string[];
  productName?: string;
  className?: string;
}

export const ProsConsList: React.FC<ProsConsListProps> = ({
  pros,
  cons,
  productName,
  className = '',
}) => {
  return (
    <div id="pros-cons-container" className={`grid grid-cols-1 md:grid-cols-2 gap-10 my-6 ${className}`}>
      <div>
        <h3 className="text-xl">{productName ? `What works in ${productName}` : 'What works'}</h3>
        <ul className="mt-3 border-t border-line">
          {pros.map((pro) => (
            <li key={pro} className="border-b border-line py-3 text-sm leading-relaxed">
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl">{productName ? `Where ${productName} falls short` : 'Where it falls short'}</h3>
        <ul className="mt-3 border-t border-line">
          {cons.map((con) => (
            <li key={con} className="border-b border-line py-3 text-sm leading-relaxed">
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
