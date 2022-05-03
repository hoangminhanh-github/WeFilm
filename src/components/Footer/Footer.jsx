import React from 'react'
import './Footer.scss'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='footer' style={{backgroundImage:`url(img/footer-bg.jpg)`}}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <img src="img/tmovie.png" alt="" />
          <Link to='/'>Movies</Link>
        </div>
        <div className="footer__content__menus">

        <div className="footer__content__menu">
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ Us</Link>
            <Link to='/'>Premiums</Link>
            <Link to='/'>Pravacy policy</Link>
        </div>
       <div className="footer__content__menu">
            <Link to='/'>You must to watch</Link>
            <Link nk to='/'>Recent release</Link>
            <Link to='/'>Term of Services</Link>
            <Link to='/'>About Us</Link>
        </div>
        <div className="footer__content__menu">
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ Us</Link>
            <Link to='/'>Premiums</Link>
            <Link to='/'>Pravacy policy</Link>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Footer