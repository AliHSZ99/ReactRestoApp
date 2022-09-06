import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout(props) 
{
    return (
        <div className='layout'>
            <Navbar />
            <div className='content'>
                { props.children }
            </div>
            <Footer />
        </div>
    )
}
