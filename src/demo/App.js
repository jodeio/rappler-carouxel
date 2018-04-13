import React from 'react';
import RapplerCarouxel from '../lib';

export default class App extends React.Component {
  render() {
    const carouxel = {
      // For api, please refer to api changes at docs www.url.com here
      api: "http://svc.rappler.com/p/topstories",
      // settings: {
      //   autoplay: true,
      //   dots: true,
      //   infinite: true,
      //   speed: 100,
      //   slidesToShow: 1,
      //   slidesToScroll: 1
      // }
    };
    return (
      <div>
        <RapplerCarouxel {...carouxel}/>
      </div>
    );
  }
}