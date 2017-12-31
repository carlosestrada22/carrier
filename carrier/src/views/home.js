import React, { Component } from 'react'

import Slider from "../components/slider/slider.js";
import Banner from '../components/banner/banner.js'
// import Map from '../components/map/map.js'
import Greet from '../components/greet/greet.js'
import ProducGrid from '../components/product-grid/product-grid.js'
import ParallaxImg from '../components/parallax-img/parallax-img.js'

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* <Slider /> */}
                <ParallaxImg />
                <Banner />
                <Greet />
                <ProducGrid />
                {/* <Map /> */}
            </div>
        );
    }
}

export default Home;