import React, { Component } from 'react'
import $ from 'jquery'

class Slider extends Component {
    state = {}
    componentDidMount = () => {
        $('.carousel.carousel-slider').carousel({ fullWidth: true })
        $(document).ready(function () {
            $('.parallax').parallax();
        });
    }
    render() {
        return (
            <div className="row">
                <div className="carousel carousel-slider ">
                    <a className="carousel-item" href="#one!"><img src="http://via.placeholder.com/1920x480" alt="" /></a>
                    <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/1920/1080/food/2" alt="" /></a>
                    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/1920/1080/food/3" alt="" /></a>
                    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/1920/1080/food/4" alt="" /></a>
                </div>
            </div>
        );
    }
}

export default Slider;