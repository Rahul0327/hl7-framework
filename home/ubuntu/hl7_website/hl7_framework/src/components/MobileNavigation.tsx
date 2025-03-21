'use client';

import { useState } from 'react';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-blue-600 flex items-center mb-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      
      {isOpen && (
        <div className="bg-white shadow-lg rounded-md p-4 mb-6 border border-gray-200">
          <nav className="space-y-1">
            <ul className="space-y-2">
              <li><a href="/docs/overview" className="block text-blue-600 hover:text-blue-800 py-1">Overview</a></li>
              <li><a href="/docs/data-model" className="block text-blue-600 hover:text-blue-800 py-1">Data Model</a></li>
              <li><a href="/docs/mappings" className="block text-blue-600 hover:text-blue-800 py-1">HL7 Mappings</a></li>
              <li><a href="/docs/implementation" className="block text-blue-600 hover:text-blue-800 py-1">Implementation</a></li>
              <li><a href="/docs/validation" className="block text-blue-600 hover:text-blue-800 py-1">Validation</a></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
