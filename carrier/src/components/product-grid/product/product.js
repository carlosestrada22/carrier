import React from 'react'
import './product.css'
const Product = ({ name, desc }) => {
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <a href="https://adbeus.com/chicago/cafe-integral-chicago/" >
                        <img width="305" src="http://via.placeholder.com/411x411" className="responsive-img wp-post-image" alt="Café Integral Chicago" /></a>
                </div>
                <div className="card-content">
                    <p className="area"><a href="https://adbeus.com/coffee/chicago/">{desc}</a></p>
                    <a href="https://adbeus.com/chicago/cafe-integral-chicago/" data-deeplink="adbeus://cafe-integral-chicago"><span className="card-title activator brown-text text-darken-4">{name}</span></a>
                </div>
            </div>
        </div >
    )
}

export default Product