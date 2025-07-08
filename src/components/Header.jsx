import React, { useState } from "react";

const Header = ({ userName = "Mariia W." }) => {
  const [activeTab, setActiveTab] = useState("General Overview");
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const tabs = ["General Overview", "Calendar", "Documents"];

  const languages = {
    en: { flag: "🇺🇸", label: "En" },
    fr: { flag: "🇫🇷", label: "Fr" },
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "fr" : "en");
  };

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top section with greeting and user info */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Logo/Icon */}
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">31</span>
          </div>

          {/* Greeting */}
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Hello, {userName} 👋
            </h1>
            <p className="text-sm text-gray-500">
              Ready to take the next step in your move?
            </p>
          </div>
        </div>

        {/* Right side with language and user controls */}
        <div className="flex items-center space-x-4">
          {/* Language selector */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm">
              {languages[currentLanguage].flag}{" "}
              {languages[currentLanguage].label}
            </span>
          </button>

          {/* User menu icons */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-5 5v-5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7H4l5-5v5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="px-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
