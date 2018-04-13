import React from 'react';
import ReactDOM from 'react-dom';
import RapplerCarouxel from './RapplerCarouxel';

it('RapplerCarouxel renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RapplerCarouxel />, div);
});
