## rappler-carouxel
A minimalist and api rich carousel library built on top of [react-slick](https://github.com/akiran/react-slick)

[![Build Status](https://travis-ci.org/jodeio/rappler-carouxel.svg?branch=master)](https://travis-ci.org/jodeio/rappler-carouxel)
[![Dependencies](https://img.shields.io/david/jodeio/rappler-carouxel.svg)]()
[![Dev Dependencies](https://img.shields.io/david/dev/jodeio/rappler-carouxel.svg)]()
[![npm downloads](https://img.shields.io/npm/dm/rappler-carouxel.svg)](https://www.npmjs.com/package/rappler-carouxel)

[![NPM](https://nodei.co/npm/rappler-carouxel.png)](https://npmjs.org/package/rappler-carouxel)


## Live Demo
[Demo](http://www.jodeio.github.io/rappler-carouxel)


### Run demo project
```
git clone https://github.com/jodeio/rappler-carouxel.git
npm install
npm start
```

## Pre-release

- [x] Base rappler top stories api ready
- [x] Responsive
- [x] Minimal dependency
- [x] Carousel is feature rich (built on top of [react-slick](https://github.com/akiran/react-slick))
- [ ] Custom API integration
- [ ] Custom carousel item view
- [ ] Custom property fields (default: headline, title, featured image)

Available via [npm](https://www.npmjs.com/package/rappler-carouxel)

## Installation
```
npm install rappler-carouxel or yarn add rappler-carouxel
```

## Usage
```
...
import RapplerCarouxel from 'rappler-carouxel';
...
render() {
    const carouxel = {
      // For api, please refer to api changes at docs www.github.com/jodeio/rappler-carouxel#readme.com here
      api: "http://svc.rappler.com/p/topstories",
      
      // Here you can replace the settings and behavior of the base slider, 
      docs available at https://react-slick.neostack.com/docs/example/
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
...

```

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
