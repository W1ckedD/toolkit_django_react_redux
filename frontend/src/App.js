import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <>
      <h1>Toolkit</h1>
    </>
  );
};


const root = createRoot(document.querySelector('#root'));
root.render(<App />);
