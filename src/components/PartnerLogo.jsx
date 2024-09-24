import React from 'react';

const PartnerLogo = ({ name }) => (
  <div className="flex flex-col items-center">
    <img src="/placeholder.svg" alt={`Logo do parceiro ${name}`} className="h-16 w-auto object-contain mb-2 mx-auto" />
    <span className="text-sm text-gray-600">{name}</span>
  </div>
);

export default PartnerLogo;
