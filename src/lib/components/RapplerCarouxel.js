// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Application components
import React from 'react';
import '../styles/main.css';
import RapplerCarouxelItem from '../components/RapplerCarouxelItem';

export default class RapplerCarouxel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultApi: "http://svc.rappler.com/p/topstories",
      api: props.api,
      settings: props.settings,
      data: []
    }
  }

  componentDidMount() {
    this.checkSettings();
    this.retrieveData();
  }

  // Retrieve data
  retrieveData = () => {
    // Assign default api when no api is set
    var selectedApi = this.state.api ? this.state.api : this.state.defaultApi;
    console.log(selectedApi);

    fetch(selectedApi)
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(data => {
              this.setState(
                this.state.data = data
              )
              console.log(this.state.data);
            });
        }
      }).catch(e => {
        console.log(e);
      });

  }

  // Verify settings to be passed on react-slick
  checkSettings = () => {
    // Init default settings
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      className: "slides"
    }

    // Override default settings
    if (this.state.settings != null) {
      settings = this.state.settings;
    }

    // Apply settings
    this.setState(
      this.state.settings = settings
    )
  }

  render() {
    return (
      <div>
        {/* 
          Default object mapping is base on rappler's top stories api structure
          ...
            title: "Lorem ipsum",
            metadesc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            images: [
              0:
                full: "www.example.com/media/stories/top/full/sample.jpg"
                tn: "www.example.com/media/stories/top/tn/sample.jpg"
            ] 
          ...
        */}

        <Slider {...this.state.settings}>
          {this.state.data.map((data, key) => {
            return <RapplerCarouxelItem key={data.id} title={data.title} description={data.metadesc} image={data.images[0].full} />;
          })}
        </Slider>
      </div>
    );
  }
}
