import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Modal from './lib/Modal';

const App = () => {
  return <Modal 
            message="Your message here" 
            buttonText="OK" 
          />;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);