// Application components
import React from 'react';
import '../styles/main.css';

export default class RapplerCarouxelItem extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        // TODO: Add loading indicator here if necessary
    }

    render() {
        return (
            <div className="carouxel">
                <img className="carouxel__image" src={this.props.carouxel.images[0].full}/>
                {/* <h1>{this.props.carouxel.title}</h1>
                <p>{this.props.carouxel.metadesc}</p> */}
            </div>
        );
    }
}
