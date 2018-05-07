## rappler-carouxel
A minimalist and api ready carousel library built on top of [react-slick](https://github.com/akiran/react-slick)

[![Build Status](https://travis-ci.org/jodeio/rappler-carouxel.svg?branch=master)](https://travis-ci.org/jodeio/rappler-carouxel)
[![Dependencies](https://img.shields.io/david/jodeio/rappler-carouxel.svg)]()
[![Dev Dependencies](https://img.shields.io/david/dev/jodeio/rappler-carouxel.svg)]()
[![npm downloads](https://img.shields.io/npm/dm/rappler-carouxel.svg)](https://www.npmjs.com/package/rappler-carouxel)

[![NPM](https://nodei.co/npm/rappler-carouxel.png)](https://npmjs.org/package/rappler-carouxel)


## Live Demo
[Demo](http://jodeio.github.io/rappler-carouxel)

### Run demo project
```
git clone https://github.com/jodeio/rappler-carouxel.git
npm install
npm start
```

## Prerequisites

Bootstrapped with:
- [create-react-library](https://github.com/DimiMikadze/create-react-library)

## Features
- [x] API Ready
- [x] Default Rappler's top stories api ready
- [x] Responsive
- [x] Minimal dependency
- [x] Carousel is feature rich (built on top of [react-slick](https://github.com/akiran/react-slick))
- [x] Custom API integration
- [x] Custom property fields (default: headline, title, featured image)
- [ ] Custom carousel item view

Available via [npm](https://www.npmjs.com/package/rappler-carouxel)

## Installation
```
npm install rappler-carouxel or yarn add rappler-carouxel
```

## Usage
```
...
import RapplerCarouxel from 'rappler-carouxel';
import 'rappler-carouxel/build/css/index.css';
...
render() {
    return (
      <div>
        <RapplerCarouxel {...carouxel}/>
      </div>
    );
  }
...
```

You can also override the default carousel configurations

```
...
import RapplerCarouxel from 'rappler-carouxel';
import 'rappler-carouxel/build/css/index.css';
...
render() {
    const carouxel = {
        // Default api set
        api: "http://svc.rappler.com/p/topstories",
      
        // Here you can replace the settings and behavior of the base slider, 
        // docs available at https://react-slick.neostack.com/docs/example/
        settings: {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
    return (
      <div>
        <RapplerCarouxel {...carouxel}/>
      </div>
    );
  }
...
```

### Custom API Integration
```
...
import RapplerCarouxel from 'rappler-carouxel';
import 'rappler-carouxel/build/css/index.css';
...
render() {
    const customCarouxelApi = {
      // Request data
      api: "http://example.com/",
      
      // Sample response
      // data: {
      //  "tid": 1,
      //  "content_title": "Lorem ipsum",
      //  "content_description":  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt         //                          ut labore et.",
      //  "cover_image": "http://example.com/media/example.jpg"
      // }
      
      id: "tid",
      title: "content_title",
      description: "content_description",
      image: "cover_image"
    };
    return (
      <div>
        <RapplerCarouxel {...customCarouxelApi}/>
      </div>
    );
  }
...

```

## Additional Configurations
[View Documentation](https://react-slick.neostack.com/docs/get-started)

## Author
[Joshua de Guzman](https://bit.ly/jodeio)

## License
```
MIT License

Copyright (c) 2018 Joshua de Guzman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
© 2018 GitHub, Inc.
```
