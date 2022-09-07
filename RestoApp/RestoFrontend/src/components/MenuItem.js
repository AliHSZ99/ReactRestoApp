import React from 'react'
import { Link } from 'gatsby'

export default function MenuItem() {
    return (
        <div>
            {/* Use gatsby image here: WATCH YOUTUBE VIDEO */}
            <img></img>
            <h2>Menu Item Name</h2>
            <p>Menu Item Description</p>
            <p>Price</p>
            <Link to="/thankyou">Add to cart</Link>
        </div>
    );
}
