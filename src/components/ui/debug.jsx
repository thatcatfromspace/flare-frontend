import React from "react";

export function DebugComponent({ children }) {
  console.log(
    "Debug Children:",
    React.Children.toArray(children).map((child) => ({
      type: child.type,
      displayName: child.type?.displayName,
      props: child.props,
    }))
  );

  return children;
}
