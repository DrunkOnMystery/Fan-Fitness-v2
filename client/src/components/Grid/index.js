import React from "react";

// Exporting the Container, Row, and Col components from this file

export function Container({ children }) {
  return <div>{children}</div>;
}


export function Row({ children }) {
  return <div>{children}</div>;
}

export function Col({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}