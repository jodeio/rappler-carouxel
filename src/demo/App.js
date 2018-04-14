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

      // Important, mapping your api requires id, title, description and image
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
        <h1>rappler-carouxel by <a href="https://bit.ly/jodeio">jodeio</a></h1>
        <h1>Rappler Carouxel's Default Config</h1>
        <RapplerCarouxel {...carouxel}/>
        <h1>Custom API Config</h1>
        <RapplerCarouxel {...customCarouxelApi}/>
      </div>
    );
  }
}