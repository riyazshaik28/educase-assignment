import React, { useState, useContext } from 'react';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

export default function NavigationBar() {
  const { currentPage, setCurrentPage } = useContext(AppContext);
  const navigate = useNavigate();
  const totalPages = 4;

  const routes = ['/', '/login', '/signup', '/profile'];
  const goToHome = () => {
    setCurrentPage(1);
    navigate(routes[0]);
  };

  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(routes[currentPage - 2]);
    }
  };

  const goForward = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      navigate(routes[currentPage]);
    }
  };

  return (
      <div className="w-full h-full shadow-2xl overflow-hidden">
        {/* Navigation Header */}
        <div className="flex items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
          <button
            onClick={goToHome}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Home"
          >
            <Home className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={goBack}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              currentPage === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Back"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-sm font-medium text-gray-700">
            {currentPage} of {totalPages}
          </div>

          <button
            onClick={goForward}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              currentPage === totalPages
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Forward"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
    </div>
  );
}