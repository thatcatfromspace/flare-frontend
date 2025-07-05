import React, { useState, createContext, useContext } from "react";

// Create a context for the tabs state
const TabsContext = createContext(null);

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = value === activeTab;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
        isActive
          ? "bg-blue-600 text-white shadow"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  const { activeTab } = useContext(TabsContext);

  if (value !== activeTab) {
    return null;
  }

  return <div className="mt-4">{children}</div>;
}

// Set display names for debugging
Tabs.displayName = "Tabs";
TabsList.displayName = "TabsList";
TabsTrigger.displayName = "TabsTrigger";
TabsContent.displayName = "TabsContent";
