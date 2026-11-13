import React from 'react';

interface VerifiedDateBadgeProps {
  date: string;
  testedVersion?: string;
  className?: string;
}

export const VerifiedDateBadge: React.FC<VerifiedDateBadgeProps> = ({
  date,
  testedVersion,
  className = '',
}) => {
  return (
    <p id="verified-date-badge" className={`text-sm text-muted ${className}`}>
      Checked {date}
      {testedVersion ? ` · ${testedVersion}` : ''}
    </p>
  );
};
