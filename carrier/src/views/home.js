import React, { Component } from 'react'

import Slider from "../components/slider/slider.js";
import Banner from '../components/banner/banner.js'

class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Slider />
                <Banner />
            </div>
        );
    }
}

export default Home;