import React, { Component } from 'react'

import Slider from "../components/slider/slider.js";
import Banner from '../components/banner/banner.js'
import Map from '../components/map/map.js'
import Greet from '../components/greet/greet.js'
class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Slider />
                <Banner />
                <Greet />
                {/* <Map /> */}
            </div>
        );
    }
}

export default Home;