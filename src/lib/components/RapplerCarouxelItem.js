// Application components
import React from 'react';
import '../styles/main.css';

export default class RapplerCarouxelItem extends React.Component {
    render() {
        return (
            <div className="carouxel container">
                <img className="carouxel__image" src={this.props.image} alt={this.props.title}/>
                <div className="carouxel__content">
                    <h1 className="carouxel__headline">{this.props.title}</h1>
                    <p className="carouxel__intro">{this.props.description}</p>
                </div>
            </div>
        );
    }
}