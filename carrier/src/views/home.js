import React, { Component } from 'react'

import Slider from "../components/slider/slider.js";
import Banner from '../components/banner/banner.js'
// import Map from '../components/map/map.js'
import Greet from '../components/greet/greet.js'
import ProducGrid from '../components/product-grid/product-grid.js'
import ParallaxImg from '../components/parallax-img/parallax-img.js'
import Features from '../components/features/features.js'

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <ParallaxImg />
                <Banner />
                <Features />
                <Greet />
                <ProducGrid />
                <div className="container">
                    <Slider />
                </div>
                {/* <Map /> */}
            </div>
        );
    }
}

export default Home;