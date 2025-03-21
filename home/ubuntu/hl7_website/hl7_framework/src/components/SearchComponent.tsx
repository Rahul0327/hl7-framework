'use client';

import { useState, useEffect } from 'react';

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search functionality - in a real implementation, this would search through actual content
  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    const timer = setTimeout(() => {
      const results = [
        { title: 'Overview', url: '/docs/overview', section: 'Introduction' },
        { title: 'Data Model', url: '/docs/data-model', section: 'Core Entities' },
        { title: 'HL7 Mappings', url: '/docs/mappings', section: 'FHIR Mappings' },
        { title: 'Implementation', url: '/docs/implementation', section: 'Security' },
        { title: 'Validation', url: '/docs/validation', section: 'Compliance Assessment' },
      ].filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.section.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      
      {searchTerm.length >= 2 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500">Searching...</div>
          ) : searchResults.length > 0 ? (
            <ul className="py-1">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <a 
                    href={result.url} 
                    className="block px-4 py-2 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-blue-600">{result.title}</div>
                    <div className="text-sm text-gray-500">{result.section}</div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
