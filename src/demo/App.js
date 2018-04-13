import React from 'react';
import RapplerCarouxel from '../lib';

export default class App extends React.Component {
  render() {
    const carouxel = {
      // For api, please refer to api changes at docs www.github.com/jodeio/rappler-carouxel#readme.com here
      api: "http://svc.rappler.com/p/topstories",
      
      // Here you can replace the settings and behavior of the base slider, docs available at https://react-slick.neostack.com/docs/example/
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