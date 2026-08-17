import React from 'react'
import './Navbar.css';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {BiSearchAlt2} from 'react-icons/bi';
import {MdFavoriteBorder} from 'react-icons/md';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useState } from 'react';
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <>
    <div className='top'><p><marquee> Get 50% off on your first three orders! Order Now!</marquee></p></div>
    <div className='navbar'>
    <Link to="/Home" className='link'><p1>Home</p1></Link>
    <Link to="/products" className='link'><p1>Products</p1></Link>
        <Link to="/About" className='link'><p1>About</p1></Link>
        <Link to="/All Books" className='link'><p1>Books</p1></Link>
        <Link to="/News" className='link'><p1>News</p1></Link> 
        <img src='Aphrodite.png'></img>
        <h1> Aphrodite</h1>
        
        <span><input type="text" placeholder='    Search'></input><button><BiSearchAlt2/></button>
        <Link to='/login' className='link'><p1><CgProfile size={27} className='ricon'/></p1></Link>
        <p1><MdFavoriteBorder size={27} className='ricon'/></p1>
        <p1><AiOutlineShoppingCart size={27} className='ricon'/></p1></span>   
    </div>

    </>
  )
}

export default Navbar