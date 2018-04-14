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
    const customCarouxelApi = {
      // For api, please refer to api changes at docs www.github.com/jodeio/rappler-carouxel#readme.com here
      api: "http://svc.rappler.com/p/topstories",

      // You may opt to pass
      // #1 directly the key (eg. "key" data[key] yields data["key"])
      // #2 or array (eg. 
      // image =
      // [
      //    "images",
      //    0,
      //    "full"
      // ]
      // yields data["images"][0]["full"]

      id: "id",
      title: "title",
      description: "metadesc",
      image: [
        "images",
        0,
        "full"
      ]
    };
    return (
      <div className="app">
        <h2>rappler-carouxel by <a href="https://bit.ly/jodeio">jodeio</a></h2>

        <ul>
          <li><img src="https://travis-ci.org/jodeio/rappler-carouxel.svg?branch=master" alt="build-status" /></li>
          <li><img src="https://img.shields.io/david/jodeio/rappler-carouxel.svg" alt="dependencies" /></li>
          <li><img src="https://img.shields.io/david/dev/jodeio/rappler-carouxel.svg" alt="dev-dependencies" /></li>
          <li><img src="https://img.shields.io/npm/dm/rappler-carouxel.svg" alt="downloads" /></li>
        </ul>

        <img className="npm" src="https://nodei.co/npm/rappler-carouxel.png" alt="npm" />

        <ul>
          <li><a href="https://github.com/jodeio/rappler-carouxel#readme">Docs</a></li>
          <li><a href="https://github.com/jodeio/rappler-carouxel">GitHub</a></li>
          <li><a href="#">Share</a></li>
        </ul>

        <h2>Rappler Carouxel's Default Config</h2>
        <div className="demo-1">
          <RapplerCarouxel {...carouxel} />
        </div>

        <h2>Custom API Config</h2>
        <div className="demo-2">
          <RapplerCarouxel {...customCarouxelApi} />
        </div>
      </div>
    );
  }
}