import React from 'react';

const PartnerLogo = ({ name, logoUrl }) => (
  <div className="flex flex-col items-center">
    <img src={logoUrl} alt={`Logo do parceiro ${name}`} className="h-16 w-auto object-contain mb-2" />
    <span className="text-sm text-gray-600">{name}</span>
  </div>
);

export default PartnerLogo;
