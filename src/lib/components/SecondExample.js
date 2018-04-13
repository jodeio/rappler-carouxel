import React from 'react';
import './SecondExample.css';

const SecondExample = () => (
  <div className="SecondExample">
    <p className="SecondExample-text">
      Based on Facebook's {'\u00A0'}
      <a
        className="SecondExample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/facebookincubator/create-react-app"
      >
        Create react app
      </a>
    </p>
  </div>
);

export default SecondExample;
