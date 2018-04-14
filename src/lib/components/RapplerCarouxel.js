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
      tag: "RapplerCarouxel: ",
      defaultApi: "http://svc.rappler.com/p/topstories",
      api: props.api,
      settings: props.settings,
      data: [],

      // Default rapper api base keys
      id: "id",
      title: "title",
      description: "metadesc",
      image: [
        "images",
        0,
        "full"
      ]
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

    fetch(selectedApi)
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(data => {
              this.setState(
                this.state.data = data
              )
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
      autoplay: false,
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

  // Maps dynamic property of the response
  map = (data, properties) => {
    // If provided properties is not array, retrieve property via key
    if (!Array.isArray(properties)) {
      return data[properties];
    }

    // If properties is array proceed
    var map = data;

    properties.map((key) => {
      return map[key] ? map = map[key] : map;
    })

    return map;
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
            return <RapplerCarouxelItem
              key={this.map(data, this.props.id ? this.props.id : this.state.id)}
              title={this.map(data, this.props.title ? this.props.title : this.state.title)}
              description={this.map(data, this.props.description ? this.props.description : this.state.description)}
              image={this.map(data, this.props.image ? this.props.image : this.state.image)} />;
          })}
        </Slider>
      </div>
    );
  }
}