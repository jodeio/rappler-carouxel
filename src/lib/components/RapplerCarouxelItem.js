// Application components
import React from 'react';
import './RapplerCarouxel.css';

export default class RapplerCarouxelItem extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        // TODO: Add loading indicator here if necessary
    }

    render() {
        return (
            <div>
                <img src={this.props.carouxel.images[0].full}/>
                <h1>{this.props.carouxel.title}</h1>
                <p>{this.props.carouxel.metadesc}</p>
            </div>
        );
    }
}
